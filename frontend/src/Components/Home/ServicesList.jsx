import React from 'react'
import ServiceCard from "./ServiceCard"
import {Col} from 'react-bootstrap'


const ServicesList = () => {
    const servicesData = [
      {
        image: "Tour Guide",
        title: "Tour Guide",
        description: "sxdrcftvgbhnj,k",
      },
      {
        image: "Tour Guide",
        title: "Calculate Weather",
        description: "sxdrcftvgbhnj,k",
      },
      {
        image: "Tour Guide",
        title: "Calculate Weather",
        description: "sxdrcftvgbhnj,k",
      },
    ];
  return (
    <div>
        {servicesData.map((item,index)=> <Col lg='3' key={index}>
            <ServiceCard item={item} />

        </Col>)}

    </div>
  )
}

export default ServicesList