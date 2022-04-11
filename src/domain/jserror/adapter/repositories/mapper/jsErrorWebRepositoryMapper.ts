import { CasedProperties } from '@/infrastructure/interface'
import { toUpperCaseData } from '@/infrastructure/lib'
import moment from 'moment'
import { JsErrorEntity, JsErrorListEntity } from '../../../model/jsErrorEntity'
import { JsErrorListModel, JsErrorModel } from '../../../model/jsErrorModel'

abstract class JsErrorRepositoryMapper {
  abstract mapFromJsErrorListModel(params: JsErrorListEntity): JsErrorListModel

  abstract mapFromJsErrorModel(params: JsErrorEntity): JsErrorModel
}

// Todo: 替换load hash

export class JsErrorWebRepositoryMapper implements JsErrorRepositoryMapper {
  mapFromJsErrorModel(params: JsErrorEntity): CasedProperties<JsErrorEntity> {
    params.stack_frames = JSON.parse(params.stack_frames)
    return toUpperCaseData(params) as any
  }
  mapFromJsErrorListModel(params: JsErrorListEntity): JsErrorListModel {
    return params.map(item => {
      const model = toUpperCaseData<JsErrorEntity, JsErrorModel>(item)
      model.lastTime = moment(+model.lastTime).fromNow()
      model.firstTime = moment(+model.firstTime).fromNow()
      return model
    })
  }
}
