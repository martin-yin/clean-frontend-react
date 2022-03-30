import { useEffect, useState } from 'react'
import { TeamModel } from '../model/teamModel'
import { getTeamListUseCase } from '../usecase/getTeamListUsecase'

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
