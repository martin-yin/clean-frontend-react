import { IMessage } from '../../../code/base/message'
import { IStorage } from '../../../code/base/storage '
import { useWebMessageServicec } from '../../../code/service/web-message-service'
import { useWebStorage } from '../../../code/service/web-storage-service'
import { ProjectWebRepository } from '../repositories/project-web-repository'

export const GetProjectListUseCase = () => {
  const message: IMessage = useWebMessageServicec()
  const storage: IStorage = useWebStorage()

  const projectList = async () => {
    const { data, code, msg } = await ProjectWebRepository.getProjects()
    if (code === 200) {
      const monitorId = storage.getItem('monitorId') ? storage.getItem('monitorId') : data[0]?.monitorId
      return { monitorId, data }
    } else {
      message.error(msg)
      return { monitorId: 0, data: [] }
    }
  }

  return projectList
}
