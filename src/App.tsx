import './App.css'
import { Card } from './components/Card'
import { useFetchRepos } from './queries/repo'

function App() {
  const { data } = useFetchRepos()

  console.log(data)

  return (
    <div className="App">
      <h1>
        UI State by <code>zustand</code>; Server State by{' '}
        <code>react-query</code>
      </h1>
      {data?.map(repo => (
        <Card key={repo.id} repo={repo} toggleFavoriteRepo={() => {}}></Card>
      ))}
    </div>
  )
}

export default App
