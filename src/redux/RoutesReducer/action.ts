import {IRoutesActionType } from "./types"

export const setRoutesAction = (payload: string) => {
  return {
    type: IRoutesActionType.ROUTES_ACTION,
    payload,
  }
}