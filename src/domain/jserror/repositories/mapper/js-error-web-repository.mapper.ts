import { toUpperCaseData } from '@/utils/request'
import { JsErrorListEntity } from '../../model/js-error.entity'
import { JsErrorListModel } from '../../model/js-error.model'

export const JsErrorWebRepositoryMapper = () => {
  return {
    mapFromJsErrorModel(param: JsErrorListEntity): JsErrorListModel {
      const model = param.map(item => toUpperCaseData(item))
      return model
    }
  }
}
