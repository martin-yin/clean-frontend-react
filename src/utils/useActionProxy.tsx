// import React from 'react'
// import { Tag } from 'antd'
// import { ListLableItem } from '../features/listLable/listLable'

// const PERFORMANCE = (detail: Record<'load_type', string>): JSX.Element => (
//   <ListLableItem label="加载方式">{detail.load_type}</ListLableItem>
// )

// const HTTP_LOG = (detail: Record<UserIF.HTTP_LOG, string> & Record<'status', number>): JSX.Element => (
//   <>
//     <ListLableItem label="请求URL" spanClass="over-hidde">
//       {detail.http_url}
//     </ListLableItem>
//     <ListLableItem label="请求参数">{detail.request_text}</ListLableItem>
//     <ListLableItem label="请求返回状态码">
//       <Tag color={detail.status > 200 ? '#f50' : '#2db7f5'}>{detail.status} </Tag>
//     </ListLableItem>
//     <ListLableItem label="请求返回">{detail.response_text}</ListLableItem>
//   </>
// )

// const JS_ERROR = (detail: Record<'message', string>): JSX.Element => (
//   <ListLableItem label="异常信息">{detail.message}</ListLableItem>
// )

// const RESOURCE_ERROR = (detail: Record<UserIF.RESOURCE, string>): JSX.Element => (
//   <>
//     <ListLableItem label="异常类型">{detail.element_type}</ListLableItem>
//     <ListLableItem label="异常资源">{detail.source_url}</ListLableItem>
//   </>
// )

// const OPERATION = (detail: Record<UserIF.OPERATION, string>): JSX.Element => (
//   <>
//     <ListLableItem label="点击Tag">{detail.tag_name}</ListLableItem>
//     <ListLableItem label="点击正文">{detail.inner_text}</ListLableItem>
//     <ListLableItem label="ClassName">{detail.class_name}</ListLableItem>
//   </>
// )

// const PAGE_VIEW = (detail: Record<'page_url', string>): JSX.Element => (
//   <>
//     <li>
//       <label>页面URL：</label>
//       <span>{detail.page_url}</span>
//     </li>
//   </>
// )

// const EMPTY = () => <></>

// export const useActionDetailList: Readonly<UserIF.UserActionType> = {
//   PERFORMANCE,
//   HTTP_LOG,
//   JS_ERROR,
//   RESOURCE_ERROR,
//   OPERATION,
//   PAGE_VIEW,
//   EMPTY
// }

// export const useActionDetailListProxy: UserIF.UserActionType = new Proxy(useActionDetailList, {
//   get(target, phrase: string) {
//     if (phrase in target) {
//       return Reflect.get(target, phrase)
//     } else {
//       return Reflect.get(target, 'EMPTY')
//     }
//   }
// })
