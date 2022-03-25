import { RegisterParam } from '../model/admin.model'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../../stores'
import { setUserInfo } from '../../../stores/app.store'
import { AdminWebRepositorys } from '../repositories/admin-web-repository'
import { useWebMessageServicec } from '../../../code/service/web-message-service'
import { IMessage } from '../../../code/base/message'

export const AdminRegisterUseCase = () => {
  const storeDispatch = useAppDispatch()
  const navigate = useNavigate()
  const message: IMessage = useWebMessageServicec()

  const adminRegister = async (params: RegisterParam) => {
    const { data, code, msg } = await AdminWebRepositorys.register(params)
    if (code == 200) {
      storeDispatch(setUserInfo(data))
      navigate('/')
    } else {
      return message.error(msg)
    }
  }
  return { adminRegister }
}
