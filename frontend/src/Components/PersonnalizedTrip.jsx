// import React,{useState} from 'react'
// import "./PersonnalizedTrip.css"

// const PersonnalizedTrip = () => {
//     const [showModal,setShowModal] = useState(false)

//     const handleCheckboxChange =(e) =>{
//         setShowModal(e.target.checked)
//     }
//   return (
//     <div>
//       <label>UserName</label>
//       <label>Detination</label>
//       <select id="size" name="size">
//         <option value="s">Tunisia</option>
//         <option value="m">France</option>
//         <option value="l">Italy</option>
//         <option value="xl">Philipines</option>
//       </select>
//       <label>City </label>
//       <select id="size" name="size">
//         <option value="s">Tunisia</option>
//         <option value="m">France</option>
//         <option value="l">Italy</option>
//         <option value="xl">Philipines</option>
//       </select>
//       <label htmlFor="date">Date:</label>
//       <input type="date" id="date" />
//       <label>Depature:</label>
//       <input type="date" id="arrival_depart" />
//       <label htmlFor="date">Arrival:</label>
//       <input type="date" id="arrival_date" />
//       <label>Transportation:</label>
//       <input type="checkbox" id="transport" onChange={handleCheckboxChange} />
//       {showModal && (
//         <div className="modal">
//           <h2>Transportation Types</h2>
//           <label>Pulic</label>
//           <input type="checkbox" id="public"/>
//           <label>Private</label>
//           <input type="checkbox" id="private"/>
//           <button onClick={() => setShowModal(false)}>Close Modal</button>
//         </div>
//       )}
//       <label>Tours</label>
//       <input type="" id="" />

//       <label>Price</label>

//       <button type="submit">Go to the next step</button>
//     </div>
//   );
// }

// export default PersonnalizedTrip

// import React ,{useRef,useState} from 'react'
// import { Col ,Container,Row,Form,ListGroup} from 'reactstrap'
// import calculateAvgRating from '../utils/avgRating'
// import {useParams} from 'react-router-dom'
// import tourData from '../assets/data/tours'
// import Booking from '../Components/Booking'
// // import avatar from '../../assets/images/avatar.jpg'

// const PersonnalizedTrip = () => {

//   const {id} = useParams()
//   const tour = tourData.find(tour => tour.id ===id)
//   const reviewMsgRef = useRef('')
//   const [tourRating,setTourRating]=useState(null)

//   // const {photo,title,desc,price,address,reviews,city,distance,maxGroupSize} = tour
//   const {totalRating,avgRating} = calculateAvgRating(reviews)
// // Date Format
//   const options = {day:'numeric', month:'Long', year:'numeric'}

//   const submitHandler = e =>{
//     e.preventDefault()
//     const reviewText = reviewMsgRef.current.value
//     // alert('${reviewText},${tourRating} ')

//   }

//   return (
//     <div>

//     <div>
//       <section>
//         <Container>
//           <Row>
//           <Col lg="8">
//             <div className="tour__content">
//               <img src={photo} alt="photo1" />
//               <div className="tour__info">
//                 <h2>{title}</h2>
//                 <div className="d-flex align-items-center gap-5">
//                   <span className="tour__rating d-flex align-items-center gap-1">
//                     <i
//                       class="ri-star-fill"
//                       style={{ color: "var(--secondary-color)" }}
//                     ></i>{" "}
//                     {avgRating === 0 ? null : avgRating}
//                     {totalRating === 0 ? (
//                       "Not rated"
//                     ) : (
//                       <span>({reviews?.length})</span>
//                     )}
//                   </span>

