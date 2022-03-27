import { Timeline } from 'antd'
import React from 'react'
import { useGetUserActionListAdapter } from '../../../domain/user/adapter/get-user-action-list-adapter'
import { UserActionModel } from '../../../domain/user/model/user.model'
import BehaviorTimeLineItem from './userActionTimeLineItem'
interface BehaviorTimeLineProps {
  activeId: string
  list: Array<UserActionModel> | undefined
  activeBehavior: (item: UserActionModel) => void
}

const UserActionListTimeline = React.memo(() => {
  const { userActionList } = useGetUserActionListAdapter()
  return (
    <Timeline>
      {userActionList &&
        userActionList.actionList.map((item, key: number) => {
          return <BehaviorTimeLineItem key={key} item={item} />
        })}
    </Timeline>
  )
})

export default UserActionListTimeline
