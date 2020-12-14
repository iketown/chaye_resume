import React from 'react';
import ExtraInfoModal from './ExtraInfoModal';
import openlyImg from '../../assets/images/Openly_draft.png';
import ovationImg from '../../assets/images/ovation.png';
//
//
const OvationModal = () => {
  return (
    <ExtraInfoModal
      logoImg={ovationImg}
      logoHeight={70}
      // bgImage={openlyBG}
      // fullSizeBGImage
    >
      <h4>Virtual, Hybrid & Live Event Platform and Production Solutions</h4>
      <p>
        We elevate event experiences to fuel meaningful connections between
        people and brands.
      </p>
      <p>
        more info at{' '}
        <a
          href="https://ovationevents.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          ovationevents.com
        </a>
      </p>
    </ExtraInfoModal>
  );
};

export default OvationModal;
