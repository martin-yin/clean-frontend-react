import { UserActionDetail } from '@/domain/user/model/userModel'

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

export type UserActionType = Record<UserActionKey, (detail: UserActionDetail) => JSX.Element>

export type UserActionQuotaType = Record<UserActionKey, (item: UserActionDetail) => UserActionQuota>

export interface UserActionQuota {
  icon: React.ReactNode
  title: string
  content: string
}
