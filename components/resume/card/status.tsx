import moment from 'moment'

interface Status {
  dueComplete: boolean 
  due: string
  start: string
}

export const Status: React.FC<Status> = ({ dueComplete, due, start }) => {
  const date = (target: string) => moment(target).format(`MMM YYYY`);
  return <span>{ dueComplete ? `Finished: ${date(due)}` : `Started: ${date(start)}` }</span>
}