import styles from '../../styles/RoundCard.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

const RoundCard = (props) => {
  const {
    children,
    title,
    isSmall
  } = props

  return (
    <div className={cx('RoundCard', {isSmall})}>
      <h1>{title}</h1>
      {children}
    </div>
  )
}

export default RoundCard