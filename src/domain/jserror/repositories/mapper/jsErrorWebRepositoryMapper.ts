import { toUpperCaseData } from '@/code/lib/request'
import moment from 'moment'
import { JsErrorEntity, JsErrorListEntity } from '../../model/jsErrorEntity'
import { JsErrorListModel, JsErrorModel } from '../../model/jsErrorModel'

export function jsErrorWebRepositoryMapper() {
  const mapFromJsErrorModel = (param: JsErrorListEntity): JsErrorListModel => {
    return param.map(item => {
      const model = toUpperCaseData<JsErrorEntity, JsErrorModel>(item)

      model.lastTime = moment(+model.lastTime).fromNow()
      model.firstTime = moment(+model.firstTime).fromNow()

      console.log(model.firstTime, model.lastTime, '================')

      return model
    })
  }
  return {
    mapFromJsErrorModel
  }
}
