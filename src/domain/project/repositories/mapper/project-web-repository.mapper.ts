import { toUpperCaseData } from '@/utils/request'
import _ from 'lodash'
import { ProjectEntity, ProjectStatusEntity } from '../../model/project.entity'
import { ProjectModel, ProjectStatusModel } from '../../model/project.model'

export const ProjectWebRepositoryMapper = () => {
  return {
    mapFromProjectModel(param: ProjectEntity): ProjectModel {
      return toUpperCaseData(_.omit(param, ['created_at', 'updated_at']))
    },
    mapFromProjectStatusModel(param: ProjectStatusEntity): ProjectStatusModel {
      const data = toUpperCaseData(param)
      data.rate = setRate(param)
      return data
    }
  }
}

const setRate = (detail: ProjectStatusEntity) => {
  if (detail) {
    if (detail.pv == 0) {
      return 0
    }
    const { http_error, resource_error, js_error } = detail
    return +(100 - http_error / 3 - resource_error / 3 - js_error / 3).toFixed(2)
  }
  return 0
}
