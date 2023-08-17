import { TemplateActionsTypes, ITemplate, ITemplateActions } from "./types";

export const setTemplateAction = (payload: ITemplate): ITemplateActions => {
  return {
    type: TemplateActionsTypes.SET_TEMPLATES,
    payload,
  };
};
