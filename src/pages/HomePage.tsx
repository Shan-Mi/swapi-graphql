import Home from '../components/Home/Home'

import useHomePage from '../hooks/useHomePage'

const HomePage = () => {
  const { loading, people, error } = useHomePage()

  if (loading) return <div>loading...</div>
  if (error) return <div>{JSON.stringify(error)}</div>

  return <Home people={people} />
}

export default HomePage
