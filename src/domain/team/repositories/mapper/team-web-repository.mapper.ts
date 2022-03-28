import { AdminWebRepositoryMapper } from '@/domain/admin/repositories/mapper/admin-web-repository.mapper'
import { ProjectWebRepositoryMapper } from '@/domain/project/repositories/mapper/project-web-repository.mapper'
import { TeamEntity } from '../../model/team.entity'
import { TeamModel } from '../../model/team.model'

export const TeamWebRepositoryMapper = () => {
  const { mapFromProjectModel } = ProjectWebRepositoryMapper()
  const { mapFromAdminModel } = AdminWebRepositoryMapper()
  return {
    mapFromTeamModel(param: TeamEntity): TeamModel {
      return {
        id: param.id,
        adminId: param.admin_id,
        createdAt: param.created_at,
        updatedAt: param.updated_at,
        name: param.name,
        nickName: param.nick_name,
        adminList: param.team_admins.map(item => mapFromAdminModel(item)),
        teamProjectList: param.team_projects.map(item => mapFromProjectModel(item))
      }
    }
  }
}
