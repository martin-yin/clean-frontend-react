import { injectable } from 'tsyringe'
import { AdminEntity, AdminLoginEntity } from '../../../model/adminEntity'
import { AdminModel } from '../../../model/adminModel'

export abstract class AdminRepositoryMapper {
  abstract mapFromAdminLoginModel(params: AdminLoginEntity): AdminModel
  abstract mapFromAdminModel(params: AdminEntity): AdminModel
}

@injectable()
export class AdminWebRepositoryMapper implements AdminRepositoryMapper {
  mapFromAdminLoginModel(params: AdminLoginEntity): AdminModel {
    return {
      email: params.user.email,
      nickName: params.user.nick_name,
      userName: params.user.user_name,
      token: params.token
    }
  }
  mapFromAdminModel(params: AdminEntity): AdminModel {
    return {
      email: params.email,
      nickName: params.nick_name,
      userName: params.user_name,
      token: ''
    }
  }
}
