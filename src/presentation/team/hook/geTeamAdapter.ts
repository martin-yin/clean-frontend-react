import { GetTeamListUseCase } from '@/domain/team/application/getTeamListUsecase'
import { TeamModel } from '@/domain/team/model/teamModel'
import { useEffect, useState } from 'react'
import { container } from 'tsyringe'

export const useGetTeamListAdapter = () => {
  const usecase = container.resolve(GetTeamListUseCase)
  const [teamList, setTeamList] = useState<Array<TeamModel>>([])

  useEffect(() => {
    ;(async () => {
      const data = await usecase.execute()
      setTeamList(data)
    })()
  }, [])

  return { teamList }
}
