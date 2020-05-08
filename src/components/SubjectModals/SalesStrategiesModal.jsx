import React from 'react';
import SubjectListItem from './SubjectListItem';
import { ListGroup } from 'reactstrap';
import GNSmall from '../../assets/images/goNoodleSmall.jpg';
import gaylord from '../../assets/images/gaylord.png';
import amex from '../../assets/images/amex.png';
import styled from 'styled-components';
import emma from '../../assets/images/emma.png';
const Highlight = styled.div`
  background: #ffff001a;
  padding: 5px 10px;
  margin-bottom: 4px;
`;
const SalesStrategiesModal = () => {
  return (
    <ListGroup flush>
      <SubjectListItem image={GNSmall} company="GoNoodle">
        Conceptualized, created, and executed integrated sales proposals across
        multiple categories such as entertainment, food, healthcare, sports and
        retail
        <Highlight>
          Drove sales process pre, during, and post-sale, achieving a{' '}
          <b>168% YOY increase in sales</b> from 2018-2019.
        </Highlight>
      </SubjectListItem>

      <SubjectListItem image={emma} company="Emma">
        Successfully sold annually contracts, shifting the business away from a
        monthly subscription service only.{' '}
        <Highlight>
          95% of total revenues from sales were in contracted business.
        </Highlight>{' '}
        <Highlight>91% of new accounts sold were contracted.</Highlight>
      </SubjectListItem>
      <SubjectListItem image={amex} company="American Express Travel">
        Designed and implemented business development solutions that enhanced
        the growth and success of the Consumer Travel division.
      </SubjectListItem>
      <SubjectListItem image={gaylord} company="Gaylord Hotels">
        Prospected, solicited, negotiated and closed new accounts with corporate
        partners, associations and various other incentive accounts.{' '}
        <div>
          Prior to that role, was responsible for the sales and logistics of
          large convention food and beverage programs, ensuring new business
          development through strategic sales planning.
        </div>
      </SubjectListItem>
    </ListGroup>
  );
};

export default SalesStrategiesModal;
