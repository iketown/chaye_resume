import React from 'react';
import lourve from '../assets/images/lourve.jpeg';
import statue from '../assets/images/statue.jpeg';
import amsterdam from '../assets/images/amsterdam.jpeg';
import { useStaticQuery, graphql } from 'gatsby';

import { Container, Row, Col } from 'reactstrap';

const InterestsSection = () => {
  const interestsQuery = graphql`
    query InterestsMD {
      markdownRemark(frontmatter: { title: { eq: "interests" } }) {
        html
      }
    }
  `;
  const data = useStaticQuery(interestsQuery);
  const html = data?.markdownRemark?.html;
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
              <div
                className="mb-5"
                dangerouslySetInnerHTML={{ __html: html }}
              ></div>
            </Col>

            <Col xs="6" md="4" className="mb-3">
              <img src={lourve} width="100%" alt="Lourve in Paris" />
            </Col>
            <Col xs="6" md="4" className="mb-3">
              <img src={statue} width="100%" alt="Paris" />
            </Col>
            <Col xs="6" md="4" className="mb-3">
              <img src={amsterdam} width="100%" alt="Amsterdam" />
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default InterestsSection;
