import { useJsErrContext } from '@/presentation/jsErr/hook/useJsErrDetail'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getJsErrorUseCase } from '../usecase/get-js-error-usecase'

export const useGetJsErrorAdapter = () => {
  const { jsError, updateJsError, updateStackFrameList } = useJsErrContext()
  const params = useParams<'error_id'>()
  useEffect(() => {
    ;(async () => {
      const data = await getJsErrorUseCase({ error_id: params.error_id, issue_id: '' })
      updateJsError(data)
      updateStackFrameList(data.stackFrames as any)
    })()
  }, [params.error_id])

  return { jsError }
}
