import React from 'react';
import { Col, Row } from 'reactstrap';

const Recommendation = ({ name, title, company, link, relation }) => {
  return (
    <Row className="resume-item  mb-5">
      <Col xs="12" lg="6">
        <div className="d-flex mb-3" style={{ alignItems: 'center' }}>
          {/* <div className="social-icons mr-2">
            <a href={link} target="_blank" rel="noopener noreferrer">
              <i className={`fab fa-linkedin-in`}></i>
            </a>
          </div> */}
          <div>
            <a href={link} target="_blank" rel="noopener noreferrer">
              <h3 className="mb-0">{name}</h3>
            </a>
            <div>{relation}</div>
          </div>
        </div>
      </Col>
      <Col lg="1">
        <div
          style={{ borderRight: '1px solid lightgray', height: '100%' }}
        ></div>
      </Col>
      <Col xs="12" lg="5">
        <div className="text-dark mb-0">{title}</div>
        <div className="d-block d-lg-inline">{company}</div>
      </Col>
      <Col xs="12"></Col>
    </Row>
  );
};

export default Recommendation;
