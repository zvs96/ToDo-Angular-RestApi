import * as  Actions from './methods.actions'
export type ActionT = Actions.All;

export const initialState = {
  pros: [],
  cons: [],
};

export function methods(state = initialState, action: ActionT) {
  switch (action.type) {
    case Actions.MethodsActionTypes.pros:
      return { ...state, pros: action.payload }
    case Actions.MethodsActionTypes.cons:
      return { ...state, cons: action.payload }
    default:
      return state;
  }
}
