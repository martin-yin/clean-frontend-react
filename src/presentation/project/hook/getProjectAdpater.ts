import { deleteProjectUseCase } from '@/domain/project/application/deleteProjectUsercase'
import { getProjectUseCase } from '@/domain/project/application/getProjectUsercase'
import { useCallback, useEffect, useState } from 'react'
import { ProjectModel } from '../../../domain/project/model/projectModel'

export const useGetProjectAdapter = () => {
  const [project, setProject] = useState<ProjectModel>()
  useEffect(() => {
    ;(async () => {
      const data = await getProjectUseCase()
      setProject(data)
    })()
  }, [])

  const handleDeleteProject = useCallback(async (id: number) => {
    await deleteProjectUseCase(id)
  }, [])

  return { project, handleDeleteProject }
}
