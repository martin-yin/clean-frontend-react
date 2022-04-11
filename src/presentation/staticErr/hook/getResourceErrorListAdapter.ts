import { GetResourceErrorListUseCase } from '@/domain/resource/application/getResourceErrorListUsecase'
import { ResourceErrorListModel, ResourceErrorQuotaModel } from '@/domain/resource/model/resourceErrorModel'
import { useFilterHeaderContext } from '@/features/filterHeader/hook/useFilterHeaderInit'
import { useEffect, useState } from 'react'
import { container } from 'tsyringe'

export const useGetResourceErrorListAdapter = () => {
  const { filterHeaderParams } = useFilterHeaderContext()
  const [resourceErrorData, setResourceErrorData] = useState<{
    quota: ResourceErrorQuotaModel
    resourceList: ResourceErrorListModel
  }>({
    quota: null,
    resourceList: []
  })
  const usecase = container.resolve(GetResourceErrorListUseCase)
  useEffect(() => {
    ;(async () => {
      const data = await usecase.execute(filterHeaderParams)
      setResourceErrorData(data)
    })()
  }, [])

  return { resourceErrorData }
}
