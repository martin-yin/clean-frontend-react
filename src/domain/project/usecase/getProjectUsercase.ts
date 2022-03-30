import { IMessage } from '@/code/base/message'
import { useWebMessageServicec } from '@/code/service/web-message-service'
import { projectWebRepositoryMapper } from '../repositories/mapper/projectWebRepositoryMapper'
import { projectWebRepository } from '../repositories/projectWebRepository'

export const getProjectUseCase = async () => {
  const message: IMessage = useWebMessageServicec()
  const { mapFromProjectModel } = projectWebRepositoryMapper()
  const { getProject } = projectWebRepository()
  const { data, code, msg } = await getProject()
  if (code === 200) {
    return mapFromProjectModel(data)
  } else {
    message.error(msg)
    return null
  }
}
