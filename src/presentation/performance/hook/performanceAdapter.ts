import { getPerformanceStackUseCase } from '@/domain/performance/application/getPerformanceStackUsercase'
import { getPerformancPageListUseCase } from '@/domain/performance/application/getPerformancPageListUsercase'
import { getPerformancQuotaUseCase } from '@/domain/performance/application/getPerformancQuotaUsercase'
import { getPerformanceStageTimeListUseCase } from '@/domain/performance/application/getPerformancStageTimeListUsercase'
import { PerformanceListModel, PerformanceQuotaModel } from '@/domain/performance/model/performanceModel'
import { useFilterHeaderContext } from '@/features/filterHeader/hook/useFilterHeaderInit'
import { useEffect, useState } from 'react'

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
      const stackConsumes = await getPerformanceStackUseCase(filterHeaderParams)
      setStackConsumes(stackConsumes)
      const performanceConsumes = await getPerformanceStageTimeListUseCase(filterHeaderParams)
      setPerformanceConsumes(performanceConsumes)
      const quota = await getPerformancQuotaUseCase(filterHeaderParams)
      setQuota(quota)
      const performances = await getPerformancPageListUseCase(filterHeaderParams)
      setPerformances(performances)
    })()
  }, [filterHeaderParams])

  return { quota, stackConsumes, performanceConsumes, performances }
}
