import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '@/stores'
import { setUserInfo } from '@/stores/app.store'
import { LoginParam } from '../model/admin.model'
import { adminLoginUseCase } from '../usecase/admin-login-usecase'

export const useAdminLoginAdapter = () => {
  const storeDispatch = useAppDispatch()
  const navigate = useNavigate()

  const adminLogin = async (params: LoginParam) => {
    const data = await adminLoginUseCase(params)
    if (data) {
      storeDispatch(setUserInfo(data))
      navigate('/')
    }
  }
  return { adminLogin }
}
