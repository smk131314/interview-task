import styles from '../styles/NavTabs.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

const NavTabs = (props) => {
  const {
    selectedTab,
    onTabClick,
    tabList
  } = props

  return (
    <ul className={cx('navTabs')}>
      {tabList.map(tab => (
        <li
          className={cx({'selected': selectedTab === tab})}
          onClick={() => onTabClick(tab)}
          key={tab}
        >
          {tab}
        </li>
      ))}
    </ul>
  )
}

export default NavTabs