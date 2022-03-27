import { UserActionDetailBase, UserActionEntity, UserActionStatisticListEntity, UserEntity } from './user.entity'

export type UserActionModel = CasedProperties<
  Omit<UserActionEntity, 'action_detail'> & {
    action_detail: UserActionDetail
  }
>

export type UserActionDetail =
  | UserActionPageLoad
  | UserActionHtppLog
  | UserActionResourceError
  | UserActionJsError
  | UserActionOperAtion

export type CasedProperties<T> = {
  [K in keyof T as UnderScoreCaseToCamelCase<K>]: T[K]
}
// 用于转换数组
// export type CasedPropertiesArray<T extends any[]> = T extends [] ? CasedPropertiesArray<T[number]> : CasedProperties<T>

type UnderScoreCaseToCamelCase<S> = S extends `${infer StartChar}_${infer EndChar}`
  ? `${StartChar}${Capitalize<EndChar>}`
  : S

export interface GetUserListParams {
  startTime: string
  endTime: string
  sessionId: string
  userId: string
}

export type UserModel = CasedProperties<UserEntity>

export type UserListModel = Array<UserModel>

export type UserActionStatisticListModel = CasedProperties<UserActionStatisticListEntity>

export interface UserActionListModel {
  total: number
  actionList: Array<UserActionModel>
}

export type PAGE_LOAD = 'load_type' | 'page_url'
export type HTTP_LOG = 'http_url' | 'request_text' | 'response_text'
export type RESOURCEERROR = 'element_type' | 'source_url'
export type OPERATION = 'tag_name' | 'inner_text' | 'class_name'
export type JS_ERROR = 'messsage'

// 页面加载
export type UserActionPageLoad = CasedProperties<Record<PAGE_LOAD, string> & UserActionDetailBase>
export type UserActionHtppLog = CasedProperties<
  Record<HTTP_LOG, string> & Record<'status', number> & UserActionDetailBase
>
export type UserActionResourceError = CasedProperties<Record<RESOURCEERROR, string> & UserActionDetailBase>
export type UserActionJsError = CasedProperties<Record<JS_ERROR, string> & UserActionDetailBase>
export type UserActionOperAtion = CasedProperties<Record<OPERATION, string> & UserActionDetailBase>
