import styles from 'styles/desktop/windows/spotify/index.module.scss'
import React from 'react'
import { Header, Cards } from 'components/desktop/windows/spotify'

interface Spotify {
  style?: React.CSSProperties
  year?: string  
}

const styleContainer = (year: string | undefined) => {
  switch (year) {
    case "2021": return styles.container_2021;
    default: return styles.container_2020;
  }
}

const Spotify = React.forwardRef<HTMLDivElement, Spotify>((props, ref) => {
  const { style, year } = props;

  return (
    <div ref={ref} className={styleContainer(year)} style={style}>
      {/* <a className={styles.skiplink} href="#trello">Skip to Projects</a> */}
      <Header {...props} />
      <Cards {...props} />
    </div>
  );
});

export * from './header'
export * from './cards'
export default Spotify