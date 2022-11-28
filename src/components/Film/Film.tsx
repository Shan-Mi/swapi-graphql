import { FilmProp } from '../PersonDetailPage/PersonDetailPage'
import styles from './Film.module.css'

const Film = ({ film }: { film: FilmProp }) => {
  return (
    <>
      <div className={styles.filmCardWrapper}>
        <h3>{film?.title}</h3>
        <p>Release Date: {film?.releaseDate}</p>
        <p>Number of planets without water: {film?.planetsWithoutWater}</p>
      </div>
    </>
  )
}

export default Film
