import React from 'react'
import {
  PageOperationIcon,
  PageLoadIcon,
  PageNetworkIcon,
  PageViewIcon,
  PageResourceIcon,
  PageJsErrorIcon
} from '../assets'
import { UserActionModel, UserActionQuota, UserActionQuotaType } from '../domain/user/model/user.model'

const EMPTY = (): UserActionQuota => {
  return {
    icon: (): React.ReactNode => {
      return <></>
    },
    title: '',
    content: ``
  }
}

const UserActionQuotaRender = (img: string, title: string, content: string): UserActionQuota => {
  return {
    icon: (): React.ReactNode => {
      return <img className="action_time_line_image" src={img} />
    },
    title,
    content
  }
}

const UserActionQuotaList: UserActionQuotaType = {
  PERFORMANCE: (item: UserActionModel) =>
    UserActionQuotaRender(PageLoadIcon, '页面浏览', `页面URL: ${item.actionDetail.pageUrl}`),
  HTTP_LOG: (item: UserActionModel) =>
    UserActionQuotaRender(PageNetworkIcon, 'HTTP请求', `请求URL: ${item.actionDetail.httpUrl}`),
  JS_ERROR: (item: UserActionModel) =>
    UserActionQuotaRender(PageJsErrorIcon, `异常信息 ${1}`, `异常页面: ${item.actionDetail.pageUrl}`),
  RESOURCE_ERROR: (item: UserActionModel) =>
    UserActionQuotaRender(
      PageResourceIcon,
      `资源加载异常${item.actionDetail.elementType}`,
      `资源URL: ${item.actionDetail.sourceUrl}`
    ),
  OPERATION: (item: UserActionModel) =>
    UserActionQuotaRender(PageOperationIcon, '点击事件', `页面URL: ${item.actionDetail.pageUrl}`),
  PAGE_VIEW: (item: UserActionModel) =>
    UserActionQuotaRender(PageViewIcon, '页面浏览', `页面URL: ${item.actionDetail.pageUrl}`),
  EMPTY
}

export const UseActionQuotaListProxy: UserActionQuotaType = new Proxy(UserActionQuotaList, {
  get(target, phrase: string) {
    if (phrase in target) {
      return Reflect.get(target, phrase)
    } else {
      return Reflect.get(target, 'EMPTY')
    }
  }
})
