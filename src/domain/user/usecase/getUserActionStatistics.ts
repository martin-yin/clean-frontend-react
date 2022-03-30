import { IMessage } from '@/code/base/message'
import { useWebMessageServicec } from '@/code/service/web-message-service'
import { UserActionStatisticListModel } from '../model/userModel'
import { userWebRepository } from '../repositories/userWebRepository'

export const getUserActionStatisticsUseCase = async (params: {
  session_id: string
}): Promise<UserActionStatisticListModel> => {
  const message: IMessage = useWebMessageServicec()
  const { getUserActionStatisticList } = userWebRepository()
  const { data, code, msg } = await getUserActionStatisticList(params)
  if (code == 200) {
    return data as UserActionStatisticListModel
  } else {
    message.error(msg)
    return [] as unknown as UserActionStatisticListModel
  }
}
