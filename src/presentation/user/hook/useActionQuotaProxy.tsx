import React from 'react'
import {
  PageJsErrorIcon,
  PageLoadIcon,
  PageNetworkIcon,
  PageOperationIcon,
  PageResourceIcon,
  PageViewIcon
} from '@/assets'
import {
  UserActionHtppLog,
  UserActionJsError,
  UserActionOperAtion,
  UserActionPageLoad,
  UserActionResourceError
} from '@/domain/user/model/user.model'
import { UserActionQuota, UserActionQuotaType } from '../interface'

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
  PERFORMANCE: (item: UserActionPageLoad) =>
    UserActionQuotaRender(PageLoadIcon, '页面浏览', `页面URL: ${item.pageUrl}`),
  HTTP_LOG: (item: UserActionHtppLog) => UserActionQuotaRender(PageNetworkIcon, 'HTTP请求', `请求URL: ${item.httpUrl}`),
  JS_ERROR: (item: UserActionJsError) => {
    return UserActionQuotaRender(PageJsErrorIcon, `${item.message}`, `页面URL:${item.pageUrl}`)
  },
  RESOURCE_ERROR: (item: UserActionResourceError) =>
    UserActionQuotaRender(PageResourceIcon, `资源加载异常: ${item.elementType}`, `资源URL: ${item.sourceUrl}`),
  OPERATION: (item: UserActionOperAtion) =>
    UserActionQuotaRender(PageOperationIcon, '点击事件', `页面URL: ${item.pageUrl}`),
  PAGE_VIEW: (item: UserActionPageLoad) => UserActionQuotaRender(PageViewIcon, '页面浏览', `页面URL: ${item.pageUrl}`),
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
