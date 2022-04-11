import { AdminRepositoryMapper } from '@/domain/admin/adapter/repositories/mapper/adminWebRepositoryMapper'
import { ProjectRepositoryMapper } from '@/domain/project/adapter/repositories/mapper/projectWebRepositoryMapper'
import { TeamEntity, TeamListEntity } from '@/domain/team/model/teamEntity'
import { TeamModel, TeamModelList } from '@/domain/team/model/teamModel'
import { inject, injectable } from 'tsyringe'

export abstract class TeamRepositoryMapper {
  abstract mapFromTeamModel(params: TeamEntity): TeamModel
  abstract mapFromTeamListModel(params: TeamListEntity): TeamModelList
}

@injectable()
export class TeamWebRepositoryMapper implements TeamRepositoryMapper {
  constructor(
    @inject('ProjectRepositoryMapper') private projectRepositoryMapper: ProjectRepositoryMapper,
    @inject('AdminRepositoryMapper') private adminRepositoryMapper: AdminRepositoryMapper
  ) {}
  mapFromTeamModel(params: TeamEntity): TeamModel {
    return {
      id: params.id,
      adminId: params.admin_id,
      createdAt: params.created_at,
      updatedAt: params.updated_at,
      name: params.name,
      nickName: params.nick_name,
      adminList: params.team_admin_list.map(item => this.adminRepositoryMapper.mapFromAdminModel(item)),
      teamProjectList: params.team_project_list.map(item => this.projectRepositoryMapper.mapFromProjectModel(item))
    }
  }
  mapFromTeamListModel(params: TeamListEntity): TeamModelList {
    return params.map(item => {
      return {
        id: item.id,
        adminId: item.admin_id,
        createdAt: item.created_at,
        updatedAt: item.updated_at,
        name: item.name,
        nickName: item.nick_name,
        adminList: item.team_admin_list.map(children => this.adminRepositoryMapper.mapFromAdminModel(children)),
        teamProjectList: item.team_project_list.map(children =>
          this.projectRepositoryMapper.mapFromProjectModel(children)
        )
      }
    })
  }
}
