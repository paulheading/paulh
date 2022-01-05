import type { NextPage } from 'next'
import styles from 'styles/pages/resume.module.scss'
import { useSelector } from 'hooks'
import parse from 'html-react-parser'
import { Row, Skills } from 'components/resume'
import { getPage } from 'scripts/functions'

const Resume: React.FC<NextPage> = () => {
  const { loading, data } = useSelector(({ trello }) => trello);
  const { projects, roles, education } = data;
  const styleLoading = loading ? styles.loading : "";
  const bio = getPage("Biography");
  
  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <div className={styles.page}>
          
          <div className={styles.double_row}>
            <div className={styles.column}>
              <h1>Paul Heading</h1>
            </div>
            <div className={styles.column}>
              <div>Hackney, London</div>
              <a href="mailto:hello@paulh.biz">hello@paulh.biz</a>
            </div>
          </div>

          <div className={styles.double_row}>
            <div className={styles.column}>
              <div className={styles.title_row}>
                <h3>{ bio.data.name }</h3>
              </div>
              <div className={styleLoading}>
                { parse(bio.data.desc) }
              </div>
            </div>
            <div className={styles.column}>
              <ul className={styles.list}>
                <li><a href="https://github.com/paulheading">Github</a></li>
                <li><a href="https://blog.paulh.biz/">Medium</a></li>
              </ul>
            </div>
          </div>

          <Row {...projects} />
          
          <Row {...roles} />

          <div className={styles.tag_row}>
            <div className={styles.title_row}>
              <h3>Skills</h3>
            </div>
            <Skills loading={loading} />
          </div>

          <Row {...education} />

        </div>
      </div>
    </div>
  );
}

export default Resume
