import { getProjectStatusListUseCase } from '@/domain/project/application/getProjectStatusListUsercase'
import { useEffect, useState } from 'react'
import { ProjectStatusModel } from '../../../domain/project/model/projectModel'

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
