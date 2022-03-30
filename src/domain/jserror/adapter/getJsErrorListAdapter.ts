import { useFilterHeaderContext } from '@/features/filterHeader/hook/useFilterHeaderInit'
import { useEffect, useState } from 'react'
import { JsErrorListModel } from '../model/jsErrorModel'
import { getJsErrorListUseCase } from '../usecase/getJsErrorListUsecase'

export const useGetJsErrorListAdapter = () => {
  const { filterHeaderParams } = useFilterHeaderContext()
  const [jsErrorList, setJsErrorList] = useState<JsErrorListModel>()

  useEffect(() => {
    ;(async () => {
      const data = await getJsErrorListUseCase(filterHeaderParams)
      setJsErrorList(data)
    })()
  }, [filterHeaderParams])

  return { jsErrorList }
}
