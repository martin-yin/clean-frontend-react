import { Tag } from 'antd'
import React from 'react'
import {
  UserActionHtppLog,
  UserActionJsError,
  UserActionOperAtion,
  UserActionPageLoad,
  UserActionResourceError
} from '@/domain/user/model/userModel'
import { ListLableItem } from '@/features/listLable/listLable'
import { UserActionType } from '../interface'

const PERFORMANCE = (detail: any): JSX.Element => <ListLableItem label="加载方式">{detail.loadType}</ListLableItem>

const HTTP_LOG = (detail: UserActionHtppLog): JSX.Element => (
  <>
    <ListLableItem label="请求URL" spanClass="over-hidde">
      {detail.httpUrl}
    </ListLableItem>
    <ListLableItem label="请求参数">{detail.requestText}</ListLableItem>
    <ListLableItem label="请求返回状态码">
      <Tag color={detail.status > 200 ? '#f50' : '#2db7f5'}>{detail.status} </Tag>
    </ListLableItem>
    <ListLableItem label="请求返回">{detail.responseText}</ListLableItem>
  </>
)

const JS_ERROR = (detail: UserActionJsError): JSX.Element => (
  <ListLableItem label="异常信息">{detail.message}</ListLableItem>
)

const RESOURCE_ERROR = (detail: UserActionResourceError): JSX.Element => (
  <>
    <ListLableItem label="异常类型">{detail.elementType}</ListLableItem>
    <ListLableItem label="异常资源">{detail.sourceUrl}</ListLableItem>
  </>
)

const OPERATION = (detail: UserActionOperAtion): JSX.Element => (
  <>
    <ListLableItem label="点击Tag">{detail.tagName}</ListLableItem>
    <ListLableItem label="点击正文">{detail.innerText}</ListLableItem>
    <ListLableItem label="ClassName">{detail.className}</ListLableItem>
  </>
)

const PAGE_VIEW = (detail: UserActionPageLoad): JSX.Element => (
  <>
    <li>
      <label>页面URL：</label>
      <span>{detail.pageUrl}</span>
    </li>
  </>
)

const EMPTY = () => <></>

export const useActionDetailList: Readonly<UserActionType> = {
  PERFORMANCE,
  HTTP_LOG,
  JS_ERROR,
  RESOURCE_ERROR,
  OPERATION,
  PAGE_VIEW,
  EMPTY
}

export const useActionDetailListProxy: UserActionType = new Proxy(useActionDetailList, {
  get(target, phrase: string) {
    if (phrase in target) {
      return Reflect.get(target, phrase)
    } else {
      return Reflect.get(target, 'EMPTY')
    }
  }
})
