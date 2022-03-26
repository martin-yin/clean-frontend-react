import { IMessage } from '../../../code/base/message'
import { useWebMessageServicec } from '../../../code/service/web-message-service'
import { CreateTeamParams } from '../model/team.model'
import { teamWebRepository } from '../repositories/team-web-repository'

export const createTeamUseCase = async (params: CreateTeamParams) => {
  const message: IMessage = useWebMessageServicec()
  const { data, code, msg } = await teamWebRepository.createTeam(params)
  if (code == 200) {
    return data
  } else {
    message.error(msg)
    return null
  }
}
