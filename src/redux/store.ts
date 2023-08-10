import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { RootReducer } from './rootReducer'
const Store = createStore(
  RootReducer
)

export default Store