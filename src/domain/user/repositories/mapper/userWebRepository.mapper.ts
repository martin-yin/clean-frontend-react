import { getTimeYYMMDDHM } from '@/code/lib'
import { toUpperCaseData } from '@/code/lib/request'
import _ from 'lodash'
import { UserActionListEntity, UserEntity, UserListEntity } from '../../model/userEntity'
import { UserActionListModel, UserListModel, UserModel } from '../../model/userModel'

export function userWebRepositoryMapper() {
  const mapFromUserListModel = (param: UserListEntity): UserListModel => {
    return param.map(item => {
      const model = toUpperCaseData<UserEntity, UserModel>(item)
      model.happenTime = getTimeYYMMDDHM(model.happenTime)
      model.osInfo = `${model.os} / ${model.osVersion}`
      model.address = `${model.nation}${model.province}${model.city}${model.district}`
      model.browserInfo = `${model.browser} / ${model.browserVersion}`
      model.deviceInfo = `${model.device} / ${model.deviceType}`
      return model
    })
  }

  const mapFromUser = (param: UserEntity): UserModel => {
    return toUpperCaseData(_.omit(param, ['created_at', 'updated_at']))
  }
  const mapFormUserActionListModel = (param: UserActionListEntity): UserActionListModel => {
    return {
      total: param.total,
      actionList: param.user_actions_list.map(item => {
        item.action_detail = toUpperCaseData(JSON.parse(item.action_detail))
        return toUpperCaseData(item)
      })
    }
  }
  return {
    mapFromUserListModel,
    mapFromUser,
    mapFormUserActionListModel
  }
}
