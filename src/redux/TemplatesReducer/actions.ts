import { TemplateActionsTypes, ITemplateSetAction, ITemplateEditAction, ITemplateState, ITemplatePayload } from "./types";

export const setTemplateAction = (payload: ITemplatePayload): ITemplateSetAction => {
  return {
    type: TemplateActionsTypes.SET_TEMPLATES,
    payload,
  };
};


export const editTemplateAction = (payload: ITemplateState): ITemplateEditAction => {
  return {
    type: TemplateActionsTypes.EDIT_TEMPLATES,
    payload,
  }
}