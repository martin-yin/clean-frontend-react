import {
  UserActionDetail,
  UserActionListModel,
  UserActionModel,
  UserActionStatisticListModel,
  UserModel
} from '@/domain/user/model/userModel'
import React, { createContext, useContext, useMemo, useState } from 'react'

const defaultUserData = {
  user: null,
  userActionStatisticList: [],
  userActionList: {
    total: 0,
    actionList: []
  },
  activeId: '',
  userAction: {} as UserActionModel['actionDetail']
}

export interface UserProviderState {
  user: UserModel
  userActionList: UserActionListModel
  activeId: string
  userActionStatisticList: UserActionStatisticListModel
  userAction: UserActionModel['actionDetail']
  updateUser: (value: UserModel) => void
  updateActiveId: (value: string) => void
  updateUserActionStatisticList: (value: UserActionStatisticListModel) => void
  updateUserAction: (value: UserActionDetail) => void
  updateUserActionList: (value: UserActionListModel) => void
}

export const UserContext = createContext<UserProviderState>({
  user: defaultUserData.user,
  userActionList: defaultUserData.userActionList,
  activeId: defaultUserData.activeId,
  userActionStatisticList: defaultUserData.userActionStatisticList,
  userAction: defaultUserData.userAction,
  updateUser(value: UserModel): void {
    throw new Error('UserContext not yet initialized.')
  },
  updateActiveId(value: string): void {
    throw new Error('UserContext not yet initialized.')
  },
  updateUserActionStatisticList(value: UserActionStatisticListModel) {
    throw new Error('UserContext not yet initialized.')
  },
  updateUserAction(value: UserActionDetail) {
    throw new Error('UserContext not yet initialized.')
  },
  updateUserActionList(value: UserActionListModel) {
    throw new Error('UserContext not yet initialized.')
  }
})

export const useUserContext = () => {
  const value = useContext(UserContext)
  return value
}

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState<UserModel>()
  const [activeId, setActiveId] = useState<string>()
  const [userAction, setUserAction] = useState<UserActionDetail>({} as UserActionDetail)
  const [userActionStatisticList, setUserActionStatisticList] = useState<UserActionStatisticListModel>()
  const [userActionList, setUserActionList] = useState<UserActionListModel>()

  const value = useMemo(
    () => ({
      user,
      userActionStatisticList,
      userActionList,
      activeId,
      userAction,
      updateUser: setUser,
      updateUserActionStatisticList: setUserActionStatisticList,
      updateUserAction: setUserAction,
      updateUserActionList: setUserActionList,
      updateActiveId: setActiveId
    }),
    [
      user,
      userActionStatisticList,
      userAction,
      activeId,
      userActionList,
      setUser,
      setUserActionStatisticList,
      setUserAction,
      setUserActionList,
      setActiveId
    ]
  )

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
