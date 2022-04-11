import { getJsErrorListUseCase } from '@/domain/jserror/application/getJsErrorListUsecase'
import { JsErrorListModel } from '@/domain/jserror/model/jsErrorModel'
import { useFilterHeaderContext } from '@/features/filterHeader/hook/useFilterHeaderInit'
import { useEffect, useState } from 'react'

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
