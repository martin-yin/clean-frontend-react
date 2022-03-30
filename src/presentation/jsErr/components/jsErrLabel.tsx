import { JsErrorModel } from '@/domain/jserror/model/jsErrorModel'
import { ListLable, ListLableItem } from '@/features/listLable/listLable'
import { Card } from 'antd'
import React from 'react'

const JsErrLabel = React.memo<{ jsErr: JsErrorModel }>(({ jsErr }) => {
  return (
    <>
      {jsErr ? (
        <>
          <Card>
            <ListLable title="概要">
              <ListLableItem label="monitor_id">{jsErr.monitorId}</ListLableItem>
              <ListLableItem label="URL">{jsErr.pageUrl}</ListLableItem>
              <ListLableItem label="browser">
                {jsErr.browser}: {jsErr.browserVersion}
              </ListLableItem>
              <ListLableItem label="device">{jsErr.device}</ListLableItem>
              <ListLableItem label="os">
                {jsErr.os}: {jsErr.osVersion}
              </ListLableItem>
              <ListLableItem label="sessionId">{jsErr.sessionId}</ListLableItem>
              <ListLableItem label="时间">{jsErr.createdAt}</ListLableItem>
            </ListLable>
            <ListLable title="位置">
              <ListLableItem label="ip">{jsErr.ip}</ListLableItem>
              <ListLableItem label="地址">{jsErr.nation + jsErr.province + jsErr.city + jsErr.district}</ListLableItem>
            </ListLable>
            <ListLable title="网络">
              <ListLableItem label="网络">未知</ListLableItem>
              <ListLableItem label="运行商">未知</ListLableItem>
            </ListLable>
          </Card>
        </>
      ) : null}
    </>
  )
})

export default JsErrLabel
