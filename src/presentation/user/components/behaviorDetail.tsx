// import { Empty } from 'antd'
// import React, { useCallback } from 'react'
// import { ListLable, ListLableItem } from '../../../features/listLable/listLable'
// import { useActionDetailListProxy } from '../../../utils/useActionProxy'

// interface BehaviorDetailProps {
//   detail: any
// }

// const BehaviorDetail = React.memo<BehaviorDetailProps>(({ detail }) => {
//   const userActionDetail = useCallback(
//     (detail): JSX.Element => {
//       const userAction = Reflect.has(detail, 'action_type')
//       return userAction ? (
//         <ListLable>
//           {useActionDetailListProxy[detail.action_type](detail)}
//           <ListLableItem label="操作系统">
//             {`${detail.device} / ${detail.device_type}`}
//             &nbsp;&nbsp;&nbsp;
//             {`${detail.os} ${detail.os_version}`}
//           </ListLableItem>
//           <ListLableItem label="浏览器">{`${detail.browser} ${detail.browser_version}`}</ListLableItem>
//           <ListLableItem label="时间">{getTimeYYMMDDHM(detail.happen_time)}</ListLableItem>
//           <ListLableItem label="UA">{detail.ua}</ListLableItem>
//         </ListLable>
//       ) : (
//         <></>
//       )
//     },
//     [detail]
//   )

//   return userActionDetail(detail)
// })

// export default BehaviorDetail
// function getTimeYYMMDDHM(happen_time: any): React.ReactNode {
//   throw new Error('Function not implemented.')
// }
