import { useSelector } from 'hooks'
import { createDesc } from 'scripts/functions'
import { getTrelloSuccessCard } from 'state/actions/trello'

interface Desc {
  desc: string 
  more: getTrelloSuccessCard["more"]
  className?: string
}

export const Desc: React.FC<Desc> = ({ desc, more, className }) => {
  const { data } = useSelector(({ medium }) => medium);
  const { articles } = data;
  const content = !desc && more ? articles.filter(({ link }) => link === more.url)[0].description : desc;

  return <div className={className}>{ createDesc(content) }</div>
}