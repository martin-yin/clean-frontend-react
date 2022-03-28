import { IMessage } from '@/code/base/message'
import { useWebMessageServicec } from '@/code/service/web-message-service'
import { UserActionListModel } from '../model/user.model'
import { UserWebRepositoryMapper } from '../repositories/mapper/user-web-repository.mapper'
import { useWebRepository } from '../repositories/user-web-repository'

export const getUserActionListUseCase = async (params: {
  session_id: string
  page: number
  limit: number
}): Promise<UserActionListModel> => {
  const { mapFormUserActionList } = UserWebRepositoryMapper()
  const message: IMessage = useWebMessageServicec()
  const { data, code, msg } = await useWebRepository.getUserActionList(params)
  if (code == 200) {
    return mapFormUserActionList(data)
  } else {
    message.error(msg)
    return {} as unknown as UserActionListModel
  }
}
