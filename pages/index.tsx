import type { NextPage } from 'next'
import styles from 'styles/pages/home.module.scss'
import { Hero } from 'components'
import Head from 'components/head'
import { home } from 'scripts/seo'

const Home:React.FC<NextPage> = () => {
  return (
    <div className={styles.container}>
      <Head {...home} />
      <Hero />
    </div>
  );
}

export default Home
