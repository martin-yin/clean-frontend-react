import { useFormValidateFields } from '@/code/lib/toolhook'
import { CreateProjectParams } from '../model/projectModel'
import { createProjectUseCase } from '../usecase/createProjectUsercase'

export const useCreateProjectAdapter = (form: any) => {
  const formValidateFields = useFormValidateFields(form)
  const createProject = () => {
    formValidateFields(async (params: CreateProjectParams) => {
      await createProjectUseCase(params)
    })
  }
  return { createProject }
}
