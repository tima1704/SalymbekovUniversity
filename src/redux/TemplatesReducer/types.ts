import React from 'react'

export interface ITemplate {
  layout?: React.ReactElement | React.FC
  placeholders?: ITemplatePlaceholder[]
  functions?: ITemplateFunction[]
}

export type ITemplateState = Record<string, ITemplate[]>

export interface ITemplatePayload {
  template: ITemplate
  pathname: string
}

export interface ITemplatePlaceholder {
  key: string
  type?: string
  value: string
}

export interface ITemplateFunction {
  id: string
  func: Record<string, unknown>
}

export enum TemplateActionsTypes {
  SET_TEMPLATES = "SET_TEMPLATES",
  EDIT_TEMPLATES = "EDIT_TEMPLATES"
}

export type TemplateActions = ITemplateSetAction | ITemplateEditAction;

export interface ITemplateSetAction {
  type: TemplateActionsTypes.SET_TEMPLATES
  payload: {
    template: ITemplate,
    pathname: string
  }
}

export interface ITemplateEditAction {
  type: TemplateActionsTypes.EDIT_TEMPLATES
  payload: ITemplateState
}