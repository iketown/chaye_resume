import React, { useState } from 'react';
import moment from 'moment';
import { Collapse, Modal, ModalFooter, Button } from 'reactstrap';
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
    <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
      <div className="resume-content w-100 ">
        <div className="mb-2">
          <h3 className="mb-0">{positionTitle}</h3>
          <span className="subheading mb-3">{companyName}</span>
        </div>
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
        {moreContent && <Collapse isOpen={showExtra}>{moreContent}</Collapse>}
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
          <Button onClick={getMoreInfo} color="primary">
            MORE INFO
          </Button>
        )}
      </div>
      <div
        className="text-md-right ml-2"
        style={{
          width: '14rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
        }}
      >
        <span className="text-primary nowrap">
          {moment(startDate).format('MMM YYYY')} -{' '}
          {endDate === 'present'
            ? 'present'
            : moment(endDate).format('MMM YYYY')}
        </span>
        <div onClick={getMoreInfo} style={{ cursor: 'pointer' }}>
          <img
            src={largeImage}
            className="mt-4 d-none d-md-block"
            style={{
              maxWidth: '10rem',
              maxHeight: '10rem',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
