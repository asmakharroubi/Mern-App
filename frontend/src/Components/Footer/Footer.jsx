import React from 'react'
import { Col, Container, ListGroup, ListGroupItem, Row } from 'reactstrap'
import {Link} from 'react-router-dom'
import photo1 from '../../assets/photos/photo1.avif'

const Footer = () => {
  const quick__links = [
    {
      path: "/home",
      display: "Home",
  },
  {
      path: "/about",
      display: "About",
  },
  {
      path: "/tours",
      display: "Tours",
  },
  ];
  const quick__links2 = [
    {
      path: "/gallery",
      display: "Gallery",
  },
  {
      path: "/login",
      display: "Login",
  },
  {
      path: "/register",
      display: "Register",
  },
  ];
  const year= new Date().getFullYear()
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col lg="3">
            <div className="logo">
              <img sr={photo1} alt="photo" />
              <p>Adventure Awaits, Let's Go Explore</p>
              <div className="social__links d-flex align-items-center gap-4">
                <span>
                  <Link to="#">
                    <i class="ri-github-fill"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i class="ri-youtube-line"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i class="ri-facebook-circle-line"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i class="ri-instagram-line"></i>
                  </Link>
                </span>
              </div>
            </div>
          </Col>
          <Col lg="3">
            <h5 className="footer__link-title">Discover</h5>
            <ListGroup className="footer__quick-links">
              {quick__links.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link
                    className="faza"
                    to={item.path}
                    style={{ textDecoration: "none" ,color: "var(--text-color)",
    fontSize: "1.1rem"}}
                  >
                    {item.display}
                  </Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="3">
            <h5 className="footer__link-title">Quick Links</h5>
            <ListGroup>
              {quick__links2.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="3">
            <h5 className="footer__link-title">Contact</h5>

            <ListGroup>
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <i class="ri-map-pin-line"></i>
                  </span>
                  Address:
                </h6>
                <p className="mb-0">Tunisia</p>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <i class="ri-mail-line"></i>
                  </span>
                  Email:
                </h6>
                <p className="mb-0">@gmail.com</p>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <i class="ri-map-pin-line"></i>
                  </span>
                  phone:
                </h6>
                <p className="mb-0">78123456</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="12" className="text-center pt-5">
            <p className="copyright">
              {" "}
              Copyright {year}, design and develop by kharroubi asma, All
              rightsreserved.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer