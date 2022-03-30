import { useFilterHeaderContext } from '@/features/filterHeader/hook/useFilterHeaderInit'
import { useEffect, useState } from 'react'
import { HttpListModel } from '../model/httpModel'
import { getHttpErrListUseCase } from '../usecase/getHttpErrListUsecase'

export const useHttpErrAdapter = () => {
  const { filterHeaderParams } = useFilterHeaderContext()
  const [httpErrList, setHttpErrList] = useState<HttpListModel>([])

  useEffect(() => {
    ;(async () => {
      const data = await getHttpErrListUseCase(filterHeaderParams)
      setHttpErrList(data)
    })()
  }, [filterHeaderParams])

  return {
    httpErrList
  }
}
