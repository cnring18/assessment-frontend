import { IList, IVariable, TComponent } from '../types/types';

export interface IPageFetchResponse {
  components: TComponent[];
  lists: IList[];
  variables?: IVariable[];
}