import { createReducer, createAction } from 'typesafe-actions';
import { produce } from 'immer';

const prefix: string = 'COUNT_';

const INCREASE_COUNT = `${prefix}INCREASE_COUNT`;

export const increaseCount = createAction(INCREASE_COUNT);

export interface countReducerType {
  count: number;
  prevCount: number;
}

const initialState: countReducerType = {
  count: 0,
  prevCount: 0,
};
