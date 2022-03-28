import { AdminEntity } from '../../model/admin.entity'
import { AdminModel } from '../../model/admin.model'

export const AdminWebRepositoryMapper = () => {
  return {
    mapFromAdminModel(param: AdminEntity): AdminModel {
      return {
        email: param.email,
        nickName: param.nick_name,
        userName: param.user_name,
        token: ''
      }
    }
  }
}
