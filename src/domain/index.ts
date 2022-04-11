import { WebHttpService } from '@/infrastructure/service/webHttpService'
import { WebMessageService } from '@/infrastructure/service/webMessageService'
import { container } from 'tsyringe'
import { AdminWebRepository } from './admin/adapter/repositories/adminWebRepository'
import { AdminWebRepositoryMapper } from './admin/adapter/repositories/mapper/adminWebRepositoryMapper'
import { HttpWebRepository } from './http/adapter/repositories/httpWebRepository'
import { HttpWebRepositoryMapper } from './http/adapter/repositories/mapper/httpWebRepositoryMapper'
import { JsErrorWebRepository } from './jserror/adapter/repositories/jsErrorWebRepository'
import { JsErrorWebRepositoryMapper } from './jserror/adapter/repositories/mapper/jsErrorWebRepositoryMapper'
import { PerformanceWebRepositoryMapper } from './performance/adapter/repositories/mapper/performanceWebRepositoryMapper'
import { PerformanceWebRepository } from './performance/adapter/repositories/performanceWebRepository'
import { ProjectWebRepositoryMapper } from './project/adapter/repositories/mapper/projectWebRepositoryMapper'
import { ProjectWebRepository } from './project/adapter/repositories/projectWebRepository'
import { ResourceWebRepositoryMapper } from './resource/adapter/repositories/mapper/resourceMapperWebRepositoryMapper'
import { ResourceErrorWebRepository } from './resource/adapter/repositories/resourceErrorWebRepository'
import { TeamWebRepositoryMapper } from './team/adapter/repositories/mapper/teamWebRepositoryMapper'
import { TeamWebRepository } from './team/adapter/repositories/teamWebRepository'
import { UserWebRepositoryMapper } from './user/adapter/repositories/mapper/userWebRepository.mapper'
import { UserWebRepository } from './user/adapter/repositories/userWebRepository'

// 公用类
container.register('MessageService', {
  useClass: WebMessageService
})

container.register('HttpService', {
  useClass: WebHttpService
})

// 业务类
container.register('AdminRepository', {
  useClass: AdminWebRepository
})

container.register('AdminRepositoryMapper', {
  useClass: AdminWebRepositoryMapper
})

container.register('JsErrorRepository', {
  useClass: JsErrorWebRepository
})

container.register('JsErrorRepositoryMapper', {
  useClass: JsErrorWebRepositoryMapper
})

container.register('PerformanceRepository', {
  useClass: PerformanceWebRepository
})

container.register('PerformanceRepositoryMapper', {
  useClass: PerformanceWebRepositoryMapper
})

container.register('ProjectRepositoryMapper', {
  useClass: ProjectWebRepositoryMapper
})

container.register('ProjectRepository', {
  useClass: ProjectWebRepository
})

container.register('ResourceErrorRepository', {
  useClass: ResourceErrorWebRepository
})

container.register('ResourceRepositoryMapper', {
  useClass: ResourceWebRepositoryMapper
})

container.register('ResourceRepositoryMapper', {
  useClass: ResourceWebRepositoryMapper
})

container.register('TeamRepository', {
  useClass: TeamWebRepository
})

container.register('TeamRepositoryMapper', {
  useClass: TeamWebRepositoryMapper
})

container.register('UserRepository', {
  useClass: UserWebRepository
})

container.register('UserRepositoryMapper', {
  useClass: UserWebRepositoryMapper
})

container.register('HttpRepositoryMapper', {
  useClass: HttpWebRepositoryMapper
})

container.register('HttpRepository', {
  useClass: HttpWebRepository
})
