import './App.css'
import { Card } from './components/Card'
import { useFetchRepos } from './queries/repo'
import { useFavoriteReposStore } from './store/useFavoriteRepos'

function App() {
  const { data } = useFetchRepos()

  return (
    <div className="App">
      <h1>
        UI State by <code>zustand</code>; Server State by{' '}
        <code>react-query</code>
      </h1>

      {data?.map(repo => (
        <Card key={repo.id} repo={repo} />
      ))}
    </div>
  )
}

export default App
