import React from 'react';
import RPlayer from 'react-player';
import styled from 'styled-components';

const videos = {
  disney: 'https://www.youtube.com/watch?v=W387m-ved6o',
  disneyxd: 'https://www.youtube.com/watch?v=k0HDStQjIhg',
  mgm: 'https://www.youtube.com/watch?v=zuQGpGRw02A',
  dreamworks: 'https://www.youtube.com/watch?v=KhfkYzUwYFk',
  paramount: 'https://www.youtube.com/watch?v=aZru-M3TUlI',
  nick: 'https://www.youtube.com/watch?v=Fb4BREQCcf0',
  nfl: 'https://www.youtube.com/watch?v=KnwneN9cUHc',
};

const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 1rem 2rem;
`;

const StyledLogo = styled.div`
  background: url(${p => p.image});
  width: 15%;
  margin: 2rem;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const GoNoodleProperty = ({ active, image }) => {
  return (
    <StyledDiv>
      <StyledLogo image={image} />
      <RPlayer url={videos[active]} />
    </StyledDiv>
  );
};

export default GoNoodleProperty;
