import { useSelector } from 'hooks'
import { getTrelloSuccessCard } from 'state/actions/trello'

export const getPage = (target: string) => {
  const { loading, data } = useSelector(({ trello }) => trello);
  return { data: data.pages.cards.filter(({ name }) => name === target)[0], loading }
}

interface published {
  (cards: getTrelloSuccessCard[]): getTrelloSuccessCard[]  
}

export const published: published = (cards) => {
  return cards.filter(({ labels }) => {
    let published = true;
    if (labels) { labels.map(({ name }) => name === 'Staging' ? published = false : null); }
    return published;    
  });
}