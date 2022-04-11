import { useCallback, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useUserContext } from '@/presentation/user/provider/userProvider'
import { container } from 'tsyringe'
import { GetUserActionListUseCase } from '@/domain/user/application/getUserActionListUsercase'
import { UserActionListModel, UserActionModel } from '@/domain/user/model/userModel'

export const useGetUserActionListAdapter = () => {
  const { userActionList, updateUserActionList, activeId, updateUserAction, updateActiveId } = useUserContext()
  const params = useParams<'user_id' | 'session_id'>()

  const usecase = container.resolve(GetUserActionListUseCase)

  const initUserActionList = useCallback(async page => {
    const { total, actionList } = await usecase.execute({
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
