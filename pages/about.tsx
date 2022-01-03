import type { NextPage } from 'next'
import styles from 'styles/pages/about.module.scss'
import parse from 'html-react-parser'
import { getPage } from 'scripts/functions'

const About: React.FC<NextPage> = () => {
  const about = getPage("About");
  
  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <h1>{about && about.name}</h1>
        { about && parse(about.desc) }
        {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur voluptates necessitatibus, hic eveniet ea voluptate quis consequatur vero excepturi veritatis corrupti quos officia quia cupiditate minus incidunt amet eum officiis?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur voluptates necessitatibus, hic eveniet ea voluptate quis consequatur vero excepturi veritatis corrupti quos officia quia cupiditate minus incidunt amet eum officiis?</p> */}
      </div>
    </div>
  );
}

export default About
