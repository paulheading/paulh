import styles from 'styles/resume/card.module.scss'
import { Badge } from 'components'
import { getTrelloSuccessCard } from 'state/actions/trello'
import moment from 'moment'
import parse from 'html-react-parser'
import { Name } from 'components/resume/card'
import { useSelector } from 'hooks'

const createDesc = (target: string) => {
  const para = target.match(/<p>(.*?)<\/p>/g);
  
  if (para) {
    const array = para[0].slice(3, -4).split(" ");
    const words = array.filter((_, index) => index < 30).join(" ");
    const dots = words.slice(-1) === '.' ? '..' : '...';
    return parse(words + dots);  
  }
}

const printDesc = (target: string, more: getTrelloSuccessCard["more"]) => {
  if (!target) {
    const { loading, data } = useSelector(({ medium }) => medium);
    const { articles } = data;
    
    if (!loading && more) {
      target = articles.filter(({ link }) => link === more.url)[0].description;
    }
  }

  return createDesc(target);
}

export const Card: React.FC<getTrelloSuccessCard> = ({ name, labels, dueComplete, due, start, desc, more }) => {
  const printLabels = () => labels && labels.map(({ name, color }, index) => <Badge key={index} color={color} className={styles.badge}>{name}</Badge>)
  const printDate = (target: string) => moment(target).format(`MMM YYYY`);
  const printStatus = dueComplete ? `Finished: ${printDate(due)}` : `Started: ${printDate(start)}`;
  const nameData = { name, more };
  
  return (
    <div>
      {printLabels()}
      <h4>
        <Name {...nameData} />
      </h4>
      <h6 className={styles.date}>{printStatus}</h6>
      <div className={styles.copy}>
        { printDesc(desc, more) }
      </div>
    </div>
  )
}

export * from './name'
