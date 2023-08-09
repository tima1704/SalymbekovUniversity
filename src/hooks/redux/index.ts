import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import { bindActionCreators } from 'redux'
import { AllActions, RootState } from '../../redux/rootReducer'
import * as ModalActions from '../../redux/ModalReducer/actions'

export const useAppDispatch = () => {
  const dispatch = useDispatch()
  return bindActionCreators({...AllActions, ...ModalActions}, dispatch)
}

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector