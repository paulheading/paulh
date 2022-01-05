import styles from 'styles/resume/card/status.module.scss'
import moment from 'moment'

interface Status {
  dueComplete: boolean 
  due: string
  start: string
  loading?: boolean
}

export const Status: React.FC<Status> = ({ dueComplete, due, start, loading }) => {
  const date = (target: string) => moment(target).format(`MMM YYYY`);
  const styleLoading = loading ? styles.loading : "";
  return <span className={styleLoading}>{ dueComplete ? `Finished: ${date(due)}` : `Started: ${date(start)}` }</span>
}