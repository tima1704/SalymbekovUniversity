import { ITemplate, TemplateActions, TemplateActionsTypes } from "./types";

const initalState: ITemplate[] = [];

export function TemplateReducer(
  state = initalState,
  action: TemplateActions
): ITemplate[] {
  switch (action.type) {
    case TemplateActionsTypes.SET_TEMPLATES:
      return [ ...state, action.payload ];

    default:
      return state;
  }
}
