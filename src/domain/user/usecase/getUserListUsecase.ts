import { IMessage } from '@/code/base/message'
import { useWebMessageServicec } from '@/code/service/web-message-service'
import { GetUserListParams, UserListModel } from '../model/userModel'
import { userWebRepositoryMapper } from '../repositories/mapper/userWebRepository.mapper'
import { userWebRepository } from '../repositories/userWebRepository'

export const getUserListUseCase = async (params: GetUserListParams): Promise<UserListModel> => {
  const message: IMessage = useWebMessageServicec()
  const { mapFromUserListModel } = userWebRepositoryMapper()
  const { getUserList } = userWebRepository()
  const { data, code, msg } = await getUserList(params)
  if (code == 200) {
    return mapFromUserListModel(data)
  } else {
    message.error(msg)
    return [] as UserListModel
  }
}
