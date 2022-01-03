import styles from 'styles/pages/resume.module.scss'
import { Card } from 'components/resume'
import { getTrelloSuccessList, getTrelloSuccessCard } from 'state/actions/trello'

interface Row {
  list: getTrelloSuccessList
  cards: getTrelloSuccessCard[] 
}

export const Row: React.FC<Row> = ({ list, cards }) => {
  
  const printCards = () => {
    return cards.map((card, index) => {
      if (index === 3) {
        return null;        
      }

      return (
        <div key={index} className={styles.column}>
          <Card {...card} />
        </div>
      )
    });
  }  

  return (
    <div className={styles.triple_row}>
      <div className={styles.title_row}>
        <h3>{list.name}</h3>
      </div>
      { printCards() }
    </div>
  )
}
