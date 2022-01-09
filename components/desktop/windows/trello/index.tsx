import styles from 'styles/desktop/windows/trello/index.module.scss'
import React from 'react'
import { Header, Cards, Footer } from 'components/desktop/windows/trello'

interface Trello {
  style?: React.CSSProperties
  id?: string
}

const Trello = React.forwardRef<HTMLDivElement, Trello>((props, ref) => {
  const { style, id } = props;
  return (
    <div ref={ref} className={styles.container} style={style} id={id}>
      <div className={styles.wrap}>
        <a className={styles.skiplink} href="#folders">Skip to Folders</a>
        <div className={styles.window_inner}>
          <Header />
          <Cards />
          <Footer />
        </div>
      </div>
    </div>
  );
});

export * from './header'
export * from './cards'
export * from './footer'
export * from './empty'
export * from './plus'
export * from './more'
export default Trello
