import { createStore } from 'redux'
import { RootReducer } from './rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
const Store = createStore(
  RootReducer,
  composeWithDevTools()
)

export default Store