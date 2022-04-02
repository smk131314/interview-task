import styles from '../styles/Footer.module.scss'
import { FOOTER_LINK_LIST, HEADER_MENU_LIST } from '../constants'

const Footer = () => {

  return (
    <footer className={styles.mainFooter}>
      <div>
        <ul>
          {FOOTER_LINK_LIST.map((link) => (
            <li key={link.id}>
              <a href={link.link} target="_blank">
                {link.iconPath
                  ? <img src={link.iconPath} alt={`${link.title} icon`}/>
                  : link.title}
              </a>
            </li>
          ))}
        </ul>
        <p>© Aquis Exchange 2022. All rights reserved.</p>
      </div>
      <ul>
        {HEADER_MENU_LIST.map((menu) => (
          <li key={menu.id}><a href={menu.link}>{menu.title}</a></li>
        ))}
      </ul>
    </footer>
  )
}

export default Footer