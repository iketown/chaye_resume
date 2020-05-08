import React from 'react';
import styled from 'styled-components';
import { ListGroupItem, ListGroupItemHeading, Row, Col } from 'reactstrap';

const StyledSLI = styled.div`
  /* display: flex;
  justify-content: space-between;
  align-items: center; */
`;

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
        {/* <img className="ml-3" src={image} width={70} height={70} /> */}
      </Row>
    </ListGroupItem>
  );
};

export default SubjectListItem;
