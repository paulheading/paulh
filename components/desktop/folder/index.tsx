import styles from 'styles/desktop/folder.module.scss'
import { useState } from 'react'
import { Closed, Open } from 'components/desktop/folder'
import gsap from 'gsap'

interface Folder {
  target: HTMLDivElement | null
}

export const Folder: React.FC<Folder> = ({ children, target }) => {
  const [closed, setClosed] = useState(false);
  const tl = gsap.timeline({ defaults: { duration: 0.2, ease: "power1.in" } });

  const toggleState = () => {
    if (!closed && target) {
      tl.to(target,{ scale: 0.5 }).set(target,{ opacity: 0, display: "none" });
    } else {
      tl.set(target,{ clearProps: "display", opacity: 1 }).to(target,{ scale: 1 });
    }
    setClosed(!closed)
  }

  return (
    <button className={styles.button} onClick={toggleState}>
      { closed ? <Closed /> : <Open /> }
      <h6>
        <div className={styles.title}>
          { children }
        </div>
      </h6>
    </button>
  )
}

export * from './closed'
export * from './open'


