import { IMessage } from '../../../code/base/message'
import { useWebMessageServicec } from '../../../code/service/web-message-service'
import { UserActionStatisticListModel } from '../model/user.model'
import { useWebRepository } from '../repositories/user-web-repository'

export const getUserActionStatisticsUseCase = async (params: {
  session_id: string
}): Promise<UserActionStatisticListModel> => {
  const message: IMessage = useWebMessageServicec()
  const { data, code, msg } = await useWebRepository.getUserActionStatisticList(params)
  if (code == 200) {
    return data as UserActionStatisticListModel
  } else {
    message.error(msg)
    return [] as unknown as UserActionStatisticListModel
  }
}
