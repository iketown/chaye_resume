import React from 'react';
import SubjectListItem from './SubjectListItem';
import { ListGroup } from 'reactstrap';
import GNSmall from '../../assets/images/goNoodleSmall.jpg';
import gaylord from '../../assets/images/gaylord.png';
import amex from '../../assets/images/amex.png';

const DiverseTeamsModal = () => {
  return (
    <ListGroup flush>
      <SubjectListItem image={amex} company="American Express Travel">
        <ul className="ml-0">
          <li>Managed a team of 350+ agents</li>
          <li>Conducted needs assessments of staff based on performance</li>
          <li>
            Provided training and feedback to increase individual team member
            productivity
          </li>
          <li>Set standards for involvement in a specialized program</li>
        </ul>
      </SubjectListItem>
      <SubjectListItem image={GNSmall} company="Go Noodle">
        Managed the development and delivery of large scale projects that
        involved cross-departmental team contributions from product, content,
        marketing, c-suite, sales, and external stakeholders.
      </SubjectListItem>
      <SubjectListItem image={gaylord} company="Gaylord Hotels">
        Responsible for the sales and logistics of large convention food and
        beverage programs requiring large cross-departmental management and
        communication of complex programs.
      </SubjectListItem>
    </ListGroup>
  );
};

export default DiverseTeamsModal;
