import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { InjectFactoryGet } from '../../../code/decorator'
import { setUserInfo } from '../../../stores/app.store'
import { LoginParam, RegisterParam } from '../model/admin.model'
import { AdminLoginUseCase } from '../usecase/admin-login-usecase'

export const adminAdapter = () => {
  // Todo: 考虑换成 tsyringe
  const adminLogin = InjectFactoryGet<AdminLoginUseCase>(AdminLoginUseCase)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleSubmit = async (form: LoginParam) => {
    const data = await adminLogin.execute(form)
    dispatch(setUserInfo(data))
    navigate('/')
  }

  const handleRegister = async (form: RegisterParam) => {}
  return { handleSubmit, handleRegister }
}