//                   <span>
//                     <i class="ri-map-pin-fill"></i>
//                     {address}
//                   </span>
//                 </div>
//                 <div className="tour__extra-details">
//                   <span>
//                     <i class="ri-map-pin-2-line"></i>
//                     {city}
//                   </span>
//                   <span>
//                     <i class="ri-money-dollar-circle-line"></i>${price}/per
//                     person
//                   </span>
//                   <span>
//                     <i class="ri-map-pin-time-line"></i>
//                     {distance} K/m
//                   </span>
//                   <span>
//                     <i class="ri-group-line"></i>
//                     {maxGroupSize} people
//                   </span>
//                 </div>
//                 <h5>Description</h5>
//                 <p>{desc}</p>
//               </div>
//               </div>
//               </Col>
//                  </Row>
//         </Container>
//       </section>
//               {/* Tour reviews */}
//               {/* <div className="tour__reviews mt-4">
//                 <h4>Reviews({reviews?.length}reviews)</h4>
//                 <Form onSubmit={submitHandler}>
//                   <div className="d-flex align-items-center gap-3 mb-4 rating__group">
//                     <span onClick={() => setTourRating(1)}>
//                       1<i class="ri-star-s-fill"></i>
//                     </span>
//                     <span onClick={() => setTourRating(2)}>
//                       2<i class="ri-star-s-fill"></i>
//                     </span>
//                     <span onClick={() => setTourRating(3)}>
//                       3<i class="ri-star-s-fill"></i>
//                     </span>
//                     <span onClick={() => setTourRating(4)}>
//                       4<i class="ri-star-s-fill"></i>
//                     </span>
//                     <span onClick={() => setTourRating(5)}>
//                       5<i class="ri-star-s-fill"></i>
//                     </span>
//                   </div>
//                   <div className="review__input">
//                     <input
//                       type="text"
//                       ref={reviewMsgRef}
//                       placeholder="share your thoughts"
//                       required
//                     />
//                     <button
//                       className="btn primary__btn text-white"
//                       type="submit"
//                     >
//                       Submit
//                     </button>
//                   </div>
//                 </Form>

//                 <ListGroup className="user__reviews">
//                   {reviews?.map((review) => (
//                     <div className="review__item">
//                       {/* <img src={avatar} alt="person" /> */}
//                       {/* <div className="w-100">
//                         <div className="d-flex align-items-center justify-content-between">
//                           <div>
//                             <h5>vghbhj</h5>
//                             <p>
//                               {new Date("22-03-2023").toLocaleDateString(
//                                 "en-U5",
//                                 options
//                               )}
//                             </p>
//                           </div>
//                           <span className="d-flex align-items-center">
//                             5<i class="ri-star-s-fill"></i>
//                           </span>
//                         </div>
//                         <h6>Amazing Tour</h6>
//                       </div>
//                     </div>
//                   ))}
//                 </ListGroup>
//               </div> */}

//               {/* Personnalize your trip */}
//               <div className="tour__personnalisation ">
//                 <h5>Hotels</h5>
//                 {/* <p>{hotels.name}</p> */}
//                 <button>Add</button>

//                 <h5>Activities</h5>
//                 <p></p>
//                 <button>Add</button>

//                 <h5>Transportation</h5>
//                 <p>Public</p>
//                 <p>Private</p>
//                 <button>Add</button>

//               </div>

//             {/* </div>
//             </Col> */}

//           {/* Booking Section */}
//           <Col lg='4'>
//             <Booking tour={tour} avgRating={avgRating} />
//           </Col>
//           {/* </Row>
//         </Container>
//       </section> */}
//     </div>

//     </div>
//   )
// }

// export default PersonnalizedTrip

import React, { useState } from "react";

const PersonnalizedTrip = () => {
  // State variables to store the selected hotel and activities
  const [selectedHotel, setSelectedHotel] = useState("");
  const [selectedActivities, setSelectedActivities] = useState([]);

  // Handler functions for selecting hotel and activities
  const handleHotelSelection = (hotelName) => {
    setSelectedHotel(hotelName);
  };

  const handleActivitySelection = (activityName) => {
    setSelectedActivities((prevSelectedActivities) => [
      ...prevSelectedActivities,
      activityName,
    ]);
  };

  // Render method for the component
  return (
    <div>
      <h2>Choose your hotel:</h2>
      <ul>
        <li>
          <button onClick={() => handleHotelSelection("Hotel A")}>
            Hotel A
          </button>
        </li>
        <li>
          <button onClick={() => handleHotelSelection("Hotel B")}>
            Hotel B
          </button>
        </li>
        <li>
          <button onClick={() => handleHotelSelection("Hotel C")}>
            Hotel C
          </button>
        </li>
      </ul>
      {selectedHotel && (
        <div>
          <h2>Choose your activities:</h2>
          <ul>
            <li>
              <button onClick={() => handleActivitySelection("Activity 1")}>
                Activity 1
              </button>
            </li>
            <li>
              <button onClick={() => handleActivitySelection("Activity 2")}>
                Activity 2
              </button>
            </li>
            <li>
              <button onClick={() => handleActivitySelection("Activity 3")}>
                Activity 3
              </button>
            </li>
          </ul>
        </div>
      )}
      {selectedHotel && selectedActivities.length > 0 && (
        <div>
          <h2>Your Selection:</h2>
          <p>Hotel: {selectedHotel}</p>
          <p>Activities: {selectedActivities.join(", ")}</p>
        </div>
      )}
    </div>
  );
};

export default PersonnalizedTrip;
