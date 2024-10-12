import React from 'react'
import TourCard from '../../shared/TourCard';
import { Button, Col } from 'reactstrap';
import useFetch from '../../hooks/useFetch';
import { BASE_URL } from '../../utils/config';

const FeaturedToursList = () => {
  const {data:featuredTours,loading,error}=useFetch(`${BASE_URL}/tours/search/getFeaturedTours`);
  return (<>
  {
    loading && <h4>Loading.......</h4>
  }
  {
    error && <h6>{error}</h6>
  }
  {featuredTours?.slice(0, 8).map(tour=>(
      <Col lg='3' className='mb-4' key={tour.id}><TourCard tour={tour}/></Col>
    ))
  }
  </>);
}

export default FeaturedToursList