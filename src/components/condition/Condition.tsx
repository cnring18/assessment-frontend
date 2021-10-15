import React, { useContext } from 'react';

import { List } from '../../list/List';
import { PageContext } from '../../pages/page-context/PageContext';

interface IProps {
  children: number;
  options: {
    variable: string;
    value: string;
  }; 
}

export const Condition: React.FunctionComponent<IProps> = ({
  children,
  options: {
    variable,
    value,
  },
}) => {
  const {
    lists,
    variables,
  } = useContext(PageContext);

  const showComponent = variables?.[variable] === value;

  if (!showComponent) {
    return null;
  }

  const listToRender = lists?.find((list) => list.id === children);

  if (!listToRender) {
    return null;
  }

  return (
    <List list={listToRender} />
  )

};