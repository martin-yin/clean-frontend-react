import { message } from 'antd'
import { useCallback } from 'react'
import { InjectFactoryGet } from '../../../code/decorator'
import { CreateProjectParams } from '../model/project.model'
import { CreateProjectUseCase } from '../usecase/create-project-usercase'
import { GetProjectListUseCase } from '../usecase/get-project-list-usercase'

export const createProjectAdpater = (formValidateFields: any) => {
  const createProjectUseCase = InjectFactoryGet<CreateProjectUseCase>(CreateProjectUseCase)
  const handleCreateProject = useCallback(async () => {
    formValidateFields(async (value: CreateProjectParams) => {
      const data = await createProjectUseCase.execute(value)
      if (data) {
        message.success('创建成功！')
      }
    })
  }, [])

  return {
    handleCreateProject
  }
}
