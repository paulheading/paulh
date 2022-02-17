import type { NextPage } from 'next'
import styles from 'styles/pages/about.module.scss'
import Head from 'components/head'
import { notfound } from 'scripts/seo'

const About: React.FC<NextPage> = () => {  
  return (
    <div className={styles.container}>
      <Head {...notfound} />
      <div className={`${styles.wrap} text-align-center`}>
        <h1>Page Not Found 🤬</h1>
        <h4>uh oh! where da page gone?</h4>
      </div>
    </div>
  );
}

export default About
