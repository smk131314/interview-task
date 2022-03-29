import styles from '../styles/SummarySection.module.scss'
import RoundButton from './common/RoundButton'

const SummarySection = (props) => {
  const { CompanyInfo } = props
  const {
    id,
    name,
    marketType,
    desc,
    logoLink,
    websiteLink,
    socialMediaLink
  } = CompanyInfo

  return (
    <section className={styles.summarySection}>
      <div>
        <h1>{name}</h1>
        <p className={styles.marketType}>{marketType}</p>
        <p className={styles.desc}>{desc}</p>
      </div>
      <div>
        <a href={websiteLink}><img className={styles.logo} src={logoLink} alt={`${name} logo`}/></a>
        <div className={styles.linkIconWrapper}>
          <a href={websiteLink}>
            <RoundButton isWide>
              <div className={styles.websiteLinkWrapper}>
                <img src='/images/north_east.svg' alt='link icon'/>
                <p>Website</p>
              </div>
            </RoundButton>
          </a>
          <RoundButton>
            <img src='/images/more_horiz.svg' alt='dot icon' />
          </RoundButton>
        </div>
      </div>
    </section>
  )
}

export default SummarySection