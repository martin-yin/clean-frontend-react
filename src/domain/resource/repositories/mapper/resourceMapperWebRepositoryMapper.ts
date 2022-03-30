import { toUpperCaseData } from '@/code/lib/request'
import { ResourceErrorListQuotaEntity } from '../../model/resourceErrorEntity'
import { ResourceErrorListQuotaModel } from '../../model/resourceErrorModel'

export function resourceWebRepositoryMapper() {
  const mapFromResourceErrorModel = (param: ResourceErrorListQuotaEntity): ResourceErrorListQuotaModel => {
    return {
      quota: toUpperCaseData(param.quota),
      resourceList: param.resource_list.map(item => toUpperCaseData(item))
    }
  }
  return { mapFromResourceErrorModel }
}
