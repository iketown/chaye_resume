import React from 'react';
import SubjectListItem from './SubjectListItem';
import GNSmall from '../../assets/images/goNoodleSmall.jpg';
import gaylord from '../../assets/images/gaylord.png';
import amex from '../../assets/images/amex.png';
import { ListGroup } from 'reactstrap';

const CDProjects = () => {
  return (
    <ListGroup flush>
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
      <SubjectListItem image={amex} company="American Express Travel">
        Managed a team of 350+ agents that were employed by other companies but
        were incentivized, certified, and promoted based on their{' '}
        <em>Insider </em>
        status.
      </SubjectListItem>
    </ListGroup>
  );
};

export default CDProjects;
