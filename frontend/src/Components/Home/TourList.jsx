import React from 'react'
import {Col} from 'react-bootstrap'
import tourData from '../../assets/data/tours'
import TourCard from './TourCard'
import useFetch from '../../hooks/useFetch'
import { BASE_URL } from '../../utils/config'

const TourList = () => {
  const {data: featuredTours,loading,error} = useFetch(`${BASE_URL}/tours/searchgetFeaturedTour`)
  // console.log(featuredTours);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
      {loading && <h4>Loading.....</h4>}
      {error && <h4>{error}</h4>}
      {/* {!loading && !error && featuredTours?.map((tour) => ( */}
      {tourData?.map((tour) => (
        <Col lg="3" className="mb-3" key={tour.id}>
          <TourCard tour={tour} />
        </Col>
      ))}
    </div>
  );
}

export default TourList