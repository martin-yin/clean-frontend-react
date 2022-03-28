import { useCallback, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useUserContext } from '@/presentation/user/provider/userProvider'
import { UserActionListModel, UserActionModel } from '../model/user.model'
import { getUserActionListUseCase } from '../usecase/get-user-action-list'

export const useGetUserActionListAdapter = () => {
  const { userActionList, updateUserActionList, activeId, updateUserAction, updateActiveId } = useUserContext()
  const params = useParams<'user_id' | 'session_id'>()

  const initUserActionList = useCallback(async page => {
    const { total, actionList } = await getUserActionListUseCase({
      session_id: params.session_id as string,
      page: page,
      limit: 3
    })
    updateUserActionList({
      total,
      actionList
    })
  }, [])

  useEffect(() => {
    initUserActionList(1)
  }, [params])

  const handlePageChange = useCallback(async (page: number) => {
    updateUserActionList({
      ...(userActionList as UserActionListModel)
    })
    initUserActionList(page)
  }, [])

  const handleActiveAction = useCallback((item: UserActionModel) => {
    updateActiveId(`${item.happenTime}${item.actionType}`)
    updateUserAction(item.actionDetail as any)
  }, [])

  return { userActionList, activeId, handlePageChange, handleActiveAction }
}
