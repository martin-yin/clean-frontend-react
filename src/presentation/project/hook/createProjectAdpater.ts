import { CreateProjectUseCase } from '@/domain/project/application/createProjectUsercase'
import { CreateProjectParams } from '@/domain/project/model/projectModel'
import { useFormValidateFields } from '@/infrastructure/lib/toolhook'
import { container } from 'tsyringe'

export const useCreateProjectAdapter = (form: any) => {
  const usecase = container.resolve(CreateProjectUseCase)
  const formValidateFields = useFormValidateFields(form)
  const createProject = () => {
    formValidateFields(async (params: CreateProjectParams) => {
      const data = await usecase.execute(params)
    })
  }
  return { createProject }
}
