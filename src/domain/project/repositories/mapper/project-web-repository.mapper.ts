import { Mapper } from '../../../../code/base/mapper'
import { ProjectEntity, ProjectStatusEntity } from '../../model/project.entity'
import { ProjectStatusModel, ProjectModel } from '../../model/project.model'

export class ProjectWebRepositoryMapper extends Mapper<ProjectEntity, ProjectModel> {
  mapFrom(param: ProjectEntity): ProjectModel {
    return {
      id: param.id,
      adminId: param.admin_id,
      logo: param.logo,
      monitorId: param.monitor_id,
      projectName: param.project_name,
      projectType: param.project_type,
      teamId: param.team_id
    }
  }
  mapTo(param: ProjectModel): ProjectEntity {
    throw new Error('Method not implemented.')
  }

  mapFromProjectHealthyModel(param: ProjectStatusEntity): ProjectStatusModel {
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
      monitorId: param.monitor_id
    }
  }
}
