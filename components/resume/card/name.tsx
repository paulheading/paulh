import styles from 'styles/resume/card/name.module.scss'
import { getTrelloSuccessCard } from 'state/actions/trello'
import { removeHero } from 'state/actions/creators/trello/functions'

interface Name {
  name: getTrelloSuccessCard["name"]
  more?: getTrelloSuccessCard["more"]
  loading?: boolean
}

export const Name: React.FC<Name> = ({ more, name, loading }) => {
  const styleLoading = loading ? styles.loading : '';
  const printName = <span className={styleLoading}>{removeHero(name)}</span>;
  
  return more ? <a href={more.url} className={styles.link}>{printName}</a> : printName
}