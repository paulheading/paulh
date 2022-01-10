import styles from 'styles/desktop/windows/spotify/header.module.scss'
import { Spotify } from 'logos'
import { useSelector } from 'hooks'
import Image from 'next/image'

interface Header {
  year?: string
}

export const Header: React.FC<Header> = ({ year }) => {
  const { data } = useSelector(({ spotify }) => spotify);
  const result = () => {
    switch (year) {
      case "2021": return data._2021;
      default: return data._2020;
    }
  }
  const { name, owner, url, image } = result();

  return (
    <div className={styles.container}>
      <div className={styles.link}>
        { image.length ? <Image width="80" height="80" src={image} alt={name} /> : null }
      </div>
      <div className={styles.wrap}>
        <div>
          <div>
            <a href={url} className={styles.name}>{ name }</a>
          </div>
          <div>
            <a href={owner.url} className={styles.owner}>{ owner.name }</a>
          </div>
        </div>
        <div>
          <Spotify />
        </div>
      </div>
    </div>
  )
}