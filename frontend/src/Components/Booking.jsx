import React,{useState,useContext} from 'react'
import './Booking.css'
import {Form,FormGroup,ListGroup,ListGroupItem,Button} from 'reactstrap'
import {useNavigate} from 'react-router-dom'
import {AuthContext} from './../context/AuthContext'
import { BASE_URL } from '../utils/config'


const Booking = ({tour,avgRating}) => {
  const {price,reviews,title} = tour 
  const navigate = useNavigate()

  const {user}= useContext(AuthContext)
  const [booking, setBooking] = useState({
    userId: user && user._id,
    userEmail: user && user.email,
    tourName: title,
    fullName: "",
    phone: "",
    guestSize: "",
    booukAt: "",
  });
 
  // const [credentials,setCredentials] = useState({
  //   userId: "01",
  //   userEmail: "fghj@gmail.com",
  //   fullName: "",
  //   phone:"",
  //   guestSize:"",
  //   booukAt: "",
  // })

   const handleChange = (e) => {
    setBooking(prev =>({ ...prev, [e.target.id]: e.tatget.value}))
   };
   const serviceFee = 10
   const totalAmount = Number(price) + Number(booking.guestSize) + Number(serviceFee)
  //  Send data to server
  const handleClick = async e =>{
    e.preventDefault()
    // console.log(credentials);
    // console.log(booking)

    try{
      if (!user || user=== undefined || user===null){
        return alert('please sign in')
      }
      const res = await fetch(`${BASE_URL}/booking`,{
        method:'post',
        headers:{
          'content-type':'application/json'
        },
        credentials:'include',
        body:JSON.stringify(booking)
      })
      const result = await res.json()
      if(!res.ok){
        return alert(result.message)
      }
      navigate("/thankYou");

    }catch(err){
      alert((err.message))

    }
    
  }

  return (
    <div className="booking">
      <div className="booking__top d-flex align-items-center justify-content-between">
        <h3>
          DT{price} <span>per person</span>{" "}
        </h3>
        <span className="tour__rating d-flex align-items-center ">
          <i class="ri-star-fill"></i>
          {avgRating === 0 ? null : avgRating} ({reviews?.length})
        </span>
      </div>

      <div className="booking__form">
        <h5>Informations</h5>
        <div className="booking__info-form" onSubmit={handleClick}>
          <FormGroup>
            <input
              type="text"
              placeholder="Full Name"
              id="fullName"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <input
              type="number"
              placeholder="phone"
              id="phone"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup className="d-flex align-items-center gap-3">
            <input
              type="number"
              placeholder="Guest"
              id="guestSize"
              required
              onChange={handleChange}
            />
          </FormGroup>
        </div>
      </div>

      <div className="booking__bottom">
        <ListGroup>
          <ListGroupItem className="border-0 px-0">
            <h5 className="d-fl²ex align-items-center gap-1">
              DT{price}
              <i class="ri-close-line"></i>1 person
            </h5>
            <span>DT{price}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0">
            <h5>
              service charge<i class="ri-close-line"></i>1 person
            </h5>
            <span>${serviceFee}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0">
            <h5>
              Total<i class="ri-close-line"></i>1 person
            </h5>
            <span>${totalAmount}</span>
          </ListGroupItem>
        </ListGroup>
        <Button className="btn primary__btn w-100 mt-4" onClick={handleClick}>Book now</Button>
      </div>
    </div>
  );
}

export default Booking

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Booking = () => {
//   const [trips, setTrips] = useState([]);
//   const [destinations, setDestinations] = useState([]);

//   useEffect(() => {
//     const fetchTrips = async () => {
//       const result = await axios("/api/trips");
//       setTrips(result.data);
//     };

//     const fetchDestinations = async () => {
//       const result = await axios("/api/destinations");
//       setDestinations(result.data);
//     };

//     fetchTrips();
//     fetchDestinations();
//   }, []);

//   return (
//     <div>
//       <h1>Book Your Trip</h1>
//       <div>
//         <h2>Search for Trips</h2>
//         <ul>
//           {trips.map((trip) => (
//             <li key={trip.tripID}>
//               <h3>{trip.destination}</h3>
//               <p>
//                 {trip.departure} to {trip.arrival}
//               </p>
//               <p>{trip.transportation}</p>
//               <p>Price: ${trip.price}</p>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div>
//         <h2>Select a Destination</h2>
//         <ul>
//           {destinations.map((destination) => (
//             <li key={destination.destinationID}>
//               <h3>{destination.name}</h3>
//               <p>{destination.description}</p>
//               <img src={destination.image} alt={destination.name} />
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div>
//         <h2>Make a Booking</h2>
//         <form>
//           <label htmlFor="destination">Destination:</label>
//           <select id="destination">
//             {destinations.map((destination) => (
//               <option
//                 value={destination.destinationID}
//                 key={destination.destinationID}
//               >
//                 {destination.name}
//               </option>
//             ))}
//           </select>
//           <label htmlFor="date">Date:</label>
//           <input type="date" id="date" />
//           <button type="submit">Book Now</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Booking;
