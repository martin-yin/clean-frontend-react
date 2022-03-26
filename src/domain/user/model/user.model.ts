import { IResponse } from '../../../utils/request'
import { UserEntity } from './user.entity'

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
