import { IMessage } from '@/code/base/message'
import { useWebMessageServicec } from '@/code/service/web-message-service'
import { ProjectWebRepositoryMapper } from '../repositories/mapper/project-web-repository.mapper'
import { ProjectWebRepository } from '../repositories/project-web-repository'

export const getProjectListUseCase = async () => {
  const message: IMessage = useWebMessageServicec()
  const mapper = new ProjectWebRepositoryMapper()

  const { data, code, msg } = await ProjectWebRepository.getProjects()
  if (code === 200) {
    return data.map(item => mapper.mapFrom(item))
  } else {
    message.error(msg)
    return []
  }
}
