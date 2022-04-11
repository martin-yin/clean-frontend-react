import { useAppDispatch } from '@/stores'
import { FormInstance } from 'antd'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

export const useHookTools = () => {
  const navigate = useNavigate()
  const storeDispatch = useAppDispatch()
  return { navigate, storeDispatch }
}

export const useFormValidateFields = <T = any>(form: FormInstance<T>) => {
  const formValidateFields = useCallback((callback: (value: T) => void) => {
    form
      .validateFields()
      .then(async (value: T) => {
        callback(value)
      })
      .catch(info => {
        console.log('Validate Failed:', info)
      })
  }, [])

  return formValidateFields
}
