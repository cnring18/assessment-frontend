import React from 'react';

import { Button } from './button/Button';
import { Image } from './image/Image';
import { Weather } from './weather/Weather';
import { TComponentType } from '../types/types';

interface IProps {
  options: any;
  type: TComponentType;
}

export const Component: React.FunctionComponent<IProps> = ({
  options,
  type,
}) => {
  switch(type) {
    case 'button':
      return <Button options={options} />;
    case 'image':
      return <Image alt={options.alt} src={options.src} />
    case 'weather':
      return <Weather lat={options.lat} lon={options.lon} />;
    default:
      return null;
  }
};