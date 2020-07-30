import React from 'react';
import ExtraInfoModal from './ExtraInfoModal';
import openlyImg from '../../assets/images/Openly_draft.png';
import openlyBG from '../../assets/images/gathering-transparent-background.jpg';
//
//
const EmmaModal = () => {
  return (
    <ExtraInfoModal
      logoImg={openlyImg}
      logoHeight={70}
      bgImage={openlyBG}
      fullSizeBGImage
    >
      <p>
        <b>COVID-19 monitoring made easy.</b>
      </p>
      <p>
        With Openly, any organization can quickly roll out a simple, easy-to-use
        self-monitoring tool to its team of patrons – whether travelers, company
        employees or returning students – via their personal mobile device.
      </p>
      <p>
        more info at{' '}
        <a
          href="https://www.nowopenly.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          nowopenly.com
        </a>
      </p>
    </ExtraInfoModal>
  );
};

export default EmmaModal;
