import { ITemplateState, TemplateActions, TemplateActionsTypes } from "./types";

const initalState: ITemplateState = {};

export function TemplateReducer(
  state = initalState,
  action: TemplateActions
): ITemplateState {
  switch (action.type) {
    case TemplateActionsTypes.EDIT_TEMPLATES:
      return { ...action.payload }
    default:
      return state;
  }
}
