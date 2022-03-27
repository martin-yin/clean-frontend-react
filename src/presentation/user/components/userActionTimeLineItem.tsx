import { Timeline } from 'antd'
import React, { FC, useEffect, useState } from 'react'
import { useGetUserActionListAdapter } from '../../../domain/user/adapter/get-user-action-list-adapter'
import { UserActionModel } from '../../../domain/user/model/user.model'
import { getTimeHHMM } from '../../../utils'
import { UseActionQuotaListProxy } from '../hook/useActionQuotaProxy'

interface UserActionTimeLineItemItemProps {
  key: number
  item: UserActionModel
}

const userActionTimeLineItem: FC<UserActionTimeLineItemItemProps> = ({ key, item }) => {
  const { activeId, handleActiveAction } = useGetUserActionListAdapter()

  const [itemData, setItemData] = useState({
    itemIcon: () => {
      return <></>
    },
    itemTitle: '',
    itemContent: ''
  })

  useEffect(() => {
    ;(async () => {
      const { icon, title, content } = transformationAction(item)
      setItemData({
        itemIcon: icon,
        itemTitle: content,
        itemContent: title
      })
      transformationAction(item)
    })()
  }, [item])

  const transformationAction = (item: UserActionModel) => {
    const action_detail = Reflect.has(item, 'actionDetail')
    if (action_detail) {
      return UseActionQuotaListProxy[item.actionType](item)
    } else {
      return UseActionQuotaListProxy['EMPTY'](item)
    }
  }

  return (
    <>
      <Timeline.Item key={key} dot={itemData.itemIcon()}>
        <div
          className={`footprint__des ${activeId == item.happenTime + item.actionType ? 'active__footprint_des' : ''}`}
          onClick={() => handleActiveAction(item)}
        >
          <div className="flex">
            <div className="flex-1">
              <p className="over-hidde">{itemData.itemTitle}</p>
            </div>
            <div className="flex-0 flex-item">{getTimeHHMM(item.happenTime)}</div>
          </div>
          <div>{itemData.itemContent}</div>
        </div>
      </Timeline.Item>
    </>
  )
}

export default userActionTimeLineItem
