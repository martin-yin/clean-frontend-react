import { IMessage } from '../../../code/base/message'
import { useWebMessageServicec } from '../../../code/service/web-message-service'
import { ProjectWebRepositoryMapper } from '../repositories/mapper/project-web-repository.mapper'
import { ProjectWebRepository } from '../repositories/project-web-repository'

export const getProjectStatusListUseCase = async () => {
  const message: IMessage = useWebMessageServicec()
  const mapper = new ProjectWebRepositoryMapper()
  const { data, code, msg } = await ProjectWebRepository.getProjectStatusList()
  if (code === 200) {
    return data.map(item => mapper.mapFromProjectHealthyModel(item))
  } else {
    message.error(msg)
    return []
  }
}
