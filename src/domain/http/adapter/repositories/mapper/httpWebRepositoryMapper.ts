import { toUpperCaseData } from '@/infrastructure/lib'
import { HttpListEntity, HttpQuotaEntity, HttpStageTimeListEntity } from '../../../model/httpEntity'
import { HttpListModel, HttpQuotaModel, HttpStageTimeListModel } from '../../../model/httpModel'

export abstract class HttpRepositoryMapper {
  abstract mapFromtHttpListModel(params: HttpListEntity): HttpListModel
  abstract mapFromtHttpQuotaModel(params: HttpQuotaEntity): HttpQuotaModel
  abstract mapFromHttpStageTimeListModel(params: HttpStageTimeListEntity): HttpStageTimeListModel
}

// Todo: 替换成load hash
export class HttpWebRepositoryMapper implements HttpRepositoryMapper {
  mapFromtHttpListModel(params: HttpListEntity): HttpListModel {
    return params.map(item => toUpperCaseData(item))
  }
  mapFromtHttpQuotaModel(params: HttpQuotaEntity): HttpQuotaModel {
    return toUpperCaseData(params)
  }
  mapFromHttpStageTimeListModel(params: HttpStageTimeListEntity): HttpStageTimeListModel {
    const total = []
    const timeConsumes = []
    params.map(item => {
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
