import { UserActionModel } from '@/domain/user/model/userModel'
import { Timeline } from 'antd'
import React from 'react'
import { useUserContext } from '../provider/userProvider'
import UserActionTimeLineItem from './userActionTimeLineItem'
interface UserActionListTimelineProps {
  handleActiveAction: (value: UserActionModel) => void
}

const UserActionListTimeline = React.memo<UserActionListTimelineProps>(({ handleActiveAction }) => {
  const { userActionList } = useUserContext()

  return (
    <Timeline>
      {userActionList &&
        userActionList.actionList.map((item, key: number) => {
          return <UserActionTimeLineItem handleActiveAction={handleActiveAction} key={key} item={item} />
        })}
    </Timeline>
  )
})

export default UserActionListTimeline
