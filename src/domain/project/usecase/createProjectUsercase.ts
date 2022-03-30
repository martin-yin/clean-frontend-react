import { IMessage } from '@/code/base/message'
import { useWebMessageServicec } from '@/code/service/web-message-service'
import { CreateProjectParams } from '../model/projectModel'
import { projectWebRepository } from '../repositories/projectWebRepository'

export const createProjectUseCase = async (param: CreateProjectParams) => {
  const message: IMessage = useWebMessageServicec()

  const { createProject } = projectWebRepository()
  const { data, code, msg } = await createProject(param)
  if (code === 200) {
    message.success('创建成功!')
    return data
  } else {
    message.error(msg)
    return null
  }
}
