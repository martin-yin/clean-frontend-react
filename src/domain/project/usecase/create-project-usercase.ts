import { message } from 'antd'
import { CreateProjectParams } from '../model/project.model'
import { ProjectWebRepository } from '../repositories/project-web-repository'

export const CreateProjectUseCase = (formValidateFields: any) => {
  const createProject = async (): Promise<any> => {
    formValidateFields(async (value: CreateProjectParams) => {
      const { data, code, msg } = await ProjectWebRepository.createProject(value)
      if (code === 200) {
        message.success('创建成功!')
        return data
      } else {
        message.error(msg)
      }
    })
  }

  return createProject
}
