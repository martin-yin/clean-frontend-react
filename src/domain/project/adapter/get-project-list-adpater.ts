import { useEffect, useState } from 'react'
import { useWebStorage } from '../../../code/service/web-storage-service'
import { useAppState } from '../../../stores'
import { setMonitorId, setMonitorIdAndProject } from '../../../stores/app.store'
import { useHookTools } from '../../../utils/toolhook'
import { getProjectListUseCase } from '../usecase/get-project-list-usercase'

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
