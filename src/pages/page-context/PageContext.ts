import React, { createContext } from 'react';

import { IList, TComponent } from '../../types/types';

export interface IPageContext {
  components?: TComponent[];
  lists?: IList[];
  rootList?: IList;
  variables?: Record<string, string>;
  updateVariable: (value: {
      varName: string;
      val: string;
    }) => void;
}

export const PageContext: React.Context<IPageContext> = createContext({
  updateVariable: (value) => {},
});