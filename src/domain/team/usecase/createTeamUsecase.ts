import { IMessage } from '@/code/base/message'
import { useWebMessageServicec } from '@/code/service/web-message-service'
import { CreateTeamParams } from '../model/teamModel'
import { teamWebRepository } from '../repositories/teamWebRepository'

export async function createTeamUseCase(params: CreateTeamParams) {
  const message: IMessage = useWebMessageServicec()
  const { createTeam } = teamWebRepository()
  const { data, code, msg } = await createTeam(params)
  if (code == 200) {
    return data
  } else {
    message.error(msg)
    return null
  }
}
