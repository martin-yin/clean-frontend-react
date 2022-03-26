import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { UserActionListModel } from '../model/user.model'
import { getUserActionListUseCase } from '../usecase/get-user-action-list'

export const useGetUserActionListAdapter = () => {
  const [userActionList, setUserActionList] = useState<UserActionListModel>()
  const params = useParams<'user_id' | 'session_id'>()

  const initSessionBehaviorTrace = useCallback(async page => {
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

  useEffect(() => {
    initSessionBehaviorTrace(1)
  }, [params])

  const onPageChange = useCallback(async (page: number) => {
    setUserActionList({
      ...(userActionList as UserActionListModel)
    })
    initSessionBehaviorTrace(page)
  }, [])

  return { userActionList, onPageChange }
}
