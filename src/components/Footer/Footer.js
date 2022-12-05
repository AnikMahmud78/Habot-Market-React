import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footerContainer">
      <Container>
        <Row className="footerContent">
          <Col className="footerContentLogo" xs={12} md={6}>
            <div className="landingLogoFooter ">
              <Link>
                <img
                  className="rounded"
                  src="https://i.ibb.co/48JCRVd/HABOT-2.png"
                  alt=""
                />
              </Link>
            </div>
            <p>Search-Explore-Connect: Find the best vendors for your needs</p>
          </Col>
          <Col className="footerContentHeader" xs={{ order: "second" }} md={2}>
            <a href="#becamePartner">
              {" "}
              <h4>Become a Partner</h4>
            </a>
          </Col>
          <Col className="footerContentHeader" xs={{ order: "third" }} md={2}>
            <Link to="/data-privacy">
              <h4>Data Privacy & Policies</h4>
            </Link>
            {/* <Link to="">
              <a>
                <p>Home</p>
              </a>
            </Link>
            <Link to="">
              <a>
                <p className="d-flex align-items-center">
                  Careers <span className="hiringBox">Hiring!</span>
                </p>
              </a>
            </Link>
            <Link to="">
              <a>
                <p>Services</p>
              </a>
            </Link> */}
          </Col>
          <Col className="footerContentHeader" xs={{ order: "forth" }}>
            <Link to="/terms-conditions">
              <h4>Terms and Conditions</h4>
            </Link>
          </Col>
        </Row>
        <Row className="mb-5 footerContent">
          <Col className="footerContentCopy">All rights reserved.</Col>
          <Col className="footerContentCopyScroll text-center">
            <a href="#clientNav">
              <button>Scroll Up</button>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
