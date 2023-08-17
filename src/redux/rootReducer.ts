import { combineReducers } from 'redux'
import { ModalReducer } from './ModalReducer/reducer'
import { TemplateReducer } from './TemplatesReducer/reducer'

export const RootReducer = combineReducers({
  Modal: ModalReducer,
  Template: TemplateReducer
})

export type RootState = ReturnType<typeof RootReducer>

export const AllActions = {
  ...ModalReducer,
  ...TemplateReducer,
}