import styles from '../../styles/RoundCard.module.scss'

const RoundCard = (props) => {
  const {
    children,
    title
  } = props

  return (
    <div className={styles.RoundCard}>
      <h1>{title}</h1>
      <div>{children}</div>
    </div>
  )
}

export default RoundCard