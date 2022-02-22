import styles from 'styles/layout.module.scss'
import { Header, Marquee, Desktop, Email, Footer } from 'components'
import { useSelector, getTrello, setCount, setHero, getSpotify, getMedium, getNpm, getGem } from 'hooks'
import { env } from 'scripts/variables'

export const Layout:React.FC = ({ children }) => {

  if (!env.is('test')) {
    getTrello();
    setCount();
    setHero();
    getSpotify();
    getMedium();
    getNpm();
    getGem();
  }

  if (env.is('local')) {
    // console.log("state: ", useSelector(state => state))
  }
  
  return (
    <div className={styles.container}>
      <Header />
      { children }
      <Marquee />
      <Desktop />
      <Email />
      <Footer />
    </div>
  )
}
