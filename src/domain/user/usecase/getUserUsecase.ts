import { IMessage } from '@/code/base/message'
import { useWebMessageServicec } from '@/code/service/web-message-service'
import { UserModel } from '../model/userModel'
import { userWebRepositoryMapper } from '../repositories/mapper/userWebRepository.mapper'
import { userWebRepository } from '../repositories/userWebRepository'

export const getUserUseCase = async (params: string): Promise<UserModel> => {
  const message: IMessage = useWebMessageServicec()
  const { mapFromUser } = userWebRepositoryMapper()
  const { getUser } = userWebRepository()
  const { data, code, msg } = await getUser(params)
  if (code == 200) {
    return mapFromUser(data) as UserModel
  } else {
    message.error(msg)
    return [] as unknown as UserModel
  }
}
