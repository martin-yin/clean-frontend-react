import { getTimeYYMMDDHM, toUpperCaseData } from '@/infrastructure/lib'
import _ from 'lodash'
import { UserActionListEntity, UserEntity, UserListEntity } from '../../../model/userEntity'
import { UserActionListModel, UserListModel, UserModel } from '../../../model/userModel'

export abstract class UserRepositoryMapper {
  abstract mapFromUserListModel(params: UserListEntity): UserListModel
  abstract mapFromUser(params: UserEntity): UserModel
  abstract mapFormUserActionListModel(params: UserActionListEntity): UserActionListModel
}

export class UserWebRepositoryMapper implements UserRepositoryMapper {
  mapFromUserListModel(params: UserListEntity): UserListModel {
    return params.map(item => {
      const model = toUpperCaseData<UserEntity, UserModel>(item)
      model.happenTime = getTimeYYMMDDHM(model.happenTime)
      model.osInfo = `${model.os} / ${model.osVersion}`
      model.address = `${model.nation}${model.province}${model.city}${model.district}`
      model.browserInfo = `${model.browser} / ${model.browserVersion}`
      model.deviceInfo = `${model.device} / ${model.deviceType}`
      return model
    })
  }
  mapFromUser(params: UserEntity) {
    return toUpperCaseData(_.omit(params, ['created_at', 'updated_at']))
  }
  mapFormUserActionListModel(params: UserActionListEntity): UserActionListModel {
    return {
      total: params.total,
      actionList: params.user_actions_list.map(item => {
        item.action_detail = toUpperCaseData(JSON.parse(item.action_detail))
        return toUpperCaseData(item)
      })
    }
  }
}
