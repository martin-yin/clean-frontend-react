import { IMessage } from '@/code/base/message'
import { useWebMessageServicec } from '@/code/service/web-message-service'
import { TeamWebRepositoryMapper } from '../repositories/mapper/team-web-repository.mapper'
import { teamWebRepository } from '../repositories/team-web-repository'

export const getTeamListUseCase = async () => {
  const message: IMessage = useWebMessageServicec()
  const { mapFromTeamModel } = TeamWebRepositoryMapper()
  const { data, code, msg } = await teamWebRepository.getTeamList()
  if (code == 200) {
    return data.map(item => mapFromTeamModel(item))
  } else {
    message.error(msg)
    return []
  }
}
