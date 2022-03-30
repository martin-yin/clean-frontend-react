import { IMessage } from '@/code/base/message'
import { useWebMessageServicec } from '@/code/service/web-message-service'
import { projectWebRepositoryMapper } from '../repositories/mapper/projectWebRepositoryMapper'
import { projectWebRepository } from '../repositories/projectWebRepository'

export const getProjectStatusListUseCase = async () => {
  const message: IMessage = useWebMessageServicec()
  const { mapFromProjectStatusModel } = projectWebRepositoryMapper()
  const { getProjectStatusList } = projectWebRepository()
  const { data, code, msg } = await getProjectStatusList()
  if (code === 200) {
    return data.map(item => mapFromProjectStatusModel(item))
  } else {
    message.error(msg)
    return []
  }
}
