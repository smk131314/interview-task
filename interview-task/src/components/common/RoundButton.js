import styles from '../../styles/RoundButton.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

const RoundButton = (props) => {
  const {
    children,
    onClick,
    isWide,
  } = props

  return (
    <button className={cx({RoundButton, isWide: isWide})} type='button' onClick={onClick}>
      {children}
    </button>
  )
}

export default RoundButton