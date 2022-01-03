import { useEffect } from 'react'
import { useActions, useSelector } from 'hooks'
import styles from 'styles/resume/skills.module.scss'
import { Badge } from 'components'

export const Skills: React.FC = () => {
  const { getTreehouse } = useActions();
  const { data } = useSelector(({ treehouse }) => treehouse);
  const skill = {
    keys: Object.keys(data),
    values: Object.values(data),
  };

  useEffect(() => {
    getTreehouse();
  }, []);

  return (
    <div className={styles.skills}>
      {data && skill.keys.map((key, index) => {
        return (
          <Badge key={key} color="purple" className={styles.badge}>
            { key } { skill.values[index] }
          </Badge>
        )
      })}
    </div>
  );
}
