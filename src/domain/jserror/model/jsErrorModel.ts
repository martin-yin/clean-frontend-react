import { CasedProperties } from '@/infrastructure/interface'
import { JsErrorEntity } from './jsErrorEntity'

export type JsErrorModel = CasedProperties<JsErrorEntity>
export type JsErrorListModel = Array<JsErrorModel>

export type GetJsErrorParamModel = Record<'issue_id' | 'error_id', string>

export interface StackFrameModel {
  columnNumber: number
  fileName: string
  functionName: string
  lineNumber: number
  source: string
  index?: number
  originSource?: Record<'source', string> & Record<'column' | 'line', number>
}

export type StackFrameListModel = Array<StackFrameModel>
