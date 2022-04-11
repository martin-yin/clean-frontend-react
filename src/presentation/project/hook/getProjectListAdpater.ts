import { GetProjectListUseCase } from '@/domain/project/application/getProjectListUsercase'
import { useHookTools } from '@/infrastructure/lib/toolhook'
import { useAppState } from '@/stores'
import { setMonitorId, setMonitorIdAndProject } from '@/stores/app.store'
import { useEffect } from 'react'
import { container } from 'tsyringe'

export const useGetProjectListAdapter = () => {
  const { projectList } = useAppState(state => state.appsotre)
  const { navigate, storeDispatch } = useHookTools()
  const usecase = container.resolve(GetProjectListUseCase)
  // const storage = useWebStorage()

  useEffect(() => {
    ;(async () => {
      if (projectList.length === 0) {
        const data = await usecase.execute()
        // const monitorId = storage.getItem('monitorId') ? storage.getItem('monitorId') : data[0]?.monitorId
        const monitorId = data[0]?.monitorId
        storeDispatch(
          setMonitorIdAndProject({
            monitorId,
            data
          })
        )
      }
    })()
  }, [])

  const setActiveMonitorId = (value: string) => {
    storeDispatch(setMonitorId(value))
    navigate('/user')
  }

  return { setActiveMonitorId }
}
