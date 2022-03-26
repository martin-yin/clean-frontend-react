import React, { FC } from 'react'
import { Card, Pagination } from 'antd'
import './index.less'

import UserSessionSurvey from './components/userSessionSurvey'
import BehaviorTimeLine from './components/behaviorTraces'
import { useGetUserActionListAdapter } from '../../domain/user/adapter/get-user-action-list-adapter'
import BehaviorDetail from './components/behaviorDetail'
import { UserProvider, useUserContext } from './provider/userProvider'

const UserActionPage: FC = () => {
  const UserContextRender = () => {
    const {
      user,
      userActionStatisticList,
      userActionList,
      activeId,
      userAction,
      handlePageChange,
      handleActiveAction
    } = useUserContext()

    return (
      <>
        {userActionList && (
          <div className="user__detail_page">
            <UserSessionSurvey user={user} userActionStatisticList={userActionStatisticList} />
            <Card title="行为追踪">
              <div className="flex">
                <div className="flex-1 time_lines_warp">
                  <BehaviorTimeLine
                    list={userActionList?.actionList}
                    activeId={activeId}
                    activeBehavior={handleActiveAction}
                  />
                </div>
                <div className="flex-1 time_line_detail_warp">
                  <BehaviorDetail detail={userAction} />
                </div>
              </div>
              <div className="pagination">
                <Pagination onChange={handlePageChange} pageSize={3} total={userActionList.total} />
              </div>
            </Card>
          </div>
        )}
      </>
    )
  }

  return (
    <UserProvider>
      <UserContextRender />
    </UserProvider>
  )
}

export default UserActionPage
