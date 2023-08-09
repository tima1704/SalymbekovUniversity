import { combineReducers } from 'redux'
import { ModalReducer } from './ModalReducer/reducer'

export const RootReducer = combineReducers({
  Modal: ModalReducer
})

export type RootState = ReturnType<typeof RootReducer>

export const AllActions = {
  ...ModalReducer
}