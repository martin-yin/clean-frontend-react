import { IResponse } from '../../../utils/request'
import { UserActionDetailBase, UserActionEntity, UserActionStatisticListEntity, UserEntity } from './user.entity'

const userActionKey = [
  'PERFORMANCE',
  'HTTP_LOG',
  'JS_ERROR',
  'RESOURCE_ERROR',
  'OPERATION',
  'PAGE_VIEW',
  'EMPTY'
] as const
export type UserActionKey = typeof userActionKey[number]

export type PAGE_LOAD = 'load_type'
export type HTTP_LOGIF = 'http_url' | 'request_text' | 'response_text'
export type RESOURCE = 'element_type' | 'source_url'
export type OPERATIONIF = 'tag_name' | 'inner_text' | 'class_name'

export type UserActionDetail = Readonly<
  Record<'status', number> &
    Record<PAGE_LOAD | HTTP_LOGIF | 'page_url' | 'message' | RESOURCE | OPERATIONIF, string> &
    UserActionDetailBase
>

export type UserActionType = Record<UserActionKey, (detail: UserActionDetail) => JSX.Element>

export interface UserActionQuota {
  icon: React.ReactNode
  title: string
  content: string
}

export interface UserActionbb {
  action_type: string
  // js 异常
  message?: string
  session_id?: string
  action_detail: string | any
  // 资源异常
  element_type?: string
  source_url?: string
  // 点击事件
  innter_text?: string
  // http请求
  http_url?: string
  // 页面加载
  page_url?: string
  action_id?: string
  happen_time: string
}

export type UserActionModel = CasedProperties<
  Omit<UserActionEntity, 'action_detail'> & {
    action_detail: CasedProperties<{
      actionType: string
      // js 异常
      message?: string
      session_id?: string
      action_detail: string | any
      // 资源异常
      element_type?: string
      source_url?: string
      // 点击事件
      innter_text?: string
      // http请求
      http_url?: string
      // 页面加载
      page_url?: string
      action_id?: string
      happen_time: string
    }>
  }
>

export type UserActionQuotaType = Record<UserActionKey, (item: UserActionModel) => UserActionQuota>

export type CasedProperties<T> = {
  [K in keyof T as UnderScoreCaseToCamelCase<K>]: T[K]
}

type UnderScoreCaseToCamelCase<S> = S extends `${infer StartChar}_${infer EndChar}`
  ? `${StartChar}${Capitalize<EndChar>}`
  : any

export interface GetUserListParams {
  startTime: string
  endTime: string
  sessionId: string
  userId: string
}

export type UserModel = CasedProperties<UserEntity>

export type UserListModel = Array<UserModel>

export type UserActionStatisticListModel = UserActionStatisticListEntity

export interface UserActionListModel {
  total: number
  actionList: Array<UserActionModel>
}
