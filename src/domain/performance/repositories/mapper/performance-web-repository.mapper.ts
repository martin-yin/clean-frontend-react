import { toUpperCaseData } from '@/utils/request'
import {
  PerformanceListEntity,
  PerformanceQuotaEntity,
  PerformanceStackEntity,
  PerformanceStageTimeListEntity
} from '../../model/performance.entity'
import { PerformanceListModel, PerformanceQuotaModel } from '../../model/performance.model'

export const PerformanceWebRepositoryMapper = () => {
  return {
    mapFromPerformancPageList(param: PerformanceListEntity): PerformanceListModel {
      return param.map(item => toUpperCaseData(item)) as unknown as PerformanceListModel
    },
    mapFromPerformanceStack(param: PerformanceStackEntity) {
      return [
        {
          title: '',
          value: param.redirect,
          type: '重定向耗时(redirect)'
        },
        {
          title: '',
          value: param.appcache,
          type: '缓存查询耗时(appcache)'
        },
        {
          title: '',
          value: param.lookup_domain,
          type: 'DNS查询耗时(lookup_domain)'
        },
        {
          title: '',
          value: param.tcp,
          type: 'TCP耗时(tcp)'
        },
        {
          title: '',
          value: param.ttfb,
          type: '首字节(TTFB)'
        },
        {
          title: '',
          value: param.request,
          type: '请求耗时(request)'
        },
        {
          title: '',
          value: param.dom_parse,
          type: 'dom处理耗时(dom_parse)'
        },
        {
          title: '',
          value: param.load_event,
          type: 'dom事件(load_event)'
        }
      ]
    },
    mapFromPerformancQuota(param: PerformanceQuotaEntity): PerformanceQuotaModel {
      return toUpperCaseData(param)
    },
    mapFromPerformanceStageTimeList(param: PerformanceStageTimeListEntity): any {
      const pv = []
      const timeConsumes = []
      param.map(item => {
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
}
