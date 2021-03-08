import * as React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const Home = () => {
  return (
    <>
      <Layout />
      <Container>
        <Row className='justify-content-md-center'>
          <Col xs={6} md={4} className='d-flex justify-content-center'>
            <StaticImage
              className='justify-content-center'
              src='../images/profile-pic.jpg'
              alt='profile picture'
              height={250}
            />
          </Col>
        </Row>
        <Row className='justify-content-md-center text-center'>
          <Col />
          <Col xs={6}>
            <h1>This is me!</h1>
            <p>
              Hello! I'm Kalya Kusumadi, an Aspiring Full Stack Engineer,
              adaptable problem-solver committed to seek the best possible
              technical solution. I am driven by a desire to help others
              maximise their productivity and joy of seeing a product work as
              designed.
              <br />I have recently made the change to Software Engineering
              after spending 5 years in the Automotive industry where I did some
              project management and liased with 3rd party developers. Outside
              of work I have some hands on coding, building my own DAC from an
              open source kit, and prior exposure in university coding with
              Arduino to build a drone.
            </p>
          </Col>
          <Col />
        </Row>
      </Container>
    </>
  );
};
export default Home;
