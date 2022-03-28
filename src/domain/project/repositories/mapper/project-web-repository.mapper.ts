import { ProjectEntity, ProjectStatusEntity } from '../../model/project.entity'
import { ProjectModel, ProjectStatusModel } from '../../model/project.model'

export const ProjectWebRepositoryMapper = () => {
  return {
    mapFromProjectModel(param: ProjectEntity): ProjectModel {
      return {
        id: param.id,
        adminId: param.admin_id,
        logo: param.logo,
        monitorId: param.monitor_id,
        projectName: param.project_name,
        projectType: param.project_type,
        teamId: param.team_id
      }
    },
    mapFromProjectStatusModel(param: ProjectStatusEntity): ProjectStatusModel {
      return {
        id: param.id,
        adminId: param.admin_id,
        logo: param.logo,
        projectType: param.project_type,
        teamId: param.team_id,
        httpError: param.http_error,
        jsError: param.js_error,
        pv: param.pv,
        resourcesError: param.resources_error,
        uv: param.uv,
        projectName: param.project_name,
        monitorId: param.monitor_id,
        rate: setRate(param)
      }
    }
  }
}

const setRate = (detail: ProjectStatusEntity) => {
  if (detail) {
    if (detail.pv == 0) {
      return 0
    }
    const { http_error, resources_error, js_error } = detail
    return +(100 - http_error / 3 - resources_error / 3 - js_error / 3).toFixed(2)
  }
  return 0
}
