import { Action } from '@ngrx/store';

export enum MethodsActionTypes {
  pros = '[Methods] pros',
  cons = '[Methods] cons',
}

export class ConsData implements Action {
  readonly type = MethodsActionTypes.cons;
  constructor(public payload: {}) { }
}
export class ProsData implements Action {
  readonly type = MethodsActionTypes.pros;
  constructor(public payload: {}) { }
}

export type All = ProsData|ConsData ;
