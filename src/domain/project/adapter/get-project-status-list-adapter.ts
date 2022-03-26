import { useEffect, useState } from 'react'
import { ProjectStatusModel } from '../model/project.model'
import { getProjectStatusListUseCase } from '../usecase/get-project-status-list-usercase'

export const useGetProjectStatusListAdapter = () => {
  const [projectStatusList, setProjectStatusList] = useState<Array<ProjectStatusModel>>([])
  useEffect(() => {
    ;(async () => {
      const data = await getProjectStatusListUseCase()
      setProjectStatusList(data)
    })()
  }, [])

  return { projectStatusList }
}
