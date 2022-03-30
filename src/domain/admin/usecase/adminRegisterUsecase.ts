import { IMessage } from '@/code/base/message'
import { useWebMessageServicec } from '@/code/service/web-message-service'
import { RegisterParams } from '../model/adminModel'
import { adminWebRepository } from '../repositories/adminWebRepository'

export async function adminRegisterUseCase(params: RegisterParams) {
  const message: IMessage = useWebMessageServicec()
  const { register } = adminWebRepository()
  const { data, code, msg } = await register(params)
  if (code == 200) {
    return data
  } else {
    message.error(msg)
    return null
  }
}
