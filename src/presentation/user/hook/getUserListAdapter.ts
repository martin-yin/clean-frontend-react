import { useEffect, useState } from 'react'
import { useFilterHeaderContext } from '@/features/filterHeader/hook/useFilterHeaderInit'
import { getUserListUseCase } from '../../application/getUserListUsecase'
import { UserListModel } from '../../model/userModel'

export const useGetUserListAdapter = () => {
  const { filterHeaderParams } = useFilterHeaderContext()
  const [userList, setUserList] = useState<UserListModel>([])
  useEffect(() => {
    ;(async () => {
      const data = await getUserListUseCase(filterHeaderParams)
      setUserList(data)
    })()
  }, [filterHeaderParams])

  return { userList }
}
