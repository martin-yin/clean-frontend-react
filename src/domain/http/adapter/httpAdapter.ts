import { useFilterHeaderContext } from '@/features/filterHeader/hook/useFilterHeaderInit'
import { useEffect, useState } from 'react'
import { HttpListModel, HttpQuotaModel, HttpStageTimeListModel } from '../model/httpModel'
import { getHttpListUseCase } from '../usecase/getHttpListUsecase'
import { getHttpQuotaUseCase } from '../usecase/getHttpQuotaUsecase'
import { getHttpStageUseCase } from '../usecase/getHttpStageUsecase'

export const useHttpAdapter = () => {
  const { filterHeaderParams } = useFilterHeaderContext()

  const [httpQuota, setHttpQuota] = useState<HttpQuotaModel>({
    errorUser: 0,
    loadTime: 0,
    successTotal: 0,
    total: 0,
    successRate: ''
  })
  const [httpList, setHttpList] = useState<HttpListModel>([])
  const [httpStageTimeList, setHttpStageTimeList] = useState<HttpStageTimeListModel>({
    total: [],
    timeConsumes: []
  })

  useEffect(() => {
    ;(async () => {
      const httpStageTimeList = await getHttpStageUseCase(filterHeaderParams)
      setHttpStageTimeList(httpStageTimeList)
      const httpList = await getHttpListUseCase(filterHeaderParams)
      setHttpList(httpList)
      const quota = await getHttpQuotaUseCase(filterHeaderParams)
      setHttpQuota(quota)
    })()
  }, [filterHeaderParams])

  return { httpQuota, httpList, httpStageTimeList }
}
