import { useMemo } from 'react'
import { Repo } from '../queries/repo/types'
import { useFavoriteReposStore } from '../store/useFavoriteRepos'

type CardProps = {
  repo: Repo
}

export function Card({ repo }: CardProps) {
  const { addToFavorites, removeFromFavorites, favoriteRepoIds } =
    useFavoriteReposStore()

  const isFavorite = useMemo(
    () => favoriteRepoIds.includes(repo.id),
    [favoriteRepoIds, repo.id],
  )

  function handleToggleFavoriteRepo() {
    isFavorite ? removeFromFavorites(repo.id) : addToFavorites(repo.id)
  }

  return (
    <div className="card">
      <h2>{repo.name}</h2>

      <button onClick={handleToggleFavoriteRepo}>
        {isFavorite ? 'Un-star' : 'Star'}
      </button>
    </div>
  )
}
