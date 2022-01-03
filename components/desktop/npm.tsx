import styles from 'styles/desktop/npm.module.scss'
import { useEffect } from 'react'
import { useActions, useSelector } from 'hooks'

export const Npm: React.FC = () => {
  const { getNpm } = useActions();
  const { loading, error, data } = useSelector(({ npm }) => npm);

  useEffect(() => {
    getNpm();
  }, []);

  return (
    <div className={styles.container}>
      {loading && <h4>Loading...</h4>}
      {error && <h4>{error}</h4>}
      {data && <h4>{data.name} {data.downloads}</h4>}
    </div>
  )
}