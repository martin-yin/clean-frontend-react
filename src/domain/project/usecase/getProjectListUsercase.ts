import { IMessage } from '@/code/base/message'
import { useWebMessageServicec } from '@/code/service/web-message-service'
import { projectWebRepositoryMapper } from '../repositories/mapper/projectWebRepositoryMapper'
import { projectWebRepository } from '../repositories/projectWebRepository'

export const getProjectListUseCase = async () => {
  const message: IMessage = useWebMessageServicec()
  const { mapFromProjectModel } = projectWebRepositoryMapper()
  const { getProjects } = projectWebRepository()

  const { data, code, msg } = await getProjects()
  if (code === 200) {
    return data.map(item => mapFromProjectModel(item))
  } else {
    message.error(msg)
    return []
  }
}
