import create from 'zustand'
import { persist } from 'zustand/middleware'
import { Repo } from '../queries/repo/types'

type RepoId = Repo['id']

type FavoriteRepoStore = {
  favoriteRepoIds: RepoId[]
  addToFavorites: (id: RepoId) => void
  removeFromFavorites: (id: RepoId) => void
}

export const useFavoriteReposStore = create(
  persist<FavoriteRepoStore>(set => ({
    favoriteRepoIds: [],
    addToFavorites: repoId =>
      set(state => ({
        favoriteRepoIds: [...state.favoriteRepoIds, repoId],
      })),
    removeFromFavorites: repoId =>
      set(state => ({
        favoriteRepoIds: state.favoriteRepoIds.filter(id => id !== repoId),
      })),
  })),
)
