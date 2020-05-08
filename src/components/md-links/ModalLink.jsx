import React, { useState } from 'react';
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from 'reactstrap';
import CDProjects from '../SubjectModals/CDProjects';
import DiverseTeamsModal from '../SubjectModals/DiverseTeamsModal';
import SalesStrategiesModal from '../SubjectModals/SalesStrategiesModal';

const getModalContent = type => {
  switch (type) {
    case 'diverseTeams':
      return { title: 'Leading Diverse Teams', body: <DiverseTeamsModal /> };
    case 'salesStrategies':
      return {
        title: 'Sales and Sales Strategy',
        body: <SalesStrategiesModal />,
      };
    case 'cdProjects':
      return { title: 'Cross Departmental Projects', body: <CDProjects /> };
    default:
      return { title: 'none', body: <div>no type</div> };
  }
};

const ModalLink = ({ to, children }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const { title, body } = getModalContent(to);
  return (
    <>
      <span
        style={{ cursor: 'pointer', textDecoration: 'underline' }}
        className="text-primary"
        onClick={() => {
          setModalOpen(true);
          console.log('CLICKED', to);
        }}
      >
        {children}
      </span>
      <Modal
        size="lg"
        centered
        isOpen={modalOpen}
        toggle={() => setModalOpen(old => !old)}
      >
        <ModalHeader>{title}</ModalHeader>
        <ModalBody>{body}</ModalBody>
        <ModalFooter>
          <Button onClick={() => setModalOpen(false)}>OK</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default ModalLink;

// diverseTeams
// salesStrategies
// cdProjects
