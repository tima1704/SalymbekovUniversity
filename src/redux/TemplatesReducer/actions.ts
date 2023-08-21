import { TemplateActionsTypes, ITemplate, ITemplateSetAction, ITemplateEditAction } from "./types";

export const setTemplateAction = (payload: ITemplate): ITemplateSetAction => {
  return {
    type: TemplateActionsTypes.SET_TEMPLATES,
    payload,
  };
};


export const editTemplateAction = (payload: ITemplate[]): ITemplateEditAction => {
  return {
    type: TemplateActionsTypes.EDIT_TEMPLATES,
    payload,
  }
}