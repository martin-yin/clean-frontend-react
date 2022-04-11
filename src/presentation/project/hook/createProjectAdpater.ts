import { useFormValidateFields } from '@/code/lib/toolhook'
import { createProjectUseCase } from '@/domain/project/application/createProjectUsercase'
import { CreateProjectParams } from '@/domain/project/model/projectModel'

export const useCreateProjectAdapter = (form: any) => {
  const formValidateFields = useFormValidateFields(form)
  const createProject = () => {
    formValidateFields(async (params: CreateProjectParams) => {
      await createProjectUseCase(params)
    })
  }
  return { createProject }
}
