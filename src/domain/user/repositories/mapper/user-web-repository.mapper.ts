import { getTimeYYMMDDHM } from '@/code'
import { toUpperCaseData } from '@/code/lib/request'
import _ from 'lodash'
import { UserActionListEntity, UserEntity, UserListEntity } from '../../model/user.entity'
import { UserActionListModel, UserListModel, UserModel } from '../../model/user.model'

export const UserWebRepositoryMapper = () => {
  return {
    mapFromUserListModel(param: UserListEntity): UserListModel {
      return param.map(item => {
        const model = toUpperCaseData<UserEntity, UserModel>(item)
        model.happenTime = getTimeYYMMDDHM(model.happenTime)
        model.osInfo = `${model.os} / ${model.osVersion}`
        model.address = `${model.nation}${model.province}${model.city}${model.district}`
        model.browserInfo = `${model.browser} / ${model.browserVersion}`
        model.deviceInfo = `${model.device} / ${model.deviceType}`
        return model
      })
    },
    mapFromUser(param: UserEntity): UserModel {
      return toUpperCaseData(_.omit(param, ['created_at', 'updated_at']))
    },
    mapFormUserActionListModel(param: UserActionListEntity): UserActionListModel {
      return {
        total: param.total,
        actionList: param.user_actions_list.map(item => {
          item.action_detail = toUpperCaseData(JSON.parse(item.action_detail))
          return toUpperCaseData(item)
        })
      }
    }
  }
}
