import { IMessage } from '@/code/base/message'
import { useWebMessageServicec } from '@/code/service/web-message-service'
import { UserModel } from '../model/user.model'
import { userWebRepositoryMapper } from '../repositories/mapper/user-web-repository.mapper'
import { useWebRepository } from '../repositories/user-web-repository'

export const getUserUseCase = async (params: string): Promise<UserModel> => {
  const message: IMessage = useWebMessageServicec()
  const { data, code, msg } = await useWebRepository.getUser(params)
  if (code == 200) {
    return userWebRepositoryMapper.mapFromUser(data) as UserModel
  } else {
    message.error(msg)
    return [] as unknown as UserModel
  }
}
