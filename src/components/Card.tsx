import { Repo } from '../queries/repo/types'

type CardProps = {
  repo: Repo
  toggleFavoriteRepo: (id: number) => void
}

export function Card({ repo, toggleFavoriteRepo }: CardProps) {
  function handleToggleFavoriteRepo() {}

  return (
    <div className="card">
      <h2>{repo.name}</h2>

      <button onClick={handleToggleFavoriteRepo}>Like</button>
    </div>
  )
}
