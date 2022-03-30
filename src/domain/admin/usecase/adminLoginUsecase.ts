import { IMessage } from '@/code/base/message'
import { useWebMessageServicec } from '@/code/service/web-message-service'
import { LoginParams } from '../model/adminModel'
import { adminWebRepository } from '../repositories/adminWebRepository'

export async function adminLoginUseCase(params: LoginParams) {
  const message: IMessage = useWebMessageServicec()
  const { login } = adminWebRepository()
  const { data, code, msg } = await login(params)
  if (code == 200) {
    return data
  } else {
    message.error(msg)
    return null
  }
}
