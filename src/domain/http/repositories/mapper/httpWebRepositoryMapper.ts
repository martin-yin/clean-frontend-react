import { toUpperCaseData } from '@/code/lib/request'
import { HttpListEntity, HttpQuotaEntity, HttpStageTimeListEntity } from '../../model/httpEntity'
import { HttpListModel, HttpQuotaModel, HttpStageTimeListModel } from '../../model/httpModel'

export function httpWebRepositoryMapper() {
  const mapFromtHttpListModel = (param: HttpListEntity): HttpListModel => {
    return param.map(item => toUpperCaseData(item))
  }
  const mapFromtHttpQuotaModel = (param: HttpQuotaEntity): HttpQuotaModel => {
    return toUpperCaseData(param)
  }
  const mapFromHttpStageTimeListModel = (param: HttpStageTimeListEntity): HttpStageTimeListModel => {
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
  return { mapFromtHttpListModel, mapFromtHttpQuotaModel, mapFromHttpStageTimeListModel }
}
