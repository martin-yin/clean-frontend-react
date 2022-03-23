import { useEffect, useState } from 'react'
import { InjectFactoryGet } from '../../../code/decorator'
import { TeamModel } from '../model/team.model'
import { GetTeamListUseCase } from '../usecase/get-team-list-usecase'

export const getTeamListAdapter = () => {
  const getTeamListUseCase = InjectFactoryGet<GetTeamListUseCase>(GetTeamListUseCase)
  const [teamList, setTeamList] = useState<Array<TeamModel>>([])

  useEffect(() => {
    ;(async () => {
      const data = await getTeamListUseCase.execute()
      setTeamList(data)
    })()
  }, [])

  return { teamList }
}
