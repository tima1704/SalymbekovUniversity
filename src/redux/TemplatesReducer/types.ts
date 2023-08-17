import React from 'react'

export interface ITemplate {
  layout?: React.ReactElement | React.FC
  placeholders?: ITemplatePlaceholder[]
  functions?: ITemplateFunction[]
}

export interface ITemplatePlaceholder {
  key: string
  value: string
}

export interface ITemplateFunction {
  id: string
  func: object
}

export enum TemplateActionsTypes {
  SET_TEMPLATES = "SET_TEMPLATES",
}

export type TemplateActions = ITemplateActions;

export interface ITemplateActions {
  type: TemplateActionsTypes.SET_TEMPLATES;
  payload: ITemplate;
}