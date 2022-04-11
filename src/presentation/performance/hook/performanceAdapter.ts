import { GetPerformanceStackUseCase } from '@/domain/performance/application/getPerformanceStackUsercase'
import { GetPerformancPageListUseCase } from '@/domain/performance/application/getPerformancPageListUsercase'
import { GetPerformancQuotaUseCase } from '@/domain/performance/application/getPerformancQuotaUsercase'
import { GetPerformanceStageTimeListUseCase } from '@/domain/performance/application/getPerformancStageTimeListUsercase'
import { PerformanceListModel, PerformanceQuotaModel } from '@/domain/performance/model/performanceModel'
import { useFilterHeaderContext } from '@/features/filterHeader/hook/useFilterHeaderInit'
import { useEffect, useState } from 'react'
import { container } from 'tsyringe'

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

  const getPerformanceStackUseCase = container.resolve(GetPerformanceStackUseCase)
  const getPerformanceStageTimeListUseCase = container.resolve(GetPerformanceStageTimeListUseCase)
  const getPerformancQuotaUseCase = container.resolve(GetPerformancQuotaUseCase)
  const getPerformancPageListUseCase = container.resolve(GetPerformancPageListUseCase)

  useEffect(() => {
    ;(async () => {
      const stackConsumes = await getPerformanceStackUseCase.execute(filterHeaderParams)
      setStackConsumes(stackConsumes)
      const performanceConsumes = await getPerformanceStageTimeListUseCase.execute(filterHeaderParams)
      setPerformanceConsumes(performanceConsumes)
      const quota = await getPerformancQuotaUseCase.execute(filterHeaderParams)
      setQuota(quota)
      const performances = await getPerformancPageListUseCase.execute(filterHeaderParams)
      setPerformances(performances)
    })()
  }, [filterHeaderParams])

  return { quota, stackConsumes, performanceConsumes, performances }
}
