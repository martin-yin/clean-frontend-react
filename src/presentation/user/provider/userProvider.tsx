import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { Params, useParams } from 'react-router-dom'
import {
  UserActionListModel,
  UserActionModel,
  UserActionStatisticListModel,
  UserModel
} from '../../../domain/user/model/user.model'
import { getUserActionListUseCase } from '../../../domain/user/usecase/get-user-action-list'
import { getUserActionStatisticsUseCase } from '../../../domain/user/usecase/get-user-action-statistics'
import { getUserUseCase } from '../../../domain/user/usecase/get-user-usecase'

const defaultUserData = {
  user: null,
  userActionStatisticList: [],
  userActionList: {
    total: 0,
    actionList: []
  },
  activeId: ''
}

export interface UserProviderState {
  user: UserModel
  userActionList: UserActionListModel
  activeId: string
  userActionStatisticList: UserActionStatisticListModel
  userAction: UserModel
  handlePageChange: (page: number) => void
  handleActiveAction: (item: UserModel) => void
}

export const UserContext = createContext<UserProviderState>({
  user: defaultUserData.user,
  userActionList: defaultUserData.userActionList,
  activeId: defaultUserData.activeId,
  userActionStatisticList: defaultUserData.userActionStatisticList,
  userAction: null,
  handlePageChange(page: number) {
    throw new Error('UserContext not yet initialized.')
  },
  handleActiveAction(item: UserModel) {
    throw new Error('UserContext not yet initialized.')
  }
})

export const useUserContext = () => {
  const value = useContext(UserContext)
  return value
}

export const UserProvider = ({ children }) => {
  const params = useParams<'user_id' | 'session_id'>()
  const [user, setUser] = useState<UserModel>()
  const [activeId, setActiveId] = useState<string>()
  const [userAction, setUserAction] = useState<UserModel>({} as UserModel)

  const [userActionStatisticList, setUserActionStatisticList] = useState<UserActionStatisticListModel>()
  const [userActionList, setUserActionList] = useState<UserActionListModel>()

  useEffect(() => {
    ;(async () => {
      const user = await getUserUseCase(params.user_id as string)
      const userActionStatistics = await getUserActionStatisticsUseCase({ session_id: params.session_id as string })
      setUserActionStatisticList(userActionStatistics)
      setUser(user)
      initUserActionList(1)
    })()
  }, [params])

  const initUserActionList = useCallback(async (page: number) => {
    const { total, actionList } = await getUserActionListUseCase({
      session_id: params.session_id as string,
      page: page,
      limit: 3
    })

    setUserActionList({
      total,
      actionList
    })
  }, [])

  const handlePageChange = useCallback(async (page: number) => {
    setUserActionList({
      ...(userActionList as UserActionListModel)
    })
    initUserActionList(page)
  }, [])

  const handleActiveAction = useCallback((item: UserModel) => {
    setActiveId(`${item.happenTime}${item.actionType}`)
    setUserAction(item.actionDetail as any)
  }, [])
  const value = useMemo(
    () => ({
      user,
      userActionStatisticList,
      userActionList,
      activeId,
      userAction,
      handlePageChange,
      handleActiveAction
    }),
    [user, userActionStatisticList, userAction, activeId, userActionList, handlePageChange, handleActiveAction]
  )

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
