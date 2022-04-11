import { DeleteProjectUseCase } from '@/domain/project/application/deleteProjectUsercase'
import { GetProjectUseCase } from '@/domain/project/application/getProjectUsercase'
import { ProjectModel } from '@/domain/project/model/projectModel'
import { useCallback, useEffect, useState } from 'react'
import { container } from 'tsyringe'

export const useGetProjectAdapter = () => {
  const [project, setProject] = useState<ProjectModel>()

  const usecase = container.resolve(GetProjectUseCase)
  useEffect(() => {
    ;(async () => {
      const data = await usecase.execute()
      setProject(data)
    })()
  }, [])

  const handleDeleteProject = useCallback(async (id: number) => {
    const usecase = container.resolve(DeleteProjectUseCase)
    await usecase.execute(id)
  }, [])

  return { project, handleDeleteProject }
}
