import { getResourceErrorListUseCase } from '@/domain/resource/application/getResourceErrorListUsecase'
import { ResourceErrorListModel, ResourceErrorQuotaModel } from '@/domain/resource/model/resourceErrorModel'
import { useFilterHeaderContext } from '@/features/filterHeader/hook/useFilterHeaderInit'
import { useEffect, useState } from 'react'

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
