import { UserActionDetailBase } from '../../../domain/user/model/user.entity'
import { UserActionModel } from '../../../domain/user/model/user.model'

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

export type UserActionQuotaType = Record<UserActionKey, (item: UserActionModel) => UserActionQuota>

export interface UserActionQuota {
  icon: React.ReactNode
  title: string
  content: string
}
