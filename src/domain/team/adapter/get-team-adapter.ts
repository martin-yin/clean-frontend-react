import { useEffect, useState } from 'react'
import { TeamModel } from '../model/team.model'
import { getTeamListUseCase } from '../usecase/get-team-list-usecase'

export const useGetTeamListAdapter = () => {
  const [teamList, setTeamList] = useState<Array<TeamModel>>([])

  useEffect(() => {
    ;(async () => {
      const data = await getTeamListUseCase()
      setTeamList(data)
    })()
  }, [])

  return { teamList }
}
