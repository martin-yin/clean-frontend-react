import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '@/stores'
import { setUserInfo } from '@/stores/app.store'
import { RegisterParams } from '../model/adminModel'
import { adminRegisterUseCase } from '../usecase/adminRegisterUsecase'

export function useAdminRegisterAdapter() {
  const storeDispatch = useAppDispatch()
  const navigate = useNavigate()

  const adminRegister = async (params: RegisterParams) => {
    const data = await adminRegisterUseCase(params)
    if (data) {
      storeDispatch(setUserInfo(data))
      navigate('/')
    }
  }
  return { adminRegister }
}
