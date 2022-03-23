import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../stores'

export const useHookTools = () => {
  const navigate = useNavigate()
  const storeDispatch = useAppDispatch()
  return { navigate, storeDispatch }
}
