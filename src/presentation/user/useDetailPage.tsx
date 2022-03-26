import React, { FC } from 'react'
import { Card, Pagination } from 'antd'
import './index.less'

import UserSessionSurvey from './components/userSessionSurvey'
import BehaviorTimeLine from './components/behaviorTraces'
import { useGetUserActionListAdapter } from '../../domain/user/adapter/get-user-action-list-adapter'
import BehaviorDetail from './components/behaviorDetail'

const UserActionPage: FC = () => {
  const { userActionList } = useGetUserActionListAdapter()
  return (
    <div className="user__detail_page">
      <UserSessionSurvey />
      <Card title="行为追踪">
        <div className="flex">
          <div className="flex-1 time_lines_warp">
            <BehaviorTimeLine list={userActionList?.actionList} activeId={''} activeBehavior={() => {}} />
          </div>
          <div className="flex-grow-1 time_line_detail_warp">
            <BehaviorDetail detail={{}} />
          </div>
        </div>
        <div className="pagination">
          {/* <Pagination onChange={onPageChange} pageSize={3} total={behaviorTraces.total} /> */}
        </div>
      </Card>
    </div>
  )
}

export default UserActionPage
