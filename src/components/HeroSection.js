import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
// import Container from 'react-bootstrap/Container';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
// import Button from 'react-bootstrap/Button';
import redlogo from "../assets/images/redlogo.png";
import stdy from "../assets/images/logostudy.jpg";
import man from "../assets/images/man.png";
import cart from "../assets/images/cart.png";
import dil from "../assets/images/dil.png";

import pic4 from "../assets/images/btn.png";
// impo
const HeroSection = () => {
  return (
    <div className="container hero-section-margin">
      <div className="row">
        <div className="col col-sm-12 col-md-4 col-lg-4">
          <img
            src={redlogo}
            alt="Profile"
            style={{ height: "90px", width: "90px" }}
          ></img>
        </div>

        <div className="col col-sm-12 col-md-4 col-lg-4 d-flex justify-content-end align-items-center">
          <img
            src={stdy}
            alt="Profile"
            style={{ height: "90px", width: "90px", marginRight: '20px'  }}
          ></img>
        </div>

        {/* className="me-auto d-flex justify-content-center " */}
        <div
          className="col col-sm-12 col-md-4 col-lg-4"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <img
            src={man}
            alt="Profile"
            style={{ height: "40px", width: "30px" }}
          />
          <h4 style={{color: '#808080'}}>|</h4>
          <img
            src={cart}
            alt="Profile"
            style={{ height: "40px", width: "30px" }}
          />
          <h4 style={{color: '#808080'}}>|</h4>
          <img
            src={dil}
            alt="Profile"
            style={{ height: "40px", width: "30px" }}
          />
        </div>
      </div>

      {/* Homenavbary........................................................ */}
      <div className="row" style={{ height: "80px", marginTop: "2rem" }}>
        {/* <Navbar expand="lg" style={{ background: 'linear-gradient(to right, #FFC0CB, #00FF00)' }} className="bg-body-tertiary"> */}
        <Navbar
          expand="lg"
          style={{
            background: "linear-gradient(to right, #FFC0CB , #DFF0D8   )",
          }}
          className="bg-body-tertiary"
        >
          {/* #DFF0D8,    light green */}
          {/* Navbar contents */}

          <Container>
            <Navbar.Brand href="#home"></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto d-flex justify-content-center w-100">
                <Nav.Link href="#home">
                  <h4 style={{ color: "#00008B" }}>
                    Home&emsp; /&emsp; Products
                  </h4>{" "}
                </Nav.Link>
                {/* dark-blue */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      {/*Home navbar ended-------------------------------------------------- */}
    </div>
  );
};

export default HeroSection;
