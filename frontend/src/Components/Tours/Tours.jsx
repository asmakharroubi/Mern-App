import React from "react";
import { Container, Col, Row } from "reactstrap";
import CommonSection from "../../shared/CommonSection";
import tourData from "../../assets/data/tours";
import TourCard from "../Home/TourCard.jsx";

const Tours = () => {
  return (
    <div>
      <CommonSection title={"dashborsd"} />

      <section>
        <Container>
          <Row>
            {tourData?.map((tour) => (
              <Col lg="3" className="mb-3" key={tour.id}>
                <TourCard tour={tour} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Tours;
