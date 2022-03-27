import { IMessage } from '@/code/base/message'
import { useWebMessageServicec } from '@/code/service/web-message-service'
import { RegisterParam } from '../model/admin.model'
import { adminWebRepositorys } from '../repositories/admin-web-repository'

export const adminRegisterUseCase = async (params: RegisterParam) => {
  const message: IMessage = useWebMessageServicec()
  const { data, code, msg } = await adminWebRepositorys.register(params)
  if (code == 200) {
    return data
  } else {
    message.error(msg)
    return null
  }
}
