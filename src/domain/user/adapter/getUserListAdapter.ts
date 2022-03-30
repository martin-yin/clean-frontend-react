import { useEffect, useState } from 'react'
import { useFilterHeaderContext } from '@/features/filterHeader/hook/useFilterHeaderInit'
import { UserListModel } from '../model/user.model'
import { getUserListUseCase } from '../usecase/get-user-list-usecase'

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
