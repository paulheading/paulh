import styles from 'styles/resume/card/name.module.scss'
import { getTrelloSuccessCard } from 'state/actions/trello'
import { removeHero } from 'state/actions/creators/trello/functions'

interface Name {
  name: getTrelloSuccessCard["name"]
  more?: getTrelloSuccessCard["more"]
}

export const Name: React.FC<Name> = ({ more, name }) => {
  const printName = <span className={styles.name}>{removeHero(name)}</span>;
  return more ? <a href={more.url} className={styles.link}>{printName}</a> : printName
}