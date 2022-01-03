import styles from 'styles/desktop/windows/spotify/cards.module.scss'
import { useSelector } from 'hooks'

interface Card {
  number: number
  name: string
  artist: {
    name: string
    url: string
  }
  url: string
}

const Card: React.FC<Card> = ({ number, name, artist }) => {
  return (
    <div className={styles.row}>
      <div className={styles.number}>
        { number }
      </div>
      <div className={styles.info}>
        <div className={styles.title}>
          { name }
        </div>
        <div className={styles.artist}>
          { artist.name }
        </div>
      </div>
    </div>
  )
}

interface Cards {
  year?: string
}

export const Cards: React.FC<Cards> = ({ year }) => {
  const { data } = useSelector(({ spotify }) => spotify);
  const result = () => {
    switch (year) {
      case "2021": return data._2021;
      default: return data._2020;
    }
  }
  const cards = result().tracks;

  return (
    <div className={styles.container}>
      {cards.map((card, index) => <Card key={index} number={index + 1} {...card} />) }
    </div>
  )
}