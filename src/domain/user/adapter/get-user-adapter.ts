import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { UserActionStatisticListModel, UserModel } from '../model/user.model'
import { getUserActionStatisticsUseCase } from '../usecase/get-user-action-statistics'
import { getUserUseCase } from '../usecase/get-user-usecase'

export const getUserAdpter = () => {
  const [user, setUser] = useState<UserModel>()

  const [userActionStatisticList, setUserActionStatisticList] = useState<UserActionStatisticListModel>()
  const params = useParams<'user_id' | 'session_id'>()

  useEffect(() => {
    ;(async () => {
      const user = await getUserUseCase(params.user_id as string)
      const userActionStatistics = await getUserActionStatisticsUseCase({ session_id: params.session_id as string })
      setUserActionStatisticList(userActionStatistics)
      setUser(user)
    })()
  }, [params])

  return { user, userActionStatisticList }
}
