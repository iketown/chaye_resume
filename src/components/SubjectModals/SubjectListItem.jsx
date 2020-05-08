import React from 'react';
import styled from 'styled-components';
import { ListGroupItem, Row, Col } from 'reactstrap';

const ImageDisplay = styled.div`
  background-image: url(${p => p.image});
  height: 80px;
  width: 80px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
const SubjectListItem = ({ image, company, children }) => {
  return (
    <ListGroupItem>
      <Row>
        <Col xs="12" lg="10">
          <span className="font-weight-bold text-muted text-uppercase">
            {company}
          </span>
          <span className="font-weight-lighter">{' - '}</span>
          {children}
        </Col>
        <Col className="d-none d-lg-block" lg="2">
          <ImageDisplay image={image} />
        </Col>
      </Row>
    </ListGroupItem>
  );
};

export default SubjectListItem;
