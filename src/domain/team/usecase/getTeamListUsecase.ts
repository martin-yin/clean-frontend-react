import { IMessage } from '@/code/base/message'
import { useWebMessageServicec } from '@/code/service/web-message-service'
import { teamWebRepositoryMapper } from '../repositories/mapper/teamWebRepositoryMapper'
import { teamWebRepository } from '../repositories/teamWebRepository'

export async function getTeamListUseCase() {
  const message: IMessage = useWebMessageServicec()
  const { mapFromTeamModel } = teamWebRepositoryMapper()
  const { getTeamList } = teamWebRepository()
  const { data, code, msg } = await getTeamList()
  if (code == 200) {
    return data.map(item => mapFromTeamModel(item))
  } else {
    message.error(msg)
    return []
  }
}
