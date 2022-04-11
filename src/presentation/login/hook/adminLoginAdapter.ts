import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '@/stores'
import { setUserInfo } from '@/stores/app.store'
import { LoginParams } from '@/domain/admin/model/adminModel'
import { container } from 'tsyringe'
import { AdminLoginUseCase } from '@/domain/admin/application/adminLoginUsecase'

export function useAdminLoginAdapter() {
  const storeDispatch = useAppDispatch()
  const navigate = useNavigate()

  const adminLogin = async (params: LoginParams) => {
    const usecase = container.resolve(AdminLoginUseCase)
    const data = await usecase.execute(params)
    if (data) {
      storeDispatch(setUserInfo(data))
      navigate('/')
    }
  }
  return { adminLogin }
}
