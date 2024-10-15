import React, { useState, useContext } from "react";
import "./booking.css";
import { Form, FormGroup, ListGroup, Button, ListGroupItem, Alert } from "reactstrap";
import { AuthContext } from "../../context/AuthContext";
import { BASE_URL } from "../../utils/config";

const Booking = ({ tour, avgRating, totalRating, reviews }) => {
  const { price, title } = tour;
  
  const { user } = useContext(AuthContext);
  console.log("User Context:", user); 

  const initialBookingState = {
    userId: user ? user.username : "",
    userEmail: user ? user.email : "",
    tourName: title,
    fullName: "",
    phone: "",
    bookAt: "",
    groupSize: "",
  };

  const [booking, setBooking] = useState(initialBookingState);

  const [isBookingSuccessful, setIsBookingSuccessful] = useState(false);
  const [isBookingFailed, setIsBookingFailed] = useState(false);
  const [isLoginAlertVisible, setIsLoginAlertVisible] = useState(false);

  const handleChange = (e) => {
    setBooking((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    if (!user) {
        setIsLoginAlertVisible(true);
        return;
    }

    console.log("Booking Request Data:", booking); 

    try {
        const response = await fetch(`${BASE_URL}/booking`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include", 
            body: JSON.stringify(booking),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error("Error Response:", errorData); 
            setIsBookingFailed(true);
            alert(`Error: ${errorData.message}`);
            return;
        }

        // Remove the unused data variable
        await response.json(); // you can use this if needed but it’s not being assigned to a variable
        setIsBookingSuccessful(true);
        setBooking(initialBookingState); 

    } catch (error) {
        console.error("Fetch error:", error);
        setIsBookingFailed(true);
        alert("An error occurred while processing your request. Please try again.");
    }
  };

  const currentDate = new Date().toISOString().split("T")[0];

  const taxes = (0.05 * price * (booking.groupSize || 1)).toFixed(2);
  const total = (price * (booking.groupSize || 1) * 1.05).toFixed(2);

  return (
    <div className="booking">
      {isBookingSuccessful && (
        <Alert color="success">
          Booking Successful
        </Alert>
      )}

      {isBookingFailed && (
        <Alert color="danger">
          Failed to book. Please try again.
        </Alert>
      )}

      {isLoginAlertVisible && (
        <Alert color="warning">
          Please login to proceed with the booking.
        </Alert>
      )}

      <div className="booking__top d-flex align-items-center justify-content-between">
        <h3>
          ${price} <span>/Per Person</span>
        </h3>
        <span className="tour__rating d-flex align-items-center gap-1">
          <i className="ri-star-fill"></i>
          {avgRating === 0 ? null : avgRating}
          {totalRating === 0 ? (
            <span>Not Rated</span>
          ) : (
            <span>({reviews.length || 0})</span>
          )}
        </span>
      </div>

      <div className="booking__form">
        <h5>Information</h5>
        <Form className="booking__info-form" onSubmit={handleClick}>
          <FormGroup>
            <input
              type="text"
              placeholder="Full Name"
              id="fullName"
              required
              onChange={handleChange}
              value={booking.fullName}
            />
          </FormGroup>
          <FormGroup>
            <input
              type="number"
              placeholder="Phone"
              id="phone"
              required
              onChange={handleChange}
              value={booking.phone}
            />
          </FormGroup>
          <FormGroup className="d-flex align-items-center gap-3">
            <input
              type="date"
              placeholder="Date"
              id="bookAt"
              required
              onChange={handleChange}
              value={booking.bookAt}
              min={currentDate} 
            />
            <input
              type="number"
              placeholder="Group Size"
              id="groupSize"
              required
              onChange={handleChange}
              value={booking.groupSize}
            />
          </FormGroup>
          <Button type="submit" className="btn primary__btn w-100 mt-4">
            Book Now
          </Button>
        </Form>
      </div>

      <div className="booking__bottom">
        <ListGroup>
          <ListGroupItem className="border-0 px-0">
            <h5 className="d-flex align-items-center gap-1">
              ${price} <i className="ri-close-line"></i>
              {booking.groupSize || 1} Person
            </h5>
            <span>${price * (booking.groupSize || 1)}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0">
            <h5>Taxes</h5>
            <span>${taxes}</span>
          </ListGroupItem>

          <ListGroupItem className="border-0 px-0 total">
            <h5>Total</h5>
            <span>${total}</span>
          </ListGroupItem>
        </ListGroup>
      </div>
    </div>
  );
};

export default Booking;
