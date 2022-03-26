import { IMessage } from '../../../code/base/message'
import { useWebMessageServicec } from '../../../code/service/web-message-service'
import { CreateProjectParams } from '../model/project.model'
import { ProjectWebRepositoryMapper } from '../repositories/mapper/project-web-repository.mapper'
import { ProjectWebRepository } from '../repositories/project-web-repository'

export const createProjectUseCase = async (param: CreateProjectParams) => {
  const message: IMessage = useWebMessageServicec()
  const { data, code, msg } = await ProjectWebRepository.createProject(param)
  if (code === 200) {
    message.success('创建成功!')
    return data
  } else {
    message.error(msg)
    return null
  }
}
