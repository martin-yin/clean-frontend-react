import { useEffect, useState } from 'react'
import { ProjectStatusModel } from '../model/projectModel'
import { getProjectStatusListUseCase } from '../usecase/getProjectStatusListUsercase'

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
