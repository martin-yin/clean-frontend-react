// import { Timeline } from 'antd'
// import React, { FC, useCallback, useEffect, useState } from 'react'
// import { getTimeHHMM } from '../../../utils'
// import { UseActionQuotaListProxy } from '../../../utils/useActionQuotaProxy'

// interface BehaviorTimeLineItemProps {
//   key: number
//   item: any
//   activeBehavior: (item: any) => void
//   activeId: string
// }

// const BehaviorTimeLineItem: FC<BehaviorTimeLineItemProps> = ({ key, item, activeBehavior, activeId }) => {
//   const [itemData, setItemData] = useState({
//     itemIcon: () => {
//       return <></>
//     },
//     itemTitle: '',
//     itemContent: ''
//   })

//   useEffect(() => {
//     ;(async () => {
//       const { icon, title, content } = transformationAction(item)
//       setItemData({
//         itemIcon: icon,
//         itemTitle: content,
//         itemContent: title
//       })
//     })()
//   }, [item])

//   const transformationAction = (item: any) => {
//     const action_detail = Reflect.has(item, 'action_detail')
//     if (action_detail) {
//       item.action_detail = JSON.parse(item.action_detail)
//       return UseActionQuotaListProxy[item.action_type](item)
//     } else {
//       return UseActionQuotaListProxy['EMPTY']()
//     }
//   }

//   return (
//     <>
//       <Timeline.Item key={key} dot={itemData.itemIcon()}>
//         <div
//           className={`footprint__des ${activeId == item.happen_time + item.action_type ? 'active__footprint_des' : ''}`}
//           onClick={() => activeBehavior(item)}
//         >
//           <div className="flex">
//             <div className="flex-grow-1">
//               <p className="over-hidde">{itemData.itemTitle}</p>
//             </div>
//             <div className="flex-grow-0 flex-item">{getTimeHHMM(item.happen_time)}</div>
//           </div>
//           <div>{itemData.itemContent}</div>
//         </div>
//       </Timeline.Item>
//     </>
//   )
// }

// export default BehaviorTimeLineItem
