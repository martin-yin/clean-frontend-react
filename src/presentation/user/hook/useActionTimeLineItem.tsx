import { useEffect, useState } from 'react'
import { UserActionModel } from '@/domain/user/model/userModel'
import { UseActionQuotaListProxy } from './useActionQuotaProxy'

export const useActionTimeLineItem = (item: UserActionModel) => {
  const [timeLine, setTimeLine] = useState({
    itemIcon: () => {
      return <></>
    },
    itemTitle: '',
    itemContent: ''
  })

  useEffect(() => {
    ;(async () => {
      const { icon, title, content } = formatIcon(item)
      setTimeLine({
        itemIcon: icon,
        itemTitle: content,
        itemContent: title
      })
    })()
  }, [item])

  const formatIcon = (item: UserActionModel) => {
    const action_detail = Reflect.has(item, 'actionDetail')
    if (action_detail) {
      return UseActionQuotaListProxy[item.actionType](item.actionDetail)
    }
    return UseActionQuotaListProxy['EMPTY'](item.actionDetail)
  }

  return timeLine
}
