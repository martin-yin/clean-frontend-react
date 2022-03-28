import { useFilterHeaderContext } from '@/features/filterHeader/hook/useFilterHeaderInit'
import { useEffect, useState } from 'react'
import { PerformanceListModel, PerformanceQuotaModel } from '../model/performance.model'
import { GetPerformancPageListUseCase } from '../usercase/get-performanc-page-list-usercase'
import { GetPerformancQuotaUseCase } from '../usercase/get-performanc-quota-usercase'
import { GetPerformanceStageTimeListUseCase } from '../usercase/get-performanc-stage-time-list-usercase'
import { GetPerformanceStackUseCase } from '../usercase/get-performance-stack-usercase'

export const usePerformanceAdapter = () => {
  const [quota, setQuota] = useState<PerformanceQuotaModel>()
  const { filterHeaderParams } = useFilterHeaderContext()
  const [stackConsumes, setStackConsumes] = useState<any>([])
  const [performances, setPerformances] = useState<PerformanceListModel>([])
  const [performanceConsumes, setPerformanceConsumes] = useState<{
    pv: Array<{
      time: string
      value: number
      type: string
    }>
    timeConsumes: Array<{
      time: string
      count: number
      name: string
    }>
  }>({
    pv: [],
    timeConsumes: []
  })

  useEffect(() => {
    ;(async () => {
      const stackConsumes = await GetPerformanceStackUseCase(filterHeaderParams)
      setStackConsumes(stackConsumes)
      const performanceConsumes = await GetPerformanceStageTimeListUseCase(filterHeaderParams)
      setPerformanceConsumes(performanceConsumes)
      const quota = await GetPerformancQuotaUseCase(filterHeaderParams)
      setQuota(quota)
      const performances = await GetPerformancPageListUseCase(filterHeaderParams)
      setPerformances(performances)
    })()
  }, [filterHeaderParams])

  return { quota, stackConsumes, performanceConsumes, performances }
}
