import { QueryClientProvider } from '@tanstack/react-query'
import './App.css'
import { useFetchRepos } from './queries/repo'
import { queryClient } from './services/queryClient'

function App() {
  const { data } = useFetchRepos()

  console.log(data)

  return <div className="App"></div>
}

export default App
