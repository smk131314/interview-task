import styles from '../../styles/RoundCard.module.scss'

const RoundCard = (props) => {
  const {
    children,
    title
  } = props

  return (
    <div className={styles.RoundCard}>
      <h1>{title}</h1>
      {children}
    </div>
  )
}

export default RoundCard