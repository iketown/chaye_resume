import React from 'react';
import SubjectListItem from './SubjectListItem';
import { ListGroup } from 'reactstrap';
import GNSmall from '../../assets/images/goNoodleSmall.jpg';
import gaylord from '../../assets/images/gaylord.png';
import amex from '../../assets/images/amex.png';
import ovat from '../../assets/images/ovation_small.jpg';
const DiverseTeamsModal = () => {
  return (
    <ListGroup flush>
      <SubjectListItem image={ovat} company="Ovation Events">
        Manage a team of 14 across different fields of expertise including:
        video, creative, production, developers, and technical. Develop
        processes that have allowed our teams to communicate more effectively
        and collaboratively.
      </SubjectListItem>
      <SubjectListItem image={amex} company="American Express Travel">
        Managed a team of 350+ agents: conducted needs assessments of staff
        based on performance, provided training and feedback to increase
        individual team member productivity, and set standards for involvement
        in a specialized program.
      </SubjectListItem>
      <SubjectListItem image={GNSmall} company="GoNoodle">
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
