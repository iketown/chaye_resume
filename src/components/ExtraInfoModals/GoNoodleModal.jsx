import React, { useState } from 'react';
import ExtraInfoModal from './ExtraInfoModal';
import GNLarge from '../../assets/images/goNoodleLarge.png';
import GNChamps from '../../assets/images/goNoodleChamps.png';
import { Nav, NavItem, NavLink } from 'reactstrap';
import styled from 'styled-components';
import logoNFL from '../../assets/images/icon-nfl.png';
import logoNICK from '../../assets/images/icon-nickelodeon.png';
import logoDIS from '../../assets/images/logo-disney.png';
import logoDISXD from '../../assets/images/logo-disneyXD.png';
import logoMGM from '../../assets/images/logo-mgm.png';
import logPARA from '../../assets/images/logo-paramount.png';
import logoDREAM from '../../assets/images/logo-dream.png';
import classnames from 'classnames';
import GoNoodleProperty from './GoNoodleProperty';
//
//

const logos = {
  nfl: logoNFL,
  paramount: logPARA,
  disney: logoDIS,
  disneyxd: logoDISXD,
  dreamworks: logoDREAM,
  nick: logoNICK,
  mgm: logoMGM,
};

const GoNoodleModal = () => {
  const [activeTab, setActiveTab] = useState('disney');
  return (
    <>
      <ExtraInfoModal
        logoImg={GNChamps}
        logoWidth={200}
        bgImage={GNLarge}
        banner={
          <div
            style={{
              width: '100%',
              height: '14rem',
              backgroundImage: `url(${GNChamps})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center top',
            }}
          ></div>
        }
      >
        <p>
          <b>GoNoodle</b> is a kids’ entertainment company focused on movement,
          mindfulness, and learning. GoNoodle’s movement and mindfulness
          content, can be accessed at home, in school, and anywhere kids consume
          media on the go. The GoNoodle app gets nearly <b>16 million kids</b>{' '}
          moving each month with the mission to{' '}
          <b>transform screen time into active time </b>
          and generate positive results in the lives of kids, teachers,
          families, and communities.
        </p>
        <p>
          I had the privilege of wearing many hats during my time with GoNoodle.
          I started work on the HealthCare side of the company in account
          management and expansion business. I led a team that supports the
          contracted business in an effort to grow the underwritten footprint
          and deepen engagement in the current market. During this time, I also
          worked in new sales as a SME that assisted in closing deals.{' '}
        </p>
        <p>
          From there, I transitioned to the media side of the company where I
          sold, contracted, and managed the production of content for brands
          such as <b>NFL</b>, <b>Paramount</b>, <b>Disney</b>,{' '}
          <b>Nickelodeon</b>, and <b>MGM</b>. My most recent role with GoNoodle
          was in Sales Strategy and Enablement where I developed “go to market”
          strategy, messaging, content, resources, tools and skills necessary to
          effectively differentiate and sell.
        </p>
      </ExtraInfoModal>

      <Nav tabs fill className="mt-5">
        {[
          { logo: logoNFL, name: 'nfl' },
          { logo: logPARA, name: 'paramount' },
          { logo: logoDIS, name: 'disney' },
          { logo: logoDISXD, name: 'disneyxd' },
          { logo: logoDREAM, name: 'dreamworks' },
          { logo: logoNICK, name: 'nick' },
          { logo: logoMGM, name: 'mgm' },
        ].map(({ logo, name }, index) => (
          <NavItem key={name}>
            <NavLink
              className={classnames({ active: activeTab === name })}
              onClick={() => setActiveTab(name)}
            >
              <Logo image={logo} key={index} />
            </NavLink>
          </NavItem>
        ))}
      </Nav>
      <GoNoodleProperty active={activeTab} image={logos[activeTab]} />
    </>
  );
};

export default GoNoodleModal;

const StyledLogo = styled.div`
  width: 4rem;
  height: 4rem;
  background: url(${p => p.image});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;
const Logo = ({ image, company }) => {
  return <StyledLogo image={image} />;
};

// const links = {
//   disney: 'https://www.youtube.com/watch?v=W387m-ved6o',
//   disneyXD: 'https://www.youtube.com/watch?v=k0HDStQjIhg',
//   mgm: 'https://www.youtube.com/watch?v=zuQGpGRw02A',
//   dreamworks: 'https://www.youtube.com/watch?v=KhfkYzUwYFk',
//   paramount: 'https://www.youtube.com/watch?v=aZru-M3TUlI',
//   nick: 'https://www.youtube.com/watch?v=Fb4BREQCcf0',
//   nfl: 'https://family.gonoodle.com/activities/performance-training',
// };
