import styles from '../styles/InfoTable.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

const InfoTable = (props) => {
  const {
    isVertical,
    infoObj
  } = props

  const titleList = Object.keys(infoObj)

  return (
    <div className={cx('infoTable')}>
      <table className={cx({isVertical})}>
        <tbody>
          <tr>
            {titleList.map(title => (
              <th>{title}</th>
            ))}
          </tr>
          <tr>
            {titleList.map(title => (
              <td>{infoObj[title]}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default InfoTable