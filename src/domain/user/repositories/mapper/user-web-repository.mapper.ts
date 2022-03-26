import { UserActionListEntity, UserEntity, UserListEntity } from '../../model/user.entity'
import { UserActionListModel, UserListModel, UserModel } from '../../model/user.model'
import _ from 'lodash'
import { toUpperCaseData } from '../../../../utils/request'

export const userWebRepositoryMapper = {
  mapFromUserListModel(param: UserListEntity): UserListModel {
    return param.map(item => toUpperCaseData(_.omit(item, ['created_at', 'updated_at']))) as unknown as UserListModel
  },
  mapFromUser(param: UserEntity): UserModel {
    return toUpperCaseData(_.omit(param, ['created_at', 'updated_at'])) as unknown as UserModel
  },
  mapFormUserActionList(param: UserActionListEntity): UserActionListModel {
    return {
      total: param.total,
      actionList: param.user_actions_list.map(item => {
        item.action_detail = toUpperCaseData(JSON.parse(item.action_detail))
        return toUpperCaseData(item)
      })
    }
  }
}
