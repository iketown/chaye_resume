import React from 'react';
import { ModalBody } from 'reactstrap';
import styled from 'styled-components';

//
//
const ImgContainer = styled.div`
  position: relative;
  z-index: 1;
  &::before {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: '';
    background-image: url(${p => p.bgImage});
    background-size: 50%;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.08;
    ${p => p.fullSizeBGImage && `opacity: .7; background-size: cover;`}
  }
`;
const ExtraInfoModal = ({
  companyName,
  logoImg,
  logoHeight,
  banner,
  bgImage,
  children,
  fullSizeBGImage,
}) => {
  return (
    <div>
      {banner || (
        <img
          src={logoImg}
          height={logoHeight}
          className="m-3"
          alt={`${companyName} Logo`}
        />
      )}
      <ImgContainer bgImage={bgImage} fullSizeBGImage={fullSizeBGImage}>
        <ModalBody>{children}</ModalBody>
      </ImgContainer>
    </div>
  );
};

export default ExtraInfoModal;
