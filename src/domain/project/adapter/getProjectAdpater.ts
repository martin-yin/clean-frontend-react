import { useCallback, useEffect, useState } from 'react'
import { ProjectModel } from '../model/projectModel'
import { deleteProjectUseCase } from '../usecase/deleteProjectUsercase'
import { getProjectUseCase } from '../usecase/getProjectUsercase'

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
