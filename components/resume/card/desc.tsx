import styles from 'styles/resume/card/desc.module.scss'
import { useSelector } from 'hooks'
import { createDesc } from 'scripts/functions'
import { getTrelloSuccessCard } from 'state/actions/trello'

interface Desc {
  desc: string 
  more: getTrelloSuccessCard["more"]
  className?: string
  loading?: boolean
}

export const Desc: React.FC<Desc> = ({ desc, more, className, loading }) => {
  const { data } = useSelector(({ medium }) => medium);
  const { articles } = data;
  const content = !desc && more ? articles.filter(({ link }) => link === more.url)[0].description : desc;
  const styleLoading = loading ? styles.loading : "";

  return <div className={`${className} ${styleLoading}`}>{ createDesc(content) }</div>
}