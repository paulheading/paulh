import styles from 'styles/desktop.module.scss'
import { useEffect, useRef } from 'react'
import { Credit, Folder, Npm, Gem, Topbar } from 'components/desktop'
import Spotify from 'components/desktop/windows/spotify'
import Trello from 'components/desktop/windows/trello'
import { Draggable } from 'gsap/dist/Draggable'
import gsap from 'gsap'

export const Desktop: React.FC = () => {
  const windows = useRef<HTMLDivElement>(null);
  const spotify_2020 = useRef<HTMLDivElement>(null);
  const spotify_2021 = useRef<HTMLDivElement>(null);
  const trello = useRef<HTMLDivElement>(null);

  useEffect(() => {    
    if (windows.current) {
      gsap.registerPlugin(Draggable);
      const { children } = windows.current;
      Array.from(children).forEach(child => Draggable.create(child));
    }
  },[windows]);
    
  return (
    <div className={styles.container}>
      <Topbar />
      <div className={styles.canvas}>
        <div className={styles.wrap}>
          <div ref={windows} className={styles.windows}>
            <Spotify ref={spotify_2020} year="2020" />
            <Spotify ref={spotify_2021} year="2021" />
            <Trello ref={trello} id="trello" />
            {/* <Npm /> */}
            {/* <Gem /> */}
          </div>
          <div className={styles.folders} id="folders">
            <Folder target={spotify_2020.current} closed>
              spotify 2020
            </Folder>
            <Folder target={spotify_2021.current}>
              spotify 2021
            </Folder>
            <Folder target={trello.current}>
              trello
            </Folder>
          </div>
        </div>
        <Credit />
      </div>
    </div>
  )
}

export * from './topbar'
export * from './npm'
export * from './gem'
export * from './folder'
export * from './credit'
