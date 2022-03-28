import { IMessage } from '@/code/base/message'
import { useWebMessageServicec } from '@/code/service/web-message-service'
import { GetUserListParams, UserListModel } from '../model/user.model'
import { UserWebRepositoryMapper } from '../repositories/mapper/user-web-repository.mapper'
import { useWebRepository } from '../repositories/user-web-repository'

export const getUserListUseCase = async (params: GetUserListParams): Promise<UserListModel> => {
  const message: IMessage = useWebMessageServicec()
  const { mapFromUserListModel } = UserWebRepositoryMapper()
  const { data, code, msg } = await useWebRepository.getUserList(params)
  if (code == 200) {
    return mapFromUserListModel(data)
  } else {
    message.error(msg)
    return [] as UserListModel
  }
}
