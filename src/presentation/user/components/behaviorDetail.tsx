import { Empty } from 'antd'
import React, { useCallback } from 'react'
import { ListLable } from '../../../features/listLable/listLable'
import { useActionDetailListProxy } from '../hook/useActionProxy'

interface BehaviorDetailProps {
  detail: any
}

const BehaviorDetail = React.memo<BehaviorDetailProps>(({ detail }) => {
  const userActionDetail = useCallback(
    (detail): JSX.Element => {
      console.log(detail, '============')
      const userAction = Reflect.has(detail, 'actionType')
      return userAction ? (
        <ListLable>
          {useActionDetailListProxy[detail.actionType](detail)}
          {/* <ListLableItem label="操作系统">
            {`${detail.device} / ${detail.actionType}`}
            &nbsp;&nbsp;&nbsp;
            {`${detail.os} ${detail.osVersion}`}
          </ListLableItem>
          <ListLableItem label="浏览器">{`${detail.browser} ${detail.browser_version}`}</ListLableItem>
          <ListLableItem label="时间">{detail.happen_time}</ListLableItem>
          <ListLableItem label="UA">{detail.ua}</ListLableItem> */}
        </ListLable>
      ) : (
        <></>
      )
    },
    [detail]
  )

  return userActionDetail(detail)
})

export default BehaviorDetail
