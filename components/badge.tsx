import styles from 'styles/badge.module.scss'

interface Badge {
  className?: string
  color?: string
}

const styleColor = (color: string | undefined) => {
  switch (color) {
    case 'purple': return styles.purple;
    case 'green': return styles.green;
    case 'blue': return styles.blue;
    default: return null
  }
}

export const Badge: React.FC<Badge> = ({ children, color, className }) => (
  <div className={`${styles.badge} ${styleColor(color)} ${className}`}>
    { children }
  </div>
)