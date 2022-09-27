import { useQuery } from '@tanstack/react-query'
import { api } from '../../services/api'
import { Repo } from './types'

async function getRepos() {
  const { data } = await api.get<Repo[]>('/users/guilhermerodz/repos')

  return data
}

export function useFetchRepos() {
  return useQuery(['repos'], getRepos)
}
