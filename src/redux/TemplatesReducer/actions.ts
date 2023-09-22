import { TemplateActionsTypes, ITemplateEditAction, ITemplateState } from "./types";

export const editTemplateAction = (payload: ITemplateState): ITemplateEditAction => {
  return {
    type: TemplateActionsTypes.EDIT_TEMPLATES,
    payload,
  }
}