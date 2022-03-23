import { Mapper } from '../../../../code/base/mapper'
import { ProjectEntity } from '../../model/project.entity'
import { ProjectModel } from '../../model/project.model'

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
}
