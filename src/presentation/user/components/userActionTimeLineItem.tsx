import { Timeline } from 'antd'
import React, { FC } from 'react'
import { UserActionModel } from '@/domain/user/model/userModel'
import { getTimeHHMM } from '@/infrastructure/lib'
import { useActionTimeLineItem } from '../hook/useActionTimeLineItem'
import { useUserContext } from '../provider/userProvider'

interface UserActionTimeLineItemItemProps {
  key: number
  item: UserActionModel
  handleActiveAction: (value: UserActionModel) => void
}

const UserActionTimeLineItem: FC<UserActionTimeLineItemItemProps> = ({ key, item, handleActiveAction }) => {
  const timeLine = useActionTimeLineItem(item)
  const { activeId } = useUserContext()
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

export default UserActionTimeLineItem
