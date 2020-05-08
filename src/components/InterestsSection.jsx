import React from 'react';
import family from '../assets/images/family.jpeg';
import lourve from '../assets/images/lourve.jpeg';
import statue from '../assets/images/statue.jpeg';
import amsterdam from '../assets/images/amsterdam.jpeg';

import { Container, Row, Col } from 'reactstrap';
const InterestsSection = () => {
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex align-items-center"
      id="interests"
    >
      <div className="w-100">
        <h2 className="mb-5">Interests</h2>
        <Container>
          <Row>
            <Col xs="12">
              <p>
                Outside of work, I spend time chasing around my two boys and
                stealing moments together with my husband.
              </p>
              <p>
                I am a former yoga and spin instructor, and although I no longer
                teach, I love to be active and move every single day.
              </p>
              <p>
                I enjoy cooking for my family and try to get a home cooked meal
                on the table most nights.
              </p>
              <p>
                Although I have less time these days, I have traveled often with
                my husband and love the idea of more trips in our future.  I
                work hard and also make time to soak up the sweet moments with
                friends and family.
              </p>
            </Col>

            <Col xs="6" md="4" className="mb-3">
              <img src={lourve} width="100%" />
            </Col>
            <Col xs="6" md="4" className="mb-3">
              <img src={statue} width="100%" />
            </Col>
            <Col xs="6" md="4" className="mb-3">
              <img src={amsterdam} width="100%" />
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default InterestsSection;
