import { useFilterHeaderContext } from '@/features/filterHeader/hook/useFilterHeaderInit'
import { useEffect, useState } from 'react'
import { ResourceErrorListModel, ResourceErrorQuotaModel } from '../model/resourceErrorModel'
import { getResourceErrorListUseCase } from '../usecase/getResourceErrorListUsecase'

export const useGetResourceErrorListAdapter = () => {
  const { filterHeaderParams } = useFilterHeaderContext()
  const [resourceErrorData, setResourceErrorData] = useState<{
    quota: ResourceErrorQuotaModel
    resourceList: ResourceErrorListModel
  }>({
    quota: null,
    resourceList: []
  })

  useEffect(() => {
    ;(async () => {
      const data = await getResourceErrorListUseCase(filterHeaderParams)
      setResourceErrorData(data)
    })()
  }, [])

  return { resourceErrorData }
}
