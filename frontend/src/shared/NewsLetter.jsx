import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import plage from '../assets/videos/plage.mp4'
import './NewsLetter.css'
import photo1 from '../assets/photos/photo1.avif'

const NewsLetter = () => {
  return (
    <div>
      {/* <img src={photo1} /> */}
      <section>
        <Container>
          {/* <video src={plage} muted autoplay loop type="video/mp4"></video> */}
          <Row>
            <Col lg="6">
              <div className="newsletter__content">
                <h2>Subscribe to get useful traveling inf </h2>
                <div className="newsletter__input">
                  <input type="email" placeholder="Enter your email" />
                  <button className="btn newsletter__btn">Subscribe</button>
                </div>
                <p>Contact us for more informations</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default NewsLetter