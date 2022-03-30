import { IMessage } from '@/code/base/message'
import { useWebMessageServicec } from '@/code/service/web-message-service'
import { projectWebRepository } from '../repositories/projectWebRepository'

export const deleteProjectUseCase = async (id: number) => {
  const message: IMessage = useWebMessageServicec()
  const { deleteProject } = projectWebRepository()
  const { code, msg } = await deleteProject(id)
  if (code === 200) {
    message.success('删除成功！')
  } else {
    message.error(msg)
    return false
  }
}
