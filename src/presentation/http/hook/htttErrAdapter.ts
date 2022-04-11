import { GetHttpErrListUseCase } from '@/domain/http/application/getHttpErrListUsecase'
import { HttpListModel } from '@/domain/http/model/httpModel'
import { useFilterHeaderContext } from '@/features/filterHeader/hook/useFilterHeaderInit'
import { useEffect, useState } from 'react'
import { container } from 'tsyringe'

export const useHttpErrAdapter = () => {
  const { filterHeaderParams } = useFilterHeaderContext()
  const [httpErrList, setHttpErrList] = useState<HttpListModel>([])

  useEffect(() => {
    ;(async () => {
      const data = await container.resolve(GetHttpErrListUseCase).execute(filterHeaderParams)
      setHttpErrList(data)
    })()
  }, [filterHeaderParams])

  return {
    httpErrList
  }
}
