import { useQuery } from '@tanstack/react-query'
import { api } from '../../services/api'

async function getRepos() {
  const { data } = await api.get('/users/guilhermerodz/repos')

  return data
}

export function useFetchRepos() {
  return useQuery(['repos'], getRepos)
}
