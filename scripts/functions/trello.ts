import { useSelector } from 'hooks'

export const getPage = (target: string) => {
  const { data } = useSelector(({ trello }) => trello);
  return data.pages.cards.filter(({ name }) => name === target)[0];
}