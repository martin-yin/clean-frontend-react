import { useFilterHeaderContext } from '@/features/filterHeader/hook/useFilterHeaderInit'
import { useEffect, useState } from 'react'
import { JsErrorListModel } from '../model/js-error.model'
import { getJsErrorListUseCase } from '../usecase/get-js-error-list-usecase'

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
