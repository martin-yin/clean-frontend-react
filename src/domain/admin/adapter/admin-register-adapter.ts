import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '@/stores'
import { setUserInfo } from '@/stores/app.store'
import { RegisterParam } from '../model/admin.model'
import { adminRegisterUseCase } from '../usecase/admin-register-usecase'

export const useAdminRegisterAdapter = () => {
  const storeDispatch = useAppDispatch()
  const navigate = useNavigate()

  const adminRegister = async (params: RegisterParam) => {
    const data = await adminRegisterUseCase(params)
    if (data) {
      storeDispatch(setUserInfo(data))
      navigate('/')
    }
  }
  return { adminRegister }
}
