import { useFormValidateFields } from '@/utils/toolhook'
import { CreateProjectParams } from '../model/project.model'
import { createProjectUseCase } from '../usecase/create-project-usercase'

export const useCreateProjectAdapter = (form: any) => {
  const formValidateFields = useFormValidateFields(form)
  const createProject = () => {
    formValidateFields(async (params: CreateProjectParams) => {
      await createProjectUseCase(params)
    })
  }
  return { createProject }
}
