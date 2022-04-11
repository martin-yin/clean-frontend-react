import { CasedProperties } from '@/infrastructure/interface'
import { toUpperCaseData } from '@/infrastructure/lib'
import {
  PerformanceListEntity,
  PerformanceQuotaEntity,
  PerformanceStackEntity,
  PerformanceStageTimeListEntity
} from '../../../model/performanceEntity'
import { PerformanceListModel, PerformanceQuotaModel } from '../../../model/performanceModel'

export abstract class PerformanceRepositoryMapper {
  abstract mapFromPerformancPageListModel(params: PerformanceListEntity): PerformanceListModel
  abstract mapFromPerformanceStackModel(params: PerformanceStackEntity)
  abstract mapFromPerformancQuotaModel(params: PerformanceQuotaEntity): PerformanceQuotaModel
  abstract mapFromPerformanceStageTimeListModel(params: PerformanceStageTimeListEntity)
}

export class PerformanceWebRepositoryMapper implements PerformanceRepositoryMapper {
  mapFromPerformancPageListModel(params: PerformanceListEntity): PerformanceListModel {
    return params.map(item => toUpperCaseData(item))
  }
  mapFromPerformanceStackModel(params: PerformanceStackEntity) {
    return [
      {
        title: '',
        value: params.redirect,
        type: '重定向耗时(redirect)'
      },
      {
        title: '',
        value: params.appcache,
        type: '缓存查询耗时(appcache)'
      },
      {
        title: '',
        value: params.lookup_domain,
        type: 'DNS查询耗时(lookup_domain)'
      },
      {
        title: '',
        value: params.tcp,
        type: 'TCP耗时(tcp)'
      },
      {
        title: '',
        value: params.ttfb,
        type: '首字节(TTFB)'
      },
      {
        title: '',
        value: params.request,
        type: '请求耗时(request)'
      },
      {
        title: '',
        value: params.dom_parse,
        type: 'dom处理耗时(dom_parse)'
      },
      {
        title: '',
        value: params.load_event,
        type: 'dom事件(load_event)'
      }
    ]
  }
  mapFromPerformancQuotaModel(params: PerformanceQuotaEntity): CasedProperties<PerformanceQuotaEntity> {
    return toUpperCaseData(params)
  }
  mapFromPerformanceStageTimeListModel(params: PerformanceStageTimeListEntity) {
    const pv = []
    const timeConsumes = []
    params.map(item => {
      pv.push({
        time: item.time_key,
        value: item.pv,
        type: '采样pv'
      })
      timeConsumes.push(
        ...[
          {
            time: item.time_key,
            count: item.redirect,
            name: '重定向'
          },
          {
            time: item.time_key,
            count: item.lookup_domain,
            name: 'DNS查询耗时'
          },
          {
            time: item.time_key,
            count: item.appcache,
            name: '缓存查询耗时'
          },
          {
            time: item.time_key,
            count: item.tcp,
            name: 'TCP耗时'
          },
          {
            time: item.time_key,
            count: item.ssl_t,
            name: 'SSL连接耗时'
          },
          {
            time: item.time_key,
            count: item.ttfb,
            name: '首字节'
          },
          {
            time: item.time_key,
            count: item.request,
            name: '请求耗时'
          },
          {
            time: item.time_key,
            count: item.dom_parse,
            name: 'DOM处理'
          },
          {
            time: item.time_key,
            count: item.load_event,
            name: 'Event耗时'
          },
          {
            time: item.time_key,
            count: item.load_page,
            name: '完全加载'
          }
        ]
      )
    })

    return { pv, timeConsumes }
  }
}
