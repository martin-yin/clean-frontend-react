import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useUserContext } from '@/presentation/user/provider/userProvider'
import { container } from 'tsyringe'
import { GetUserUseCase } from '@/domain/user/application/getUserUsecase'
import { GetUserActionStatisticsUseCase } from '@/domain/user/application/getUserActionStatisticsUsercase'

export const getUserAdpter = () => {
  const params = useParams<'user_id' | 'session_id'>()
  const { user, userActionStatisticList, updateUser, updateUserActionStatisticList } = useUserContext()
  const getUserUseCase = container.resolve(GetUserUseCase)
  const getUserActionStatisticsUseCase = container.resolve(GetUserActionStatisticsUseCase)

  useEffect(() => {
    ;(async () => {
      const user = await getUserUseCase.execute(params.user_id as string)
      const userActionStatistics = await getUserActionStatisticsUseCase.execute({
        session_id: params.session_id as string
      })
      updateUserActionStatisticList(userActionStatistics)
      updateUser(user)
    })()
  }, [params])

  return { user, userActionStatisticList }
}
