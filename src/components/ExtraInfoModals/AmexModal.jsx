import React from 'react';
import ExtraInfoModal from './ExtraInfoModal';
import amex from '../../assets/images/amex.png';
import amexTravel from '../../assets/images/amexTravel.png';
//
//
const EmmaModal = () => {
  return (
    <ExtraInfoModal logoImg={amexTravel} logoHeight={70} bgImage={amex}>
      <p>
        <b>American Express Travel</b> is a division of American Express that
        was created to differentiate their traditional product and provide a
        service that would enrich their customers' lives.
      </p>
      <p>
        My experience was in their Consumer Travel Division. I helped create and
        manage a program that provided a unique experience for travelers
        interested in experiencing a destination as though they were a local.
      </p>
      <p>
        <b>I built a program</b> that consisted of <b>350+ travel agents</b>{' '}
        that deeply understood their specialty locations and could assist
        travelers in taking a trip of a lifetime.
      </p>
    </ExtraInfoModal>
  );
};

export default EmmaModal;
