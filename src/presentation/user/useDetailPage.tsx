import React, { FC } from 'react'
import { Card, Pagination } from 'antd'
import './index.less'
import UserSessionSurvey from './components/userSessionSurvey'
import { UserProvider, useUserContext } from './provider/userProvider'
import UserActionListTimeline from './components/userActionListTimeLine'
import UserActionDetail from './components/userActionDetail'
import { useGetUserActionListAdapter } from '../../domain/user/adapter/get-user-action-list-adapter'

const UserActionPage: FC = () => {
  const UserContextRender = () => {
    const { userActionList } = useUserContext()
    const { handlePageChange } = useGetUserActionListAdapter()
    return (
      <>
        {userActionList && (
          <div className="user__detail_page">
            <UserSessionSurvey />
            <Card title="行为追踪">
              <div className="flex">
                <div className="flex-1 time_lines_warp">
                  <UserActionListTimeline />
                </div>
                <div className="flex-1 time_line_detail_warp">
                  <UserActionDetail />
                </div>
              </div>
              <div className="pagination">
                {/** 此处有问题，在渲染组件不应该使用业务函数 */}
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
