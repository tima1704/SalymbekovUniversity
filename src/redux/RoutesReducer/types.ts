export interface RouteState {
  routes: string[]
}

export interface AddRouteAction {
  type: IRoutesActionType.ROUTES_ACTION,
  payload: string;
}

export enum IRoutesActionType {
  ROUTES_ACTION = "ROUTES_ACTION",
}

export type RouteAction = AddRouteAction;