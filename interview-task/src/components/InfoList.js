import styles from '../styles/InfoList.module.scss'
import RoundButton from './common/RoundButton'

const InfoList = (props) => {
  const {
    infoList
  } = props

  const titleList = Object.keys(infoList[0]).filter(item => item !== 'id')

  return (
    <div className={styles.infoList}>
      <div className={styles.tableWrapper}>
        <table>
          <thead>
            <tr>
              {titleList.map(title => (
                <th key={title}>{title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {infoList.map(item => (
              <tr key={item.id}>
                {titleList.map(title => (
                  <td key={title}>{item[title]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <RoundButton isWide isFilled>
        <span>View more</span>
      </RoundButton>
    </div>
  )
}

export default InfoList