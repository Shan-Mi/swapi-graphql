import { Link } from 'react-router-dom'
import styles from './PersonListItem.module.css'

type PersonListItem = {
  name?: string
  id?: string
}

const PersonListItem = ({ name, id }: PersonListItem) => {
  return (
    <Link to={`/person/${id}`} className={styles.textLinkWrapper}>
      <div className={styles.personListWrapper}>{name}</div>
    </Link>
  )
}

export default PersonListItem
