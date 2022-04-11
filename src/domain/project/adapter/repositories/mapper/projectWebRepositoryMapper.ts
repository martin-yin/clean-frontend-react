import {
  ProjectEntity,
  ProjectListEntity,
  ProjectStatusEntity,
  ProjectStatusListEntity
} from '@/domain/project/model/projectEntity'
import { ProjectListModel, ProjectModel, ProjectStatusListModel } from '@/domain/project/model/projectModel'
import { toUpperCaseData } from '@/infrastructure/lib'
import _ from 'lodash'

function setRate(detail: ProjectStatusEntity) {
  if (detail) {
    if (detail.pv == 0) {
      return 0
    }
    const { http_error, resource_error, js_error } = detail
    return +(100 - http_error / 3 - resource_error / 3 - js_error / 3).toFixed(2)
  }
  return 0
}

export abstract class ProjectRepositoryMapper {
  abstract mapFromProjectModel(params: ProjectEntity): ProjectModel
  abstract mapFromProjectModelList(param: ProjectListEntity): ProjectListModel
  abstract mapFromProjectStatusListModel(param: ProjectStatusListEntity): ProjectStatusListModel
}

export class ProjectWebRepositoryMapper implements ProjectRepositoryMapper {
  mapFromProjectModel(param: ProjectEntity) {
    return toUpperCaseData(_.omit(param, ['created_at', 'updated_at'])) as any
  }
  mapFromProjectModelList(params: ProjectListEntity) {
    return params.map(item => toUpperCaseData(_.omit(item, ['created_at', 'updated_at']))) as any
  }
  mapFromProjectStatusListModel(params: ProjectStatusListEntity): ProjectStatusListModel {
    params.map(item => {
      const data: any = toUpperCaseData(params)
      data.rate = setRate(item)
      return data
    })
    return params as any
  }
}
