import styles from '../../styles/RoundButton.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

const RoundButton = (props) => {
  const {
    children,
    onClick,
    isWide,
    isFull,
    isFilled
  } = props

  return (
    <button className={cx({RoundButton, isWide, isFilled})} type='button' onClick={onClick}>
      {children}
    </button>
  )
}

export default RoundButton