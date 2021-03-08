import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import { Card, CardDeck, Col, Container } from "react-bootstrap";
import Layout from "../components/layout";

const Projects = () => {
  return (
    <>
      <Layout />
      <Container>
        <h1>Projects in General Assembly</h1>
        <CardDeck className='row row-cols-1 row-cols-sm-2 row-cols-lg-3'>
          <Col className='pb-5'>
            <Card style={{ width: "18rem" }}>
              <StaticImage
                variant='top'
                src='../images/project4.png'
                className='justify-content-center'
                alt='project 4 screenshot'
                width={288}
              />
              <Card.Body>
                <Card.Title>
                  <a href='https://recipe-hub-v2.herokuapp.com/'>
                    Project 4 - Recipe Hub
                  </a>
                </Card.Title>
                <Card.Text>
                  A recipe web app developed by students from the GA Software
                  Engineering Immersive program as their capstone project. Share
                  and save your recipes with others, plan your grocery list with
                  ease!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className='pb-5'>
            <Card style={{ width: "18rem" }}>
              <StaticImage
                variant='top'
                src='../images/project3.png'
                className='justify-content-center'
                alt='project 3 screenshot'
                width={288}
              />
              <Card.Body>
                <Card.Title>
                  <a href='https://gadddit-v2.herokuapp.com/'>
                    Project 3 - Gadddit. Engage and captivate your participants
                    even more with our platform.
                  </a>
                </Card.Title>
                <Card.Text>
                  Engage your audience without being interrupted and continue
                  the interactions after hours! A combined effort from 3
                  students of the Software Engineering Immersive program held by
                  General Assembly.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className='pb-5'>
            <Card style={{ width: "18rem" }}>
              <StaticImage
                variant='top'
                src='../images/project2.png'
                className='justify-content-center'
                alt='project 2 screenshot'
                width={288}
              />
              <Card.Body>
                <Card.Title>
                  <a href='https://timely-kkusumad.vercel.app/'>
                    Project 2 - Timely. The time of your world at your
                    fingertips.
                  </a>
                </Card.Title>
                <Card.Text>
                  A time conversion app where you can save groups of contacts
                  with their respective timezones and find a suitable timing to
                  gather the troops online!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className='pb-5'>
            <Card style={{ width: "18rem" }}>
              <StaticImage
                variant='top'
                src='../images/project1.png'
                className='justify-content-center'
                alt='project 1 screenshot'
                width={288}
              />
              <Card.Body>
                <Card.Title>
                  <a href='https://kalyak.github.io/Minesweeper/game/minesweeper.html'>
                    Project 1 - Sweep them mines
                  </a>
                </Card.Title>
                <Card.Text>
                  Navigate your way around the board and try not to blow
                  yourself up!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </CardDeck>
      </Container>
    </>
  );
};

export default Projects;
