import React, { useRef } from "react";
import './search-bar.css';
import { Col, Form, FormGroup } from "reactstrap";
import { BASE_URL } from "../utils/config";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
    const locationRef = useRef(""); 
    const yourLocationRef = useRef(""); 
    const maxGroupSizeRef = useRef(0);
    const navigate = useNavigate();

    const searchHandler = async () => {
        const city = locationRef.current.value;
        const yourLocation = yourLocationRef.current.value; 
        const maxGroupSize = maxGroupSizeRef.current.value;

        if (city === "" || yourLocation === "" || maxGroupSize === "") {
            return alert('All fields are required.');
        }

        const res = await fetch(`${BASE_URL}/tours/search/getTourBySearch?city=${city}&yourLocation=${yourLocation}&maxGroupSize=${maxGroupSize}`);
        
        if (!res.ok) {
            alert('Something went wrong');
            return;
        }

        const result = await res.json();
        navigate(`/tours/search?city=${city}&yourLocation=${yourLocation}&maxGroupSize=${maxGroupSize}`, { state: result.data });
    };

    return (
        <Col className='d-flex justify-content-center' lg="12">
            <div className="search__bar">
                <Form className="d-flex align-items-center gap-4">
                    <FormGroup className="d-flex gap-3 form__group form__group-fast">
                        <span>
                            <i className="ri-map-pin-line" />
                        </span>
                        <div>
                            <h6>Destination</h6>
                            <input
                                type="text"
                                placeholder="Where are you going?"
                                ref={locationRef}
                            />
                        </div>
                    </FormGroup>
                    <FormGroup className="d-flex gap-3 form__group form__group-fast">
                        <span>
                            <i className="ri-map-pin-time-line" />
                        </span>
                        <div>
                            <h6>Your Location</h6>
                            <input
                                type="text"
                                placeholder="Your Location"
                                ref={yourLocationRef}
                            />
                        </div>
                    </FormGroup>
                    <FormGroup className="d-flex gap-3 form__group form__group-fast">
                        <span>
                            <i className="ri-group-line" />
                        </span>
                        <div>
                            <h6>Max People</h6>
                            <input type="number" placeholder="0" ref={maxGroupSizeRef} />
                        </div>
                    </FormGroup>
                    <span className="search__icon" type="submit" onClick={searchHandler}>
                        <i className="ri-search-line" />
                    </span>
                </Form>
            </div>
        </Col>
    );
}

export default SearchBar;
