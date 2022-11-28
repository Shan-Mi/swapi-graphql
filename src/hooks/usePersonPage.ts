import { CombinedError, gql, useQuery } from 'urql'
import { PersonQuery, PersonQueryVariables } from '../generated/graphql'

const query = gql`
  query Person($id: ID) {
    person(id: $id) {
      id
      name
      height
      filmConnection {
        films {
          title
          producers
          releaseDate
          planetConnection {
            edges {
              node {
                surfaceWater
                name
              }
            }
          }
        }
      }
    }
  }
`

type UsePersonPageProp = {
  id: string
}

type UsePersonPageReturnProp = {
  loading: boolean
  producers: {
    [key: string]: number
  }
  films: {
    title?: string
    releaseDate?: string
    planetsWithoutWater?: number
  }[]
  error: CombinedError
  data: PersonQuery
}

const usePersonPage = ({ id }: UsePersonPageProp) => {
  const [results] = useQuery<PersonQuery, PersonQueryVariables>({
    query,
    variables: { id },
  })

  const { fetching, data, error } = results
  // @ts-ignore
  const producers = data?.person?.filmConnection?.films
    // @ts-ignore
    .reduce((acc, curr) => [...acc, ...curr?.producers], [] as string[])
    .reduce((prev, cur) => {
      prev[cur] = (prev[cur] || 0) + 1
      return prev
    }, {} as { [key: string]: number })

  // @ts-ignore
  const films = data?.person?.filmConnection?.films.map((film) => {
    const count = film?.planetConnection?.edges?.reduce((acc, curr) => {
      // @ts-ignore
      return acc + !curr?.node.surfaceWater
    }, 0)

    return {
      title: film?.title,
      releaseDate: film?.releaseDate,
      planetsWithoutWater: count,
    }
  })

  return {
    loading: fetching,
    producers,
    films,
    error,
    data,
  } as UsePersonPageReturnProp
}

export default usePersonPage
