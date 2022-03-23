import { useEffect } from 'react'
import { InjectFactoryGet } from '../../../code/decorator'
import { setMonitorId, setMonitorIdAndProject } from '../../../stores/app.store'
import { useHookTools } from '../../../utils/toolhook'
import { ProjectModel } from '../model/project.model'
import { GetProjectListUseCase } from '../usecase/get-project-list-usercase'

export const navMenuAdapter = (projects: Array<ProjectModel>) => {
  const { navigate, storeDispatch } = useHookTools()
  const getProjectList = InjectFactoryGet<GetProjectListUseCase>(GetProjectListUseCase)
  useEffect(() => {
    ;(async () => {
      if (projects.length === 0) {
        const { monitorId, projectList } = await getProjectList.execute()
        storeDispatch(
          setMonitorIdAndProject({
            monitorId,
            projectList
          })
        )
      }
    })()
  }, [])

  const setActiveMonitorId = (value: string) => {
    storeDispatch(setMonitorId(value))
    navigate('/user')
  }

  return setActiveMonitorId
}
