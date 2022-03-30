import { AdminWebRepositoryMapper } from '@/domain/admin/repositories/mapper/adminWebRepositoryMapper'
import { ProjectWebRepositoryMapper } from '@/domain/project/repositories/mapper/project-web-repository.mapper'
import { TeamEntity } from '../../model/teamEntity'
import { TeamModel } from '../../model/teamModel'

export function teamWebRepositoryMapper() {
  const { mapFromProjectModel } = ProjectWebRepositoryMapper()
  const { mapFromAdminModel } = AdminWebRepositoryMapper()

  const mapFromTeamModel = (param: TeamEntity): TeamModel => {
    return {
      id: param.id,
      adminId: param.admin_id,
      createdAt: param.created_at,
      updatedAt: param.updated_at,
      name: param.name,
      nickName: param.nick_name,
      adminList: param.team_admin_list.map(item => mapFromAdminModel(item)),
      teamProjectList: param.team_project_list.map(item => mapFromProjectModel(item))
    }
  }
  return { mapFromTeamModel }
}
