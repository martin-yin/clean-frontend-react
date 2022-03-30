import { IResponse, request } from '@/code/lib/request'
import { ProjectEntity, ProjectListEntity, ProjectRepository, ProjectStatusListEntity } from '../model/projectEntity'
import { CreateProjectParams } from '../model/projectModel'

export function projectWebRepository(): ProjectRepository {
  const getProject = async (): Promise<IResponse<ProjectEntity>> => {
    return await request<ProjectEntity>('get', '/admin/project')
  }

  const getProjects = async (): Promise<IResponse<ProjectListEntity>> => {
    const data = await request<ProjectListEntity>('get', '/admin/projects')
    return data
  }

  const createProject = async (param: CreateProjectParams): Promise<IResponse<ProjectEntity>> => {
    const data = await request<ProjectEntity>('post', '/admin/createProject', param)
    return data
  }

  const getProjectStatusList = async (): Promise<IResponse<ProjectStatusListEntity>> => {
    const data = await request<ProjectStatusListEntity>('get', '/communal/getHealthStatus')
    return data
  }

  const deleteProject = async (id: number): Promise<IResponse> => {
    return await request('get', `/admin/delProject?id=${id}`)
  }

  return { getProject, getProjects, createProject, getProjectStatusList, deleteProject }
}
