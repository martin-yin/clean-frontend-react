import { IMessage } from '@/code/base/message'
import { useWebMessageServicec } from '@/code/service/web-message-service'
import { LoginParam } from '../model/admin.model'
import { adminWebRepositorys } from '../repositories/admin-web-repository'

export const adminLoginUseCase = async (params: LoginParam) => {
  const message: IMessage = useWebMessageServicec()
  const { data, code, msg } = await adminWebRepositorys.login(params)
  if (code == 200) {
    return data
  } else {
    message.error(msg)
    return null
  }
}
