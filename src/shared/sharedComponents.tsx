import styled, { css } from 'styled-components';

interface IComponentWrapper {
  borderColor?: string;
}

export const ComponentWrapper = styled.div<IComponentWrapper>(
  ({ borderColor }) => css`
    height: 165px;
    min-height: 165px;
    display: flex;
    box-sizing: border-box;
    border-radius: 25px;
    margin-bottom: 24px;
    overflow: hidden;

    ${borderColor && `border: 1px solid ${borderColor}`}
  `
);