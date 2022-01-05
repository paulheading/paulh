import moment from 'moment'
import { Loading } from 'components'

interface Status {
  dueComplete: boolean 
  due: string
  start: string
  loading?: boolean
}

export const Status: React.FC<Status> = ({ dueComplete, due, start, loading }) => {
  const date = (target: string) => moment(target).format(`MMM YYYY`);
  return loading ? <Loading lines={[0.6]} /> : <span>{ dueComplete ? `Finished: ${date(due)}` : `Started: ${date(start)}` }</span>
}