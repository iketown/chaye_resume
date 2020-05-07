import React from 'react';
import ExtraInfoModal from './ExtraInfoModal';
import EmmaLarge from '../../assets/images/emmaLarge.png';
import emma from '../../assets/images/emma.png';
//
//
const EmmaModal = () => {
  return (
    <ExtraInfoModal logoImg={EmmaLarge} bgImage={emma}>
      <p>
        <b>Emma</b> is an email marketing company designed to connect the users'
        data, drive audience growth through campaign management and dashboard
        tracking, and provide best in class support.
      </p>
      <p>
        Emma prides itself on ease of use through automation and intelligent
        features, as well as access to their team of email experts to help build
        out marketing plans for the client’s business.
      </p>
      <p>
        When I joined the ranks of Emma, they were a month to month service that
        had aspirations to compete with the Enterprise email marketing companies
        offering long term contracts and expert services. I handled larger
        accounts with a focus on selling yearly subscriptions and services to
        help guide their marketing plans. I became an{' '}
        <b>email marketing expert </b>
        that could advise on the different package options, as well as best
        practices to help grow their subscriber lists and customer loyalty.
      </p>
    </ExtraInfoModal>
  );
};

export default EmmaModal;
