import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import { bindActionCreators } from 'redux'
import { AllActions, RootState } from '../../redux/rootReducer'
import * as ModalActions from '../../redux/ModalReducer/actions'
import * as TemplateActions from '../../redux/TemplatesReducer/actions'

export const useAppDispatch = () => {
  const dispatch = useDispatch()
  return bindActionCreators({...AllActions, ...ModalActions, ...TemplateActions}, dispatch)
}

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector