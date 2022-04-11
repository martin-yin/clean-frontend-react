import { GetJsErrorListUseCase } from '@/domain/jserror/application/getJsErrorListUsecase'
import { JsErrorListModel } from '@/domain/jserror/model/jsErrorModel'
import { useFilterHeaderContext } from '@/features/filterHeader/hook/useFilterHeaderInit'
import { useEffect, useState } from 'react'
import { container } from 'tsyringe'

export const useGetJsErrorListAdapter = () => {
  const { filterHeaderParams } = useFilterHeaderContext()
  const [jsErrorList, setJsErrorList] = useState<JsErrorListModel>()

  const usecase = container.resolve(GetJsErrorListUseCase)

  useEffect(() => {
    ;(async () => {
      const data = await usecase.execute(filterHeaderParams)
      setJsErrorList(data)
    })()
  }, [filterHeaderParams])

  return { jsErrorList }
}
