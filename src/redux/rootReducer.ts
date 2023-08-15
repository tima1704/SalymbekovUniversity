import { combineReducers } from 'redux'
import { ModalReducer } from './ModalReducer/reducer'
import { RouteReducer } from './RoutesReducer/reducer'

export const RootReducer = combineReducers({
  Modal: ModalReducer,
  Route: RouteReducer,
})

export type RootState = ReturnType<typeof RootReducer>

export const AllActions = {
  ...ModalReducer,
  ...RouteReducer,
}