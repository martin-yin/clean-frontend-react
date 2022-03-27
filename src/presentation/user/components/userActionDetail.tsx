import React, { useCallback } from 'react'
import { UserActionDetail as UserActionDetailIF } from '@/domain/user/model/user.model'
import { ListLable, ListLableItem } from '@/features/listLable/listLable'
import { getTimeHHMM } from '@/utils'
import { useActionDetailListProxy } from '../hook/useActionProxy'
import { useUserContext } from '../provider/userProvider'

const UserActionDetail = React.memo(() => {
  const { userAction } = useUserContext()
  const actionDetail = useCallback(
    (detail: UserActionDetailIF): JSX.Element => {
      const userAction = Reflect.has(detail, 'actionType')
      return userAction ? (
        <ListLable>
          {useActionDetailListProxy[detail.actionType](detail)}
          <ListLableItem label="操作系统">
            {`${detail.device} / ${detail.deviceType}`}
            &nbsp;&nbsp;&nbsp;
            {`${detail.os} ${detail.osVersion}`}
          </ListLableItem>
          <ListLableItem label="浏览器">{`${detail.browser} ${detail.browserVersion}`}</ListLableItem>
          <ListLableItem label="时间">{getTimeHHMM(detail.happenTime)}</ListLableItem>
          <ListLableItem label="语言">{detail.language}</ListLableItem>
          <ListLableItem label="vp">{detail.vp}</ListLableItem>
          <ListLableItem label="屏幕分辨率">{detail.screen}</ListLableItem>
          <ListLableItem label="网络类型">{detail.connectionType}</ListLableItem>
          <ListLableItem label="sdk版本">{detail.sdkVersion}</ListLableItem>
        </ListLable>
      ) : (
        <></>
      )
    },
    [userAction]
  )

  return actionDetail(userAction)
})

export default UserActionDetail
