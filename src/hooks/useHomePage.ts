import { CombinedError, gql, useQuery } from 'urql'
import { HomeQuery } from '../generated/graphql'

const query = gql`
  query Home {
    allPeople {
      edges {
        node {
          id
          name
          height
        }
      }
    }
  }
`

type UseHomePageReturnType = {
  loading: boolean
  people: {
    __typename?: 'Person'
    id: string
    name?: string
    height?: number
  }[]
  error?: CombinedError
}

const useHomePage = () => {
  const [results] = useQuery<HomeQuery>({ query })

  const { fetching, data = {}, error } = results
  const people = data?.allPeople?.edges?.map((edge) => edge?.node) || []

  return { loading: fetching, people, error } as UseHomePageReturnType
}

export default useHomePage
