import { IMessage } from '../../../code/base/message'
import { useWebMessageServicec } from '../../../code/service/web-message-service'
import { teamWebRepository } from '../repositories/team-web-repository'

export const getTeamListUseCase = async () => {
  const message: IMessage = useWebMessageServicec()
  const { data, code, msg } = await teamWebRepository.getTeamList()
  if (code == 200) {
    return data
  } else {
    message.error(msg)
    return []
  }
}
