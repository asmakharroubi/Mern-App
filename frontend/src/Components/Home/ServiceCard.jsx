import React from 'react'
import './Service.css'

const ServiceCard = ({ item }) => {
  const { image, title, description } = item;
  return (
    <div className="service__item">
      <div className="service__img">
        <img src={image} alt="photo" />
      </div>
      <h5>{title}</h5>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard