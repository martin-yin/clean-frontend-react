import { useEffect, useState } from 'react'
import { useFilterHeaderContext } from '@/features/filterHeader/hook/useFilterHeaderInit'
import { UserListModel } from '@/domain/user/model/userModel'
import { container } from 'tsyringe'
import { GetUserListUseCase } from '@/domain/user/application/getUserListUsecase'

export const useGetUserListAdapter = () => {
  const usecase = container.resolve(GetUserListUseCase)
  const { filterHeaderParams } = useFilterHeaderContext()
  const [userList, setUserList] = useState<UserListModel>([])
  useEffect(() => {
    ;(async () => {
      const data = await usecase.execute(filterHeaderParams)
      setUserList(data)
    })()
  }, [filterHeaderParams])

  return { userList }
}
