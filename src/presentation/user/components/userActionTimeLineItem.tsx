import { Timeline } from 'antd'
import React, { FC } from 'react'
import { useGetUserActionListAdapter } from '@/domain/user/adapter/get-user-action-list-adapter'
import { UserActionModel } from '@/domain/user/model/user.model'
import { getTimeHHMM } from '@/utils'
import { useActionTimeLineItem } from '../hook/useActionTimeLineItem'

interface UserActionTimeLineItemItemProps {
  key: number
  item: UserActionModel
}

const userActionTimeLineItem: FC<UserActionTimeLineItemItemProps> = ({ key, item }) => {
  const { activeId, handleActiveAction } = useGetUserActionListAdapter()
  const timeLine = useActionTimeLineItem(item)

  return (
    <>
      <Timeline.Item key={key} dot={timeLine.itemIcon()}>
        <div
          className={`footprint__des ${activeId == item.happenTime + item.actionType ? 'active__footprint_des' : ''}`}
          onClick={() => handleActiveAction(item)}
        >
          <div className="flex">
            <div className="flex-1">
              <p className="over-hidde">{timeLine.itemTitle}</p>
            </div>
            <div className="flex-0 flex-item">{getTimeHHMM(item.happenTime)}</div>
          </div>
          <div>{timeLine.itemContent}</div>
        </div>
      </Timeline.Item>
    </>
  )
}

export default userActionTimeLineItem
