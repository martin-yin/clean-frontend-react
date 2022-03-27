import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useUserContext } from '../../../presentation/user/provider/userProvider'
import { getUserActionStatisticsUseCase } from '../usecase/get-user-action-statistics'
import { getUserUseCase } from '../usecase/get-user-usecase'

export const getUserAdpter = () => {
  const params = useParams<'user_id' | 'session_id'>()
  const { user, userActionStatisticList, updateUser, updateUserActionStatisticList } = useUserContext()

  useEffect(() => {
    ;(async () => {
      const user = await getUserUseCase(params.user_id as string)
      const userActionStatistics = await getUserActionStatisticsUseCase({ session_id: params.session_id as string })
      updateUserActionStatisticList(userActionStatistics)
      updateUser(user)
    })()
  }, [params])

  return { user, userActionStatisticList }
}
