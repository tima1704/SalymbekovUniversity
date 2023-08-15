import { IRoutesActionType, RouteAction, RouteState } from "./types";

const initialState: RouteState = {
  routes: []
};

export const RouteReducer = (state: RouteState = initialState, action: RouteAction) => {
  switch(action.type) {
    case IRoutesActionType.ROUTES_ACTION:
      return {
        ...state,
        routes: [...state.routes, action.payload]
      }

      default:
        return state;
  }
};