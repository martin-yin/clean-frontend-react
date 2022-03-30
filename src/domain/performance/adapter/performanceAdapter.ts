import { useFilterHeaderContext } from '@/features/filterHeader/hook/useFilterHeaderInit'
import { useEffect, useState } from 'react'
import { PerformanceListModel, PerformanceQuotaModel } from '../model/performanceModel'
import { getPerformanceStackUseCase } from '../usercase/getPerformanceStackUsercase'
import { getPerformancPageListUseCase } from '../usercase/getPerformancPageListUsercase'
import { getPerformancQuotaUseCase } from '../usercase/getPerformancQuotaUsercase'
import { getPerformanceStageTimeListUseCase } from '../usercase/getPerformancStageTimeListUsercase'

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
