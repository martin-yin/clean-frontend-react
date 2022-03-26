import { Timeline } from 'antd'
import React, { FC, useEffect, useState } from 'react'
import { UserActionModel } from '../../../domain/user/model/user.model'
import { getTimeHHMM } from '../../../utils'
import { UseActionQuotaListProxy } from '../../../utils/useActionQuotaProxy'

interface BehaviorTimeLineItemProps {
  key: number
  item: UserActionModel
  activeBehavior: (item: any) => void
  activeId: string
}

const BehaviorTimeLineItem: FC<BehaviorTimeLineItemProps> = ({ key, item, activeBehavior, activeId }) => {
  console.log(item.actionDetail, '+=======')
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
          onClick={() => activeBehavior(item)}
        >
          <div className="flex">
            <div className="flex-grow-1">
              <p className="over-hidde">{itemData.itemTitle}</p>
            </div>
            <div className="flex-grow-0 flex-item">{getTimeHHMM(item.happenTime)}</div>
          </div>
          <div>{itemData.itemContent}</div>
        </div>
      </Timeline.Item>
    </>
  )
}

export default BehaviorTimeLineItem
