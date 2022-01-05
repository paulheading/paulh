import type { NextPage } from 'next'
import styles from 'styles/pages/about.module.scss'
import parse from 'html-react-parser'
import { getPage } from 'scripts/functions'

const About: React.FC<NextPage> = () => {
  const { loading, data } = getPage("About");
  const styleLoading = loading ? styles.loading : "";
  
  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <h1>{data.name}</h1>
        <div className={styleLoading}>
          {parse(data.desc) }
        </div>
      </div>
    </div>
  );
}

export default About
