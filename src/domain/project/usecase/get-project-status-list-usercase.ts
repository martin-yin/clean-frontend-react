import { IMessage } from '../../../code/base/message'
import { useWebMessageServicec } from '../../../code/service/web-message-service'
import { ProjectWebRepository } from '../repositories/project-web-repository'

export const GetProjectStatusListUseCase = () => {
  const message: IMessage = useWebMessageServicec()

  const getProjectStatusList = async () => {
    const { data, code, msg } = await ProjectWebRepository.getProjectStatusList()
    if (code === 200) {
      return data
    } else {
      message.error(msg)
      return []
    }
  }

  return getProjectStatusList
}
