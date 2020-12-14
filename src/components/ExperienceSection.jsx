import React from 'react';
import Experience from './Experience';
import goNoodleSmall from '../assets/images/goNoodleSmall.jpg';
import goNoodleLarge from '../assets/images/goNoodleLarge.png';
import openlyImg from '../assets/images/Openly_draft.png';
import emeril from '../assets/images/logo-emeril.png';
import emma from '../assets/images/emma.png';
import amex from '../assets/images/amex.png';
import ovation from '../assets/images/ovation.png';
import gaylord from '../assets/images/gaylord.png';
import GoNoodleModal from './ExtraInfoModals/GoNoodleModal';
import EmmaModal from './ExtraInfoModals/EmmaModal';
import AmexModal from './ExtraInfoModals/AmexModal';
import GaylordModal from './ExtraInfoModals/GaylordModal';
import OpenlyModal from './ExtraInfoModals/OpenlyModal';
import OvationModal from './ExtraInfoModals/OvationModal';
//
//
const ExperienceSection = () => {
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex justify-content-center"
      id="experience"
    >
      <div className="w-100">
        <h2 className="mb-5">Experience</h2>

        <Experience
          positionTitle="VP CLIENT SERVICES AND OPERATIONS"
          companyName="Ovation"
          modalContent={<OvationModal />}
          smallImage={ovation}
          largeImage={ovation}
          startDate="2020-11"
          endDate="present"
          slug="ovation"
          bullets={[
            {
              text: `Lead the sales support, client services, and production teams.`,
            },
            {
              text: `Own the retention, renewal, revenue, and margin growth for Ovation’s entire client portfolio.`,
            },
            {
              text: `Develop, refine, and implement account management practices and overall company best practices.`,
            },
            {
              text: `Contribute to new business wins through content contribution and pitch participation.`,
            },
            {
              text: `Oversee and ensure the end to end delivery of quality customer experiences.`,
            },
          ]}
        />
        <Experience
          positionTitle="Consultant"
          companyName="Openly"
          modalContent={<OpenlyModal />}
          smallImage={openlyImg}
          largeImage={openlyImg}
          startDate="2020-07"
          endDate="2020-09"
          slug="openly"
          bullets={[
            {
              text: `Sales and business development for a population health management service that provides a means to efficiently screen, monitor and manage the health of up to 100% of a specified population.`,
            },
            {
              text: `The mobile app allows users to capture vital signs (such as oxygen saturation, respiratory rate and heart rate) and other meaningful clinical data that can indicate the early onset of illness.`,
            },
          ]}
        />
        <Experience
          positionTitle="VP, Sales Solutions and Account Management"
          companyName="GoNoodle"
          modalContent={<GoNoodleModal />}
          smallImage={goNoodleSmall}
          largeImage={goNoodleLarge}
          startDate="2017-03"
          endDate="2020-05"
          slug="goNoodle"
          bullets={[
            {
              text: `Evaluate, strategize, and deliver custom partnership opportunities. Worked with clients including but not limited to: Paramount, Nickelodeon, Disney, NFL, USTA, and Sony.`,
            },
            {
              text: `Conceptualized, created, and executed integrated sales proposals across multiple categories such as entertainment, food, healthcare, sports, retail, and media.`,
            },
            {
              text: `Drive sales process pre, during, and post-sale, achieving a 168% YOY increase in sales from 2018-2019.`,
            },
            {
              text: `Managed the development and delivery of large scale projects that involved cross-departmental team contributions from product, content, marketing, c-suite, sales, and external stakeholders.`,
            },
          ]}
        />
        <Experience
          positionTitle="RVP, Partner Management"
          companyName="GoNoodle"
          modalContent={<GoNoodleModal />}
          smallImage={goNoodleSmall}
          largeImage={goNoodleLarge}
          startDate="2016-04"
          endDate="2017-03"
          bullets={[
            {
              text: `Support prospective sales, build and maintain partner relationships. Ensure retention, expansion and growth through strategic planning and management. Ensure renewals, satisfaction and expansions across 26 key accounts.`,
            },
            {
              text: `Key player in closing new business. Secured three new partnerships in under a year, resulting in $2.8 million in new revenue.`,
            },
            {
              text: `Create and manage publicity strategies to drive community engagement.`,
            },
            {
              text: `Train, mentor and manage the partnership director. Cross-departmental management - sales, marketing, in-field managers.`,
            },
            {
              text: `Manage and liaise with internal and external stakeholders to ensure goals are met and strategic plans are executed.`,
            },
          ]}
        />

        <Experience
          positionTitle="Senior Sales Executive"
          companyName="Emma"
          startDate="2015-06"
          endDate="2016-02"
          largeImage={emma}
          modalContent={<EmmaModal />}
          slug="emma"
          bullets={[
            {
              text: `Responsible for growing a small business SaaS into an enterprise level competitor.`,
            },
            {
              text: `Expert in email marketing, coaching prospective clients on email strategy and best practices for their business model.`,
            },
            {
              text: `Drove guaranteed revenues through annual contracted sales, shifting the business away from a monthly subscription service only.`,
              subList: [
                `95% of total revenues from sales were in contracted business.`,
                `91% of new accounts sold were contracted.`,
              ],
            },
          ]}
        />

        <Experience
          positionTitle="Manager of Business Development"
          companyName="American Express Travel"
          startDate="2012-09"
          endDate="2015-05"
          modalContent={<AmexModal />}
          largeImage={amex}
          slug="amex"
          bullets={[
            {
              text: `Managed a team of 350+ agents: conducted needs assessments of staff based on performance, provided training and feedback to increase individual team member productivity, and set standards for involvement in a specialized program.`,
            },
            {
              text: `Designed and implemented business development solutions that enhanced the growth and success of the Consumer Travel division. Process improvement initiatives drove business success and resulted in:`,
              subList: [
                `56% increase in consumer travel sales.`,
                `250% increase in average card spend per booking.`,
                `8% increase in new customer referrals.`,
                `58% increase in customer bookings.`,
                `12% increase in quality of service.`,
              ],
            },
          ]}
        />

        <Experience
          positionTitle="Director of Regional Sales"
          companyName="Gaylord Hotels"
          startDate="2010-09"
          endDate="2012-09"
          largeImage={gaylord}
          slug="gaylord"
          modalContent={<GaylordModal />}
          bullets={[
            {
              text: `Prospected, solicited, negotiated and closed new accounts with corporate partners, associations and various other incentive accounts. `,
            },
            {
              text: `Received multiple performance-based awards and recognition including:`,
              subList: [
                `#1 Property Sales Manager, 3rd Quarter, 2011 - 144.71% of goal.`,
                `#2 Property Sales Manager 4th Quarter, 2011- 234.25% of goal.`,
                `#1 Northeast Territory Sales Manager, 2011 -128.44% of goal.`,
                `#2 Property Sales Manager, 2011 - 128.44% of goal.`,
                `#1 Sales Manager for Gaylord Brands, 2011 Acquisition Business.`,
                `Managed a $7.5M/year territory, grew sales year over year by 67%.`,
                `Exceeded sales goal by $2.2M.`,
              ],
            },
          ]}
        />

        <Experience
          positionTitle="Catering Sales Manager"
          companyName="Gaylord Hotels"
          startDate="2005-10"
          endDate="2010-09"
          largeImage={gaylord}
          slug="gaylord"
          modalContent={<GaylordModal />}
          bullets={[
            {
              text: `Responsible for the sales and logistics of large convention food and beverage programs, ensuring new business development through strategic sales planning.`,
              subList: [
                `Exceeded Food and Beverage sales target of $51 million by $2 million.`,
                `Upsold 70% above the contract value.`,
                `Forecast group revenue within +/- 5% up to 12 months out.`,
              ],
            },
          ]}
        />

        <Experience
          companyName={`Emeril Lagasse's Homebase`}
          positionTitle="Marketing Coordinator"
          largeImage={emeril}
          startDate="2004-04"
          endDate="2005-09"
        />
      </div>
    </section>
  );
};

export default ExperienceSection;
