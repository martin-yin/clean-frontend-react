import { GetProjectStatusListUseCase } from '@/domain/project/application/getProjectStatusListUsercase'
import { useEffect, useState } from 'react'
import { container } from 'tsyringe'
import { ProjectStatusModel } from '../../../domain/project/model/projectModel'

export const useGetProjectStatusListAdapter = () => {
  const [projectStatusList, setProjectStatusList] = useState<Array<ProjectStatusModel>>([])
  const usecase = container.resolve(GetProjectStatusListUseCase)
  useEffect(() => {
    ;(async () => {
      const data = await usecase.execute()
      setProjectStatusList(data)
    })()
  }, [])

  return { projectStatusList }
}
