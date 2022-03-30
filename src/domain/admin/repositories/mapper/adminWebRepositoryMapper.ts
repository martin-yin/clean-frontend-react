import { AdminEntity } from '../../model/adminEntity'
import { AdminModel } from '../../model/adminModel'

export function adminWebRepositoryMapper() {
  const mapFromAdminModel = (param: AdminEntity): AdminModel => {
    return {
      email: param.email,
      nickName: param.nick_name,
      userName: param.user_name,
      token: ''
    }
  }
  return { mapFromAdminModel }
}
