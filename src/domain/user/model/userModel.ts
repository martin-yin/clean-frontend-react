import { CasedProperties } from '@/code/interface'
import { UserActionDetailBase, UserActionEntity, UserActionStatisticListEntity, UserEntity } from './userEntity'

export type UserActionModel = CasedProperties<
  Omit<UserActionEntity, 'action_detail'> & {
    actionDetail: UserActionDetail
  }
>

export type UserActionDetail =
  | UserActionPageLoad
  | UserActionHtppLog
  | UserActionResourceError
  | UserActionJsError
  | UserActionOperAtion

export interface GetUserListParams {
  startTime: string
  endTime: string
  sessionId: string
  userId: string
}

export type UserModel = CasedProperties<UserEntity> & {
  osInfo: string
  address: string
  browserInfo: string
  deviceInfo: string
}

export type UserListModel = Array<UserModel>

export type UserActionStatisticListModel = CasedProperties<UserActionStatisticListEntity>

export interface UserActionListModel {
  total: number
  actionList: Array<UserActionModel>
}

export type PAGE_LOAD = 'load_type' | 'page_url'
export type HTTP_LOG = 'http_url' | 'request_text' | 'response_text' | 'page_url'
export type RESOURCEERROR = 'element_type' | 'source_url' | 'page_url'
export type OPERATION = 'tag_name' | 'inner_text' | 'class_name' | 'page_url'
export type JS_ERROR = 'message' | 'page_url'

// 页面加载
export type UserActionPageLoad = CasedProperties<Record<PAGE_LOAD, string> & UserActionDetailBase>
export type UserActionHtppLog = CasedProperties<
  Record<HTTP_LOG, string> & Record<'status', number> & UserActionDetailBase
>
export type UserActionResourceError = CasedProperties<Record<RESOURCEERROR, string> & UserActionDetailBase>
export type UserActionJsError = CasedProperties<Record<JS_ERROR, string> & UserActionDetailBase>
export type UserActionOperAtion = CasedProperties<Record<OPERATION, string> & UserActionDetailBase>
