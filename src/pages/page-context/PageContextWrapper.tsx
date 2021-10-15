import React, { useEffect, useReducer, useState } from 'react';

import { PageContext } from './PageContext';
import { IList, TComponent } from '../../types/types';
import { fetchPage } from '../../utils/fetchUtils';

interface IProps {
  id: string;
}

export const PageContextWrapper: React.FunctionComponent<IProps> = ({
  children,
  id,
}) => {
  const [ components, setComponents ] = useState<TComponent[]>();
  const [ lists, setLists ] = useState<IList[]>();
  const [ rootList, setRootList ] = useState<IList>();

  const variableReducer = (state: Record<string, string>, action: { varName: string; val: string; }) => {
    const newState = {
      ...state,
      [action.varName]: action.val,
    };

    return newState;
  }

  const [ variables, dispatchVarUpdate ] = useReducer(variableReducer, {});

  useEffect(() => {
    fetchPage(id)
    .then((data) => {

      const root = data.lists.find((list) => list.id === 0);

      setComponents(data.components);
      setLists(data.lists);
      setRootList(root);

      data.variables?.forEach((newVar) => {
        dispatchVarUpdate({ varName: newVar.name, val: newVar.initialValue  })
      });
    });
  }, [ id ]);

  const pageContext = {
    components,
    lists,
    rootList,
    variables,
    updateVariable: dispatchVarUpdate,
  }

  return (
    <PageContext.Provider value={pageContext}>
      {children}
    </PageContext.Provider>
  );
}