import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Icon } from '../../icons/Icon';
import { ComponentWrapper } from '../../shared/sharedComponents';
import { IWeatherData } from '../../types/types';
import { fetchWeather } from '../../utils/fetchUtils';

interface IProps {
  lat: number;
  lon: number;
}

export const Weather: React.FunctionComponent<IProps> = ({
  lat,
  lon
}) => {
  const [ weatherData, setWeatherData ] = useState<IWeatherData>();

  useEffect(() => {
    fetchWeather(lat, lon)
    .then((data) => setWeatherData(data));
  }, [ lat, lon]);

  if (!weatherData) {
    return null;
  }

  const upcomingWeatherComps = weatherData.upcomming.map(
    (weather, idx) => {
      return (
        <UpcomingWeather key={idx}>
          <UpcomingIcon>
            <Icon iconName={weather.condition} />
          </UpcomingIcon>
          <UpcomingDay>
            {weather.day}
          </UpcomingDay>
        </UpcomingWeather>
      );
    }
  )

  return (
    <StyledComponentWrapper borderColor={'rgba(0, 0, 0, 0.15)'}>
      <Half>
        <CurrentWrapper>
          <CurrentIconWrapper>
            <Icon iconName={weatherData.condition} />
          </CurrentIconWrapper>
          <CurrentTextWrapper>
            <Temp>{weatherData.temperature}</Temp>
            <Condition>{weatherData.conditionName}</Condition>
          </CurrentTextWrapper>
        </CurrentWrapper>
      </Half>
      <Half>
        <Location>
          {weatherData.location}
        </Location>
        <UpcomingWrapper>
          {upcomingWeatherComps}
        </UpcomingWrapper>
      </Half>
    </StyledComponentWrapper>
  );
};

const StyledComponentWrapper = styled(ComponentWrapper)(
  ({ theme }) => `
    padding: 24px;
    background: ${theme.colors.white};
  `
);

const Half = styled.div`
  flex: 1 0 auto;
`;

const CurrentWrapper = styled.div`
  display: flex;
`;

const CurrentIconWrapper = styled.div`
  width: 72px;
  height: 72px;
`;

const CurrentTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Temp = styled.div`
  font-size: 36px;
`;

const Condition = styled.div`
  font-size: 14px;
`;

const Location = styled.div`
  height: 32px;
  padding-bottom: 16px;
  font-size: 14px;
  text-align: right;
`;

const UpcomingWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const UpcomingWeather = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UpcomingIcon = styled.div`
  width: 48px;
  height: 48px;
`;

const UpcomingDay = styled.div`

`;