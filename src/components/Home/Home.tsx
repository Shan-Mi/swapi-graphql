import PersonListItem from '../PersonListItem/PersonListItem'
import styles from './Home.module.css'

type HomeProp = {
  people: PersonProp[]
}

type PersonProp = {
  __typename?: 'Person'
  id: string
  name?: string
  height?: number
}

const Home = ({ people }: HomeProp): JSX.Element => {
  return (
    <>
      <h1 className={styles.title}>People | swapi</h1>

      <div className={styles.homeWrapper}>
        {people?.map((person: PersonProp) => (
          <PersonListItem
            name={person?.name}
            id={person?.id}
            key={person?.id}
          />
        ))}
      </div>
    </>
  )
}

export default Home
