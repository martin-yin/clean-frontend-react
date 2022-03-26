import { UserActionEntity, UserActionStatisticListEntity, UserEntity } from './user.entity'

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
