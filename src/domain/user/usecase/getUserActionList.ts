import { IMessage } from '@/code/base/message'
import { useWebMessageServicec } from '@/code/service/web-message-service'
import { UserActionListModel } from '../model/userModel'
import { userWebRepositoryMapper } from '../repositories/mapper/userWebRepository.mapper'
import { userWebRepository } from '../repositories/userWebRepository'

export const getUserActionListUseCase = async (params: {
  session_id: string
  page: number
  limit: number
}): Promise<UserActionListModel> => {
  const { mapFormUserActionListModel } = userWebRepositoryMapper()
  const message: IMessage = useWebMessageServicec()
  const { getUserActionList } = userWebRepository()
  const { data, code, msg } = await getUserActionList(params)
  if (code == 200) {
    return mapFormUserActionListModel(data)
  } else {
    message.error(msg)
    return {} as unknown as UserActionListModel
  }
}
