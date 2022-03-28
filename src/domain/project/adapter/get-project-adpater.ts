import { useCallback, useEffect, useState } from 'react'
import { ProjectModel } from '../model/project.model'
import { deleteProjectUseCase } from '../usecase/delete-project-usercase'
import { getProjectUseCase } from '../usecase/get-project-usercase'

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
