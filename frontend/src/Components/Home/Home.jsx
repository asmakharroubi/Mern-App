// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import Destination from "../../models/Destination";
// import DestinationCard from "../DestinationCard/DestinationCard";
// import "./HomePage.css";

// const Home = () =>{
//   const [featuredDestinations, setFeaturedDestinations] = useState([]);
//   const [popularDestinations, setPopularDestinations] = useState([]);

//   useEffect(() => {
//     // Fetch destination data from the server
//     const fetchDestinations = async () => {
//       const response = await fetch("destination-data-api-endpoint");
//       const data = await response.json();
//       const destinations = data.map((destinationData) => new Destination(destinationData));
//       // Filter for featured destinations
//       const featured = destinations.filter((destination) => destination.isFeatured);
//       // Sort by popularity
//       const popular = destinations.sort((a, b) => b.popularity - a.popularity);
//       setFeaturedDestinations(featured);
//       setPopularDestinations(popular);
//     };

//     fetchDestinations();
//   }, []);

//   return (
//     <div className="home-container">
//       <div className="hero-container">
//         <div className="hero-content">
//           <h1 className="hero-title">Travel the World with Us</h1>
//           <p className="hero-description">Experience new cultures and create unforgettable memories with our expertly curated travel experiences.</p>
//           <Link to="/destinations" className="btn btn-primary">Explore Destinations</Link>
//         </div>
//         <div className="hero-image-container">
//           <img src="hero-image.jpg" alt="Hero Image" className="hero-image" />
//         </div>
//       </div>
//       <div className="featured-destinations-container">
//         <h2 className="featured-destinations-title">Featured Destinations</h2>
//         <div className="destination-grid">
//           {featuredDestinations.map((destination) => (
//             <DestinationCard key={destination.id} destination={destination} />
//           ))}
//         </div>
//         <Link to="/destinations" className="btn btn-secondary">View All Destinations</Link>
//       </div>
//       <div className="popular-destinations-container">
//         <h2 className="popular-destinations-title">Popular Destinations</h2>
//         <div className="destination-grid">
//           {popularDestinations.map((destination) => (
//             <DestinationCard key={destination.id} destination={destination} />
//           ))}
//         </div>
//         <Link to="/destinations" className="btn btn-secondary">View All Destinations</Link>
//       </div>
//     </div>
//   );
// }

// export default Home;

import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import './Home.css'
import Subtitle from '../../shared/Subtitle'
import photo1 from '../../assets/photos/photo1.avif'
import photo2 from '../../assets/photos/photo2.avif'
import photo3 from '../../assets/photos/photo3.avif'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import { RiAccountPinCircleLine } from "react-icons/ri";
import {RxCalendar} from 'react-icons/rx'
import { Button } from "react-bootstrap";
import ServicesList from './ServicesList'
import TourList from './TourList'
import NewsLetter from '../../shared/NewsLetter'


const Home = () => {
  
  return (
    <div>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={"khnow before you go "} />
                  <img src={photo1} alt="" />
                </div>
                <h1>
                  Travel and make 
                  <span className="highlight">memories</span>
                </h1>
                <p>At our travel agency, we believe that travel is more than just visiting new places. It's about experiencing new cultures, creating lasting memories, and connecting with people from all walks of life. With years of experience in the travel industry, our team is passionate about helping you plan your dream vacation. Whether you're looking for an exotic adventure or a relaxing getaway, we'll work with you every step of the way to ensure that your trip is unforgettable. Come discover the world with us</p>
              </div>
            </Col>

            <Col lg="2">
              <div className="hero__img-box">
                <img src={photo1} alt="travelphoto" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-4">
                <img src={photo2} alt="photo2" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src={photo3} alt="photo3" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Col lg="12">
        <div className="search-container">
          <div className="faza">
            <div className="btns d-flex align-items-center gap-4">
              <div className="singlebtn d-flex gap-3 form__group form__group-fast">
                <span>Economy</span>
              </div>

              <div className="singlebtn d-flex gap-3 form__group form__group-fast">
                <span>Business class</span>
              </div>

              <div className="singlebtn d-flex gap-3 form__group form__group-fast">
                <span>First class</span>
              </div>
            </div>

            <div className="searchInputs d-flex align-items-center gap-4">
              {/* Single Input */}
              <div className="singleInputs d-flex gap-3 form__group form__group-fast">
                <div className="iconDiv">
                  <HiOutlineLocationMarker className="icon" />
                </div>
                <div className="texts">
                  <h4>Location</h4>
                  <input type="text" placeholder="where you want to go ?" />
                </div>
              </div>

              <div className="singleInputs flex">
                <div className="iconDiv">
                  <RiAccountPinCircleLine className="icon" />
                </div>
                <div className="texts">
                  <h4>Travelers</h4>
                  <input type="text" placeholder="Add guests" />
                </div>
              </div>

              <div className="singleInputs flex">
                <div className="iconDiv">
                  <RxCalendar className="icon" />
                </div>
                <div className="texts">
                  <h4>Check In</h4>
                  <input type="text" placeholder="Add date" />
                </div>
              </div>
              <div className="singleInputs flex">
                <div className="iconDiv">
                  <RxCalendar className="icon" />
                </div>
                <div className="texts">
                  <h4>Check Out</h4>
                  <input type="text" placeholder="Add date" />
                </div>
              </div>

              <Button className="btn btnBlock flex">Search flight</Button>
            </div>
          </div>
        </div>
      </Col>
      {/* <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services_subtitle">what we serve</h5>
              <h2 className="services_title">we offer our best services</h2>
            </Col>
            <ServicesList />
          </Row>
        </Container>
      </section> */}
       {/* Tour Section */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Explore"} />
              <TourList />
              </Col>
              

          </Row>
          
        </Container>
      </section>
      {/* Newsletter Section */}
      <NewsLetter/>
    </div>
  );
}

export default Home