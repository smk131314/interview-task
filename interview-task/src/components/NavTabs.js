import styles from '../styles/NavTabs.module.scss'
import { TAB_LIST } from '../constants'

const NavTabs = () => {
  return (
    <ul className={styles.navTabs}>
      {TAB_LIST.map(tab => (
        <li key={tab}>{tab}</li>
      ))}
    </ul>
  )
}

export default NavTabs