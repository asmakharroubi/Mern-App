import React from 'react'
import { Route, Routes, Navigate } from "react-router-dom";
import Home from '../Components/Home/Home';
import Tours from '../Components/Tours/Tours';
import User from '../Components/Register/User';
import ToursDetails from "../Components/ToursDetails/ToursDetails";
import Login from "../Components/Login/Login"
import PersonnalizedTrip from '../Components/PersonnalizedTrip';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/tours" element={<Tours />} />
      <Route path="/tours/:id" element={<ToursDetails />} />
      <Route path="/register" element={<User />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/personalize" element={<PersonnalizedTrip/>} />
      
    </Routes>
  );
}

export default Router