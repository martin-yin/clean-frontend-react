import { Card, Divider, Space } from 'antd'
import React, { useCallback } from 'react'
import {
  PageJsErrorIcon,
  PageLoadIcon,
  PageNetworkIcon,
  PageOperationIcon,
  PageResourceIcon,
  PageViewIcon
} from '@/assets'
import { getUserAdpter } from '@/domain/user/adapter/getUserAdapter'
import { ListLable, ListLableItem } from '@/features/listLable/listLable'

const USERACTIONICONS: {
  [key: string]: { icon: string; text: string }
} = {
  PERFORMANCE: { icon: PageLoadIcon, text: '次打开页面' },
  HTTP_LOG: { icon: PageNetworkIcon, text: '次网络请求' },
  PAGE_VIEW: { icon: PageViewIcon, text: '次浏览页面' },
  OPERATION: { icon: PageOperationIcon, text: '次点击事件' },
  RESOURCE_ERROR: { icon: PageResourceIcon, text: '次资源异常' },
  JS_ERROR: { icon: PageJsErrorIcon, text: '次JS异常' }
}

const UserSessionSurvey = React.memo(() => {
  const { user, userActionStatisticList } = getUserAdpter()
  const userStatisticsRender = useCallback((key: number, item: any) => {
    const action = USERACTIONICONS[item.action_type]
    return (
      <>
        <div key={key} className="survey_statistics_item">
          <div className="statistics-item-icon">
            <img className="userActionIcon" src={action.icon} />
          </div>
          <p>
            {item.total}
            {action.text}
          </p>
        </div>
      </>
    )
  }, [])

  return (
    <div className="user__survey">
      {user && (
        <Card title="用户信息">
          <Space size={60}>
            <ListLable>
              <ListLableItem label="设备名称">{`${user.device} / ${user.deviceType}`}</ListLableItem>
              <ListLableItem label="浏览器">
                {user.browser}:{user.browserVersion}
              </ListLableItem>
              <ListLableItem label="系统版本">
                {user.os}: {user.osVersion}
              </ListLableItem>
              <ListLableItem label="IP地址">{user.ip}</ListLableItem>
              <ListLableItem label="所在地区">{`${user.nation}${user.province}${user.city}${user.district}`}</ListLableItem>
            </ListLable>
            <div className="user__survey_statistics">
              <Space split={<Divider type="vertical" />} align="center" size={60}>
                {userActionStatisticList &&
                  userActionStatisticList.map((item: any, key: number) => {
                    return userStatisticsRender(key, item)
                  })}
              </Space>
            </div>
          </Space>
        </Card>
      )}
    </div>
  )
})

export default UserSessionSurvey
