import React, { useContext } from 'react';
import styled from 'styled-components';

import { List } from '../../list/List';
import { PageContext } from '../page-context/PageContext';

export const Page: React.FunctionComponent = () => {
  const {
    rootList
  } = useContext(PageContext);

  return (
    <PageWrapper>
      {rootList && (
        <List list={rootList} />
      )}
    </PageWrapper>
  );
};

export const PageWrapper = styled.div(
  ({ theme }) => `
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 25px;
    background: ${theme.colors.lightGray};
  `
);
