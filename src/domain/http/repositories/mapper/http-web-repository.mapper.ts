import { toUpperCaseData } from '@/utils/request'
import { HttpListEntity, HttpQuotaEntity, HttpStageTimeListEntity } from '../../model/http.entity'
import { HttpListModel, HttpQuotaModel, HttpStageTimeListModel } from '../../model/http.model'

export const PerformanceWebRepositoryMapper = () => {
  return {
    mapFromtHttpList(param: HttpListEntity): HttpListModel {
      return param.map(item => toUpperCaseData(item))
    },
    mapFromtHttpQuota(param: HttpQuotaEntity): HttpQuotaModel {
      return toUpperCaseData(param)
    },
    mapFromHttpStageTimeList(param: HttpStageTimeListEntity): HttpStageTimeListModel {
      const total = []
      const timeConsumes = []
      param.map(item => {
        total.push({
          time: item.time_key,
          value: item.total,
          type: '请求数量'
        })
        timeConsumes.push(
          ...[
            {
              time: item.time_key,
              count: item.load_time,
              name: '请求耗时'
            }
          ]
        )
      })
      return { total, timeConsumes }
    }
  }
}
