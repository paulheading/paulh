import styles from 'styles/desktop/gem.module.scss'
import { useEffect } from 'react'
import { useActions, useSelector } from 'hooks'

export const Gem: React.FC = () => {
  const { getGem } = useActions();
  const { loading, error, data } = useSelector(({ gem }) => gem);
  
  useEffect(() => {
    getGem();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.window_inner}>
        {loading && <h4>Loading...</h4>}
        {error && <h4>{error}</h4>}
        {data && <h4>{data.name} {data.downloads}</h4>}
      </div>
    </div>
  )
}