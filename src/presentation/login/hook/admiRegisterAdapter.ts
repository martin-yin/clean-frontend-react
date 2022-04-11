import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '@/stores'
import { setUserInfo } from '@/stores/app.store'
import { RegisterParams } from '@/domain/admin/model/adminModel'
import { container } from 'tsyringe'
import { AdminRegisterUseCase } from '@/domain/admin/application/adminRegisterUsecase'

export function useAdminRegisterAdapter() {
  const storeDispatch = useAppDispatch()
  const navigate = useNavigate()

  const adminRegister = async (params: RegisterParams) => {
    const usecase = container.resolve(AdminRegisterUseCase)
    const data = await usecase.execute(params)
    if (data) {
      storeDispatch(setUserInfo(data))
      navigate('/')
    }
  }
  return { adminRegister }
}
