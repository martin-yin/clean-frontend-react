export interface ProjectModel {
  adminId: number
  id: number
  logo: string
  monitorId: string
  projectName: string
  projectType: string
  teamId: number
}

export type CreateProjectParams = Record<'project_name', string> & Record<'team_id', string>

export interface ProjectHealthyModel {
  httpError: number
  jsError: number
  pv: number
  resourcesError: number
  uv: number
  projectName: string
  monitorId: string
}

export interface ProjectListAndMonitorId {
  monitorId: any
  projectList: Array<ProjectModel>
}
