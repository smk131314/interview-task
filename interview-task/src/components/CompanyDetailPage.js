import Header from './Header'
import SummarySection from './SummarySection'
import NavTabs from './NavTabs'
import styles from '../styles/CompanyDetailPage.module.scss'
import { COMPANY_SUMMARY } from '../constants/index'

const CompanyDetailPage = () => {
  return (
    <div className={styles.companyDetailPage}>
      <Header />
      <main>
        <a className={styles.backButton}><img src='/images/arrow_back.svg' alt='back icon'/><span>Back</span></a>
        <SummarySection CompanyInfo={COMPANY_SUMMARY} />
        <NavTabs></NavTabs>
        <section>
          tab item
        </section>
      </main>
    </div>
  )
}

export default CompanyDetailPage