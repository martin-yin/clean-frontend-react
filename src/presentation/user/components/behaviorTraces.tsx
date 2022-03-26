import { Timeline } from 'antd'
import React from 'react'
import { UserActionModel, UserModel } from '../../../domain/user/model/user.model'
import BehaviorTimeLineItem from './behaviorTimeLineItem'
interface BehaviorTimeLineProps {
  activeId: string
  list: Array<UserActionModel> | undefined
  activeBehavior: (item: UserModel) => void
}

const BehaviorTimeLine = React.memo<BehaviorTimeLineProps>(({ list, activeId, activeBehavior }) => {
  return (
    <Timeline>
      {list &&
        list.map((item, key: number) => {
          return <BehaviorTimeLineItem activeId={activeId} activeBehavior={activeBehavior} key={key} item={item} />
        })}
    </Timeline>
  )
})

export default BehaviorTimeLine
