import React from "react";
import { Col, Container, Row, Button, Image } from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";
import { IoMdMail } from "react-icons/io";
import "../../styles/LandingPage/sectionone.css";

const SectionOne = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col xl={4} xxl={4}>
            <div className="section1">
              <h4 id="section1-h4">
                Quickly, simply, and easy for you to manage projects and build
                your own team.
              </h4>
              <p id="section1-p">
                Kinoverse Business has everything you need to bring your ideas
                to life and change the way you produce films with your team.
                Puts the power of film project management in your hands.
              </p>

              <button className="section1-btn-1" size="lg">
                <IoMdMail size={40} /> Sign Up Free with Email
              </button>
              <br></br>
              <button className="section1-btn-2" size="lg">
                <FcGoogle size={40} /> Sign Up Free with Google
              </button>
            </div>
          </Col>
          <Col xl={8} xxl={8}>
            <div>
              <Image
                className="section1-img"
                src="https://res.cloudinary.com/dvwcygw04/image/upload/v1649860152/section1_hb2w2j.png"
                fluid
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SectionOne;
