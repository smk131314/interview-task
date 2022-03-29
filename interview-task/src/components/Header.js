import styles from '../styles/Header.module.scss'
import { HEADER_MENU_LIST } from '../constants/index'

const Header = () => {
  return (
    <header>
      <a href='/'>
        <img src='/images/logo.svg' alt='logo' />
      </a>
      <ul className={styles.menuNavigation}>
        {HEADER_MENU_LIST.map(menu => (
          <li key={menu.id}><a href={menu.link}>{menu.title}</a></li>
        ))}
      </ul>
      <img className={styles.mobileMenuIcon} src='/images/menu.svg' alt='menu icon'/>
    </header>
  )
}

export default Header