import React, { useContext } from 'react';

import { Condition } from '../components/condition/Condition';
import { Component } from '../components/Component';
import { PageContext } from '../pages/page-context/PageContext';
import { IList, TComponent, IConditionComponent } from '../types/types';

interface IProps {
  list: IList;
}

const isConditionComponent = (comp: TComponent): comp is IConditionComponent => {
  return comp.hasOwnProperty('children');
}

export const List: React.FunctionComponent<IProps> = ({
  list
}) => {
  const {
    components
  } = useContext(PageContext);

  const renderedComponents = (() => {
    return list.components.map((compId) => {
      const comp = components?.find((component) => compId === component.id);

      if (comp) {
        const { options, type } = comp;

        if (isConditionComponent(comp)) {
          return <Condition key={`${list}-${compId}`} options={comp.options} children={comp.children} />
        }

        return <Component key={`${list}-${compId}`} options={options} type={type} />;
      }

      return null;
    });
  })();

  return (
    <>
      {renderedComponents}
    </>
  );
};
