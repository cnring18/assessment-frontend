import React from 'react';
import styled from 'styled-components';

import AddBox from '../icons/add-box.svg';
import ClearDay from '../icons/clear-day.svg';
import Cloudy from '../icons/cloudy.svg';
import Rain from '../icons/rain.svg';

interface IProps {
  className?: string;
  iconName: string;
}

export const Icon: React.FunctionComponent<IProps> = ({
  className = '',
  iconName,
}) => {

  const src = (() => {
    switch(iconName) {
      case 'add-box':
        return AddBox;
      case 'clear-day':
        return ClearDay;
      case 'cloudy':
        return Cloudy;
      case 'rain':
        return Rain;
    }
  })();

  return (
    <StyledImage src={src} />
  );
}

const StyledImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;