import { useEffect } from 'react'
import { useAppState } from '../../../stores'
import { setMenuKeys } from '../../../stores/app.store'
import { useHookTools } from '../../../utils/toolhook'

export const userSiderMenuInit = () => {
  const { storeDispatch } = useHookTools()
  const { menuKeys } = useAppState(state => state.appsotre)
  useEffect(() => {}, [])
  const menuClick = (item: any) => {
    if (Array.isArray(item.keyPath)) {
      storeDispatch(
        setMenuKeys({
          selectKeys: Array.of(item.keyPath[0]),
          openKeys: Array.of(item.keyPath[1])
        })
      )
    }
  }

  const onOpenChange = (openKeys: any) => {
    storeDispatch(
      setMenuKeys({
        ...menuKeys,
        openKeys
      })
    )
  }

  return { menuClick, onOpenChange, menuKeys }
}
