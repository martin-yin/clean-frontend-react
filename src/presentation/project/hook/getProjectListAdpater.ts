import { useHookTools } from '@/code/lib/toolhook'
import { useWebStorage } from '@/code/service/webStorageService'
import { getProjectListUseCase } from '@/domain/project/application/getProjectListUsercase'
import { useAppState } from '@/stores'
import { setMonitorId, setMonitorIdAndProject } from '@/stores/app.store'
import { useEffect } from 'react'

export const useGetProjectListAdapter = () => {
  const { projectList } = useAppState(state => state.appsotre)
  const { navigate, storeDispatch } = useHookTools()
  const storage = useWebStorage()

  useEffect(() => {
    ;(async () => {
      if (projectList.length === 0) {
        const data = await getProjectListUseCase()
        const monitorId = storage.getItem('monitorId') ? storage.getItem('monitorId') : data[0]?.monitorId
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
