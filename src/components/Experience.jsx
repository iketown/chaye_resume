import React, { useState } from 'react';
import moment from 'moment';
import {
  Collapse,
  Modal,
  ModalFooter,
  Button,
  Row,
  Col,
  Container,
} from 'reactstrap';

const Experience = ({
  positionTitle,
  companyName,
  description,
  largeImage,
  startDate,
  endDate,
  bullets,
  moreContent,
  modalContent,
  slug,
}) => {
  const [showExtra, setShowExtra] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const getMoreInfo = () => {
    if (modalContent) setModalOpen(true);
    if (moreContent) setShowExtra(true);
  };
  return (
    <Container>
      <div id={slug} style={{ padding: '4px' }} className="mb-3" />
      <Row className="mb-3">
        <Col xs="12" md="9">
          <div>
            <h3 className="mb-0">{positionTitle}</h3>
            <span className="subheading mb-3">{companyName}</span>
          </div>
        </Col>
        <Col xs="12" md="3">
          <div className="text-primary d-flex justify-content-lg-end">
            <span className="text-nowrap">
              {moment(startDate).format('MMM YYYY')}
            </span>
            <span className="ml-1 mr-1"> - </span>
            <span className="text-nowrap">
              {endDate === 'present'
                ? 'present'
                : moment(endDate).format('MMM YYYY')}
            </span>
          </div>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col xs="12" md="9">
          <div className="resume-content w-100 ">
            <ul style={{ padding: '0 0 0 0', listStyle: 'none' }}>
              {bullets?.map(({ text, subList }) => {
                return (
                  <li className="mb-2">
                    {text}
                    {subList && (
                      <ul>
                        {subList.map(subText => {
                          return <li>{subText}</li>;
                        })}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
            {description}
            {moreContent && (
              <Collapse isOpen={showExtra}>{moreContent}</Collapse>
            )}
            {modalContent && (
              <Modal
                size="lg"
                centered
                isOpen={modalOpen}
                toggle={() => setModalOpen(!modalOpen)}
              >
                {modalContent}
                <ModalFooter>
                  <Button onClick={() => setModalOpen(false)}>OK</Button>
                </ModalFooter>
              </Modal>
            )}
            {(modalContent || moreContent) && (
              <Button
                className="btn-info btn-sm"
                onClick={getMoreInfo}
                color="primary"
              >
                MORE INFO
              </Button>
            )}
          </div>
        </Col>
        <Col xs="none" md="3">
          <div
            onClick={getMoreInfo}
            className="d-flex justify-content-end"
            style={{ cursor: 'pointer' }}
          >
            <img
              src={largeImage}
              alt="logo"
              className="mt-4 d-none d-md-block"
              style={{
                maxWidth: '10rem',
                maxHeight: '10rem',
              }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Experience;
