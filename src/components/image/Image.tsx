import React from 'react';
import styled from 'styled-components';

import { ComponentWrapper } from '../../shared/sharedComponents';

interface IProps {
  alt: string;
  src: string;
}

export const Image: React.FunctionComponent<IProps> = ({
  alt,
  src,
}) => {
  return (
    <ComponentWrapper borderColor={'rgba(0, 0, 0, 0.15)'}>
      <StyledImage alt={alt} src={src} />
    </ComponentWrapper>
  );
};

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
`;