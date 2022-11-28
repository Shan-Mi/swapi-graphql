import { useState } from 'react'
import { PersonQuery } from '../../generated/graphql'
import useRouter from '../../hooks/useRouter'
import Film from '../Film/Film'
import styles from './PersonDetailPage.module.css'

type PersonDetailPageProp = {
  films?: FilmProp[]
  data: PersonQuery
  producers?: {
    [key: string]: number
  }
}

export type FilmProp = {
  title?: string
  releaseDate?: string
  planetsWithoutWater?: number
}

const PersonDetailPage = ({
  films = [],
  data,
  producers,
}: PersonDetailPageProp): JSX.Element => {
  const height = data.person?.height ?? 'unknown'
  const filmsLength = films.length
  const [current, setCurrent] = useState(0)
  const { navigate } = useRouter()

  const handlePrevClick = () => {
    if (current === 0) {
      setCurrent(filmsLength - 1)
      return
    }
    setCurrent((prev) => prev - 1)
  }
  const handleNextClick = () => {
    if (current === filmsLength - 1) {
      setCurrent(0)
      return
    }
    setCurrent((prev) => prev + 1)
  }

  const Buttons = () => (
    <div className={styles.buttonsWrapper}>
      <button onClick={handlePrevClick} className={styles.button}>
        Prev
      </button>
      <button onClick={handleNextClick} className={styles.button}>
        Next
      </button>
    </div>
  )

  const handleGoBack = () => navigate('/')

  return (
    <>
      <h1>{data?.person?.name}</h1>
      <div className={styles.producersWrapper}>
        {producers && (
          <ul title="Producers and Cooperation times">
            {Object.entries(producers).map(([key, value]) => (
              <li key={`${key}-${value}`}>{`${key}: ${value}`}</li>
            ))}
          </ul>
        )}
      </div>

      <p>Species Average Height: {height}</p>

      <div>
        <Film film={films[current]} />
        {filmsLength > 1 && <Buttons />}
      </div>

      <button onClick={handleGoBack} className={styles.button}>
        Go Back
      </button>
    </>
  )
}

export default PersonDetailPage
