import { useFilterHeaderContext } from '@/features/filterHeader/hook/useFilterHeaderInit'
import { useEffect, useState } from 'react'
import { ResourceErrorListModel, ResourceErrorQuotaModel } from '../model/resource.error.model'
import { getResourceErrorList } from '../usecase/get-resource-error-list-usecase'

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
      const data = await getResourceErrorList(filterHeaderParams)
      setResourceErrorData(data)
    })()
  }, [])

  return { resourceErrorData }
}
