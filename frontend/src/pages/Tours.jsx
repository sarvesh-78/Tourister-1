import React, { useEffect, useState } from 'react';
import CommonSection from "../shared/CommonSection";
import TourCard from "../shared/TourCard";
import "../styles/Tour.css";
import SearchBar from "../shared/SearchBar";
import { Container, Row, Col } from "reactstrap";
import useFetch from '../hooks/useFetch';
import { BASE_URL } from '../utils/config';

const Tours = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const { data: tours, loading, error } = useFetch(`${BASE_URL}/tours?page=${page}`);
  const { data: allTours } = useFetch(`${BASE_URL}/tours`);
  const { data: tourCount } = useFetch(`${BASE_URL}/tours/search/getTourCount`);

  useEffect(() => {
    const pages = Math.ceil(tourCount / 8); // Assuming you want 8 tours per page
    setPageCount(pages);
    window.scrollTo(0,0);
  }, [page,tourCount,tours]);

  return (
    <>
      <CommonSection title={"Destinations"} />
      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          {loading && <h4 className='text-center pt-5'>Loading....</h4>}
          {error && <h4 className='text-center pt-5'>{error}</h4>}
          {
            !loading && !error &&
            <Row>
              <h1>All Tours</h1>
              {
                tours?.length > 0 ?
                  tours.map((tour) => (
                    <Col lg="3" md="6" sm="6" className="mb-4" key={tour._id}>
                      <TourCard tour={tour} />
                    </Col>
                  )) :
                  <h4 className="text-center pt-5">No tours found.</h4>
              }
              <Col lg='12'>
                <div className="pagination d-flex align-items-center justify-content-center mt-4 ga-3">
                  {[...Array(pageCount).keys()].map(number=>(
                    <span  key={number} onClick={()=>setPage(number)}
                    className={page===number?'active__page':""}>
                      {number+1}
                    </span>
                  ))}

                </div>
              </Col>
            </Row>
          }
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <h1>Trending</h1>
          <Row>
          {
            allTours?.length > 0 ?
              allTours
                .filter(tour => ["Tokyo", "Phuket", "Maldives"].includes(tour.city)) 
                .slice(0, 3)
                .map((tour) => (
                  <Col lg="3" md="6" sm="6" className="mb-4" key={tour._id}>
                    <TourCard tour={tour} />
                  </Col>
                )) :
              <h4 className="text-center pt-5">No romantic trips found.</h4>
          }
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <h1>Romantic Trips❤️</h1>
          <Row>
          {
            allTours?.length > 0 ?
              allTours
                .filter(tour => ["Paris", "Goa", "Maldives"].includes(tour.city)) 
                .slice(0, 3)
                .map((tour) => (
                  <Col lg="3" md="6" sm="6" className="mb-4" key={tour._id}>
                    <TourCard tour={tour} />
                  </Col>
                )) :
              <h4 className="text-center pt-5">No romantic trips found.</h4>
          }
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <h1>Budget Bliss✅</h1>
          <Row>
          {
            allTours?.length > 0 ?
              allTours
                .filter(tour => ["London", "Italy", "Bali"].includes(tour.city)) 
                .slice(0, 3)
                .map((tour) => (
                  <Col lg="3" md="6" sm="6" className="mb-4" key={tour._id}>
                    <TourCard tour={tour} />
                  </Col>
                )) :
              <h4 className="text-center pt-5">No romantic trips found.</h4>
          }
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Tours;
