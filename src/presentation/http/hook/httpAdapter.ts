import { GetHttpListUseCase } from '@/domain/http/application/getHttpListUsecase'
import { GetHttpQuotaUseCase } from '@/domain/http/application/getHttpQuotaUsecase'
import { GetHttpStageUseCase } from '@/domain/http/application/getHttpStageUsecase'
import { HttpListModel, HttpQuotaModel, HttpStageTimeListModel } from '@/domain/http/model/httpModel'
import { useFilterHeaderContext } from '@/features/filterHeader/hook/useFilterHeaderInit'
import { useEffect, useState } from 'react'
import { container } from 'tsyringe'

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
      const httpStageTimeList = await container.resolve(GetHttpStageUseCase).execute(filterHeaderParams)
      const httpList = await container.resolve(GetHttpListUseCase).execute(filterHeaderParams)
      const quota = await container.resolve(GetHttpQuotaUseCase).execute(filterHeaderParams)
      setHttpStageTimeList(httpStageTimeList)
      setHttpList(httpList)
      setHttpQuota(quota)
    })()
  }, [filterHeaderParams])

  return { httpQuota, httpList, httpStageTimeList }
}
