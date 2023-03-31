// import React, { useState } from 'react';

// const TripChooser = () => {
//   const [destination, setDestination] = useState('');
//   const [city, setCity] = useState('');
//   const [date, setDate] = useState('');
//   const [departure, setDeparture] = useState('');
//   const [arrival, setArrival] = useState('');
//   const [transportation, setTransportation] = useState(false);
//   const [publicTransport, setPublicTransport] = useState(false);
//   const [privateTransport, setPrivateTransport] = useState(false);
//   const [tours, setTours] = useState([]);
//   const [price, setPrice] = useState(0);

//   const handleDestinationChange = (event) => {
//     setDestination(event.target.value);
//   };

//   const handleCityChange = (event) => {
//     setCity(event.target.value);
//   };

//   const handleDateChange = (event) => {
//     setDate(event.target.value);
//   };

//   const handleDepartureChange = (event) => {
//     setDeparture(event.target.value);
//   };

//   const handleArrivalChange = (event) => {
//     setArrival(event.target.value);
//   };

//   const handleTransportationChange = (event) => {
//     setTransportation(event.target.checked);
//   };

//   const handlePublicTransportChange = (event) => {
//     setPublicTransport(event.target.checked);
//   };

//   const handlePrivateTransportChange = (event) => {
//     setPrivateTransport(event.target.checked);
//   };

//   const handleToursChange = (event) => {
//     const tour = event.target.value;
//     if (tours.includes(tour)) {
//       setTours(tours.filter((t) => t !== tour));
//     } else {
//       setTours([...tours, tour]);
