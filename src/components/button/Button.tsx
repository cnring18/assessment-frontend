import React, { useContext } from 'react';
import styled from 'styled-components';

import { PageContext } from '../../pages/page-context/PageContext';
import { ComponentWrapper } from '../../shared/sharedComponents';

interface IProps {
  options: {
    text: string;
    variable: string;
    value: string;
  };
}

export const Button: React.FunctionComponent<IProps> = ({
  options: {
    text,
    variable,
    value,
  }
}) => {
  const {
    updateVariable
  } = useContext(PageContext);

  const handleClick = () => {
    updateVariable({
      varName: variable,
      val: value,
    })
  };

  return (
    <StyledComponentWrapper>
      <StyledButton onClick={handleClick}>
        <div>
        {text}
        </div>
      </StyledButton>
    </StyledComponentWrapper>
  );
};

const StyledComponentWrapper = styled(ComponentWrapper)(
  ({ theme }) => `
    padding: 24px;
    background: ${theme.colors.blue};
  `
);

const StyledButton = styled.button(
  ({ theme }) => `
    width: 100%;
    height: 100%;
    display: flex;
    border: none;
    background: ${theme.colors.blue};
    color: ${theme.colors.white};
    font-size: 24px;
    text-align: left;
    vertical-align: top;
  `
);

const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
`;
