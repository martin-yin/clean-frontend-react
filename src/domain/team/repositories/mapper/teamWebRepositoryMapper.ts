import { adminWebRepositoryMapper } from '@/domain/admin/repositories/mapper/adminWebRepositoryMapper'
import { projectWebRepositoryMapper } from '@/domain/project/repositories/mapper/projectWebRepositoryMapper'
import { TeamEntity } from '../../model/teamEntity'
import { TeamModel } from '../../model/teamModel'

export function teamWebRepositoryMapper() {
  const { mapFromProjectModel } = projectWebRepositoryMapper()
  const { mapFromAdminModel } = adminWebRepositoryMapper()

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
