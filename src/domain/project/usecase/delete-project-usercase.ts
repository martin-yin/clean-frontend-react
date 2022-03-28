import { IMessage } from '@/code/base/message'
import { useWebMessageServicec } from '@/code/service/web-message-service'
import { ProjectWebRepository } from '../repositories/project-web-repository'

export const deleteProjectUseCase = async (id: number) => {
  const message: IMessage = useWebMessageServicec()

  const { code, msg } = await ProjectWebRepository.deleteProject(id)
  if (code === 200) {
    message.success('删除成功！')
  } else {
    message.error(msg)
    return false
  }
}
