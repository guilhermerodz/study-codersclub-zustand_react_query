import { useQuery } from '@tanstack/react-query'
import { api } from '../../services/api'
import { Repo } from './types'

import { default as offlineMock } from './offlineMock.json'

async function getRepos() {
  const { data, status } = await api.get<Repo[]>('/users/guilhermerodz/repos')
  if (status !== 200) return offlineMock as Repo[]

  return data
}

export function useFetchRepos() {
  return useQuery(['repos'], getRepos)
}
