import React from 'react';
import ExtraInfoModal from './ExtraInfoModal';
import gaylordBG from '../../assets/images/gaylord.png';
//
//
const GaylordModal = () => {
  return (
    <ExtraInfoModal logoImg={gaylordBG} logoHeight={70} bgImage={gaylordBG}>
      <p>
        <b>Gaylord Resorts</b> are a destination for travelers, as well as prime
        meeting and convention locations.
      </p>
      <p>
        Gaylord's portfolio consisted of four properties that were in close
        proximity to major cities, taking on the charm of each of their
        locations. Each property has a large number of sleeping rooms, fine
        dining, meeting space, and activities housed all under one roof.
      </p>
      <p>
        The success of the hotels inspired Marriott to purchase the brand in
        2012.
      </p>
      <p>
        I started with Gaylord Opryland in meetings and events where I managed
        the food and beverage programs for large convention business. The role
        required cross departmental communication and management to actualize
        events with <b>up to 10k attendees</b> for multiple events a day.
      </p>
      <p>
        In addition to being the client liaison for all of their food and
        beverage needs, we were tasked with upselling against their initial
        contracted guarantees. Loving the sales side of my role, I transitioned
        to frontline sales where I represented Gaylord Opryland along with the
        other three properties within the territory of NY, Massachusetts, and
        Canada. I was responsible for bringing in <b>$10 million</b> worth of
        annualized business.
      </p>
    </ExtraInfoModal>
  );
};

export default GaylordModal;
