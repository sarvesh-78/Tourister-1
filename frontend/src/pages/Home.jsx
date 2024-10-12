import React from 'react';
import '../styles/home.css';
import { Container,Row,Col } from 'reactstrap';
import ServiceList from '../Services/ServiceList';
import Subtitle from '../shared/Subtitle';
import Contact from './Contact';
import CarouselSection from '../components/image-gallery/CarouselSection';
import MasonryImagesGallery from '../components/image-gallery/MasonryImageGalary';
import FeaturedToursList from '../components/Featured-tours/FeaturedToursList';
import heroImg from '../assets/images/hero-img1.webp';
import SearchBar from '../shared/SearchBar';
import heroImg2 from "../assets/images/hero-img02.webp";
import heroVideo from "../assets/images/hero-video.mp4";


const Home = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
          <Row className='hero-section'>
            <Col lg="6" >
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                </div>
                <h1>
                  Discover A World Beyond The{" "}
                  <span className="highlight">Horizon</span>
                </h1>
                <p>
                  Step into a world where every journey sparks a new adventure, and every destination brings unforgettable memories. Whether you're wandering through vibrant city streets, hiking along tranquil mountain trails, or sailing the serene waters of hidden bays, the world awaits your discovery. 
                </p>

              </div>

            </Col>
            <Col lg="2">
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box video-box mt-4">
                <video src={heroVideo} alt="" autoPlay loop muted />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src={heroImg2} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <h5 className="services__subtitle">What We Serve</h5>

              <h2 className="services__title">We Offer Our Best Services</h2>
              <hr></hr>
            </Col>
            </Row>
            <ServiceList/>
        </Container>
      </section>
      
      <section>
        <Container>
          <Row>
            <Col lg="12" className='mb-5'>
              <Subtitle subtitle={"Explore"}/>
              <h2 className="featured__tour-title">Our Featured Tours</h2>
            </Col>
            <FeaturedToursList/>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Gallery"}/>
              <h2 className="gallery__title">
                Visit Our Customers Tour Gallery
              </h2>
            </Col>
            <Col lg="12">
              <MasonryImagesGallery/>
            </Col>
          </Row>
        </Container>
      </section>
      <CarouselSection/>
      <Contact/>
    </>
  );
};

export default Home;