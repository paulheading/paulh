import styles from 'styles/desktop/windows/trello/index.module.scss'
import React from 'react'
import { Header, Cards, Footer } from 'components/desktop/windows/trello'

interface Trello {
  style?: React.CSSProperties
}

const Trello = React.forwardRef<HTMLDivElement, Trello>((props, ref) => {
  const { style } = props;
  return (
    <div ref={ref} className={styles.container} style={style}>
      {/* <a className={styles.skiplink} href="#trello">Skip to Projects</a> */}
      <Header />
      <Cards />
      <Footer />
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
