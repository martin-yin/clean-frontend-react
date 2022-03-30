import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '@/stores'
import { setUserInfo } from '@/stores/app.store'
import { LoginParams } from '../model/adminModel'
import { adminLoginUseCase } from '../usecase/adminLoginUsecase'

export function useAdminLoginAdapter() {
  const storeDispatch = useAppDispatch()
  const navigate = useNavigate()

  const adminLogin = async (params: LoginParams) => {
    const data = await adminLoginUseCase(params)
    if (data) {
      storeDispatch(setUserInfo(data))
      navigate('/')
    }
  }
  return { adminLogin }
}
