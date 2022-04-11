import { AdminEntity } from '../../../model/adminEntity'
import { AdminModel } from '../../../model/adminModel'

export abstract class AdminRepositoryMapper {
  abstract mapFromAdminModel(parasm: AdminEntity): AdminModel
}

export class AdminWebRepositoryMapper implements AdminRepositoryMapper {
  mapFromAdminModel(params: AdminEntity): AdminModel {
    return {
      email: params.email,
      nickName: params.nick_name,
      userName: params.user_name,
      token: ''
    }
  }
}
