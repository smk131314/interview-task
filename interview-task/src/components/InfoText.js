import styles from '../styles/InfoText.module.scss'

const InfoText = (props) => {
  const {
    infoList,
    infoTitle
  } = props

  const isEmptyInfo = !infoList.length

  const renderInfo = () => (
    infoList.map(item => (
      <div key={item.id}>
        <h4>{item.title}</h4>
        <p>{item.content}</p>
      </div>
    ))
  )

  return (
    <div className={styles.infoText}>
      {isEmptyInfo
        ? <p>I'm sorry there is no {infoTitle} for this company.</p>
        : renderInfo()}
    </div>
  )
}

export default InfoText