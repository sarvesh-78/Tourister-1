import React from 'react'
import ServiceCard from './ServiceCard'
import { Col,Row } from 'reactstrap'
import weatherImg from "../assets/images/weather.png"
import searchImg from "../assets/images/search.svg"
import budgetImg from "../assets/images/budget.svg"
import secImg from "../assets/images/secure.svg"

const serviceData =[
    {
        imgUrl: weatherImg,
        title: "Calculate Weather",
        desc: "Stay one step ahead with real-time weather updates tailored to your travel destinations."
    },
    {
        imgUrl: searchImg,
        title: "Find Your Getaway",
        desc: "Get your perfect travel plan with our tailored itineraries and expert recommendations."
    },
    {
        imgUrl: budgetImg,
        title: "Budget Friendly",
        desc: "Discover budget-friendly travel plans that maximize your experiences while keeping costs in check."
    },
    {
        imgUrl: secImg,
        title: "Trusted and Secure",
        desc: "Enjoy secure and friendly travel plans designed to make your journey safe and enjoyable."
      }
];

const ServiceList = () => {
  return (
    <div>
        {
            <Row>
              {serviceData.map((item, index) => (
                <Col lg="3" md="6" sm="12" className='mb-4' key={index}>
                  <ServiceCard item={item} />
                </Col>
              ))}
            </Row>
        }
    </div>
  )
}

export default ServiceList