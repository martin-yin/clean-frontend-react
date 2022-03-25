import { useNavigate } from 'react-router-dom'
import { useWebMessageServicec } from '../../../code/service/web-message-service'
import { useAppDispatch } from '../../../stores'
import { setUserInfo } from '../../../stores/app.store'
import { LoginParam } from '../model/admin.model'
import { AdminWebRepositorys } from '../repositories/admin-web-repository'

export const AdminLoginUseCase = () => {
  const storeDispatch = useAppDispatch()
  const navigate = useNavigate()
  const message = useWebMessageServicec()

  const adminLogin = async (params: LoginParam) => {
    const { data, code, msg } = await AdminWebRepositorys.login(params)
    if (code == 200) {
      storeDispatch(setUserInfo(data))
      navigate('/')
    } else {
      return message.error(msg)
    }
  }
  return { adminLogin }
}
