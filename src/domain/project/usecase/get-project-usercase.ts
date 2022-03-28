import { IMessage } from '@/code/base/message'
import { useWebMessageServicec } from '@/code/service/web-message-service'
import { ProjectWebRepositoryMapper } from '../repositories/mapper/project-web-repository.mapper'
import { ProjectWebRepository } from '../repositories/project-web-repository'

export const getProjectUseCase = async () => {
  const message: IMessage = useWebMessageServicec()
  const { mapFromProjectModel } = ProjectWebRepositoryMapper()
  const { data, code, msg } = await ProjectWebRepository.getProject()
  if (code === 200) {
    return mapFromProjectModel(data)
  } else {
    message.error(msg)
    return null
  }
}
