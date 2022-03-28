import Header from './Header'
import SummarySection from './SummarySection'
import NavTabs from './NavTabs'
import styles from '../styles/CompanyDetailPage.module.scss'

const CompanyDetailPage = () => {
  return (
    <div>
      <Header />
      <main>
        <SummarySection></SummarySection>
        <NavTabs></NavTabs>
        <section>
          tab item
        </section>
      </main>
    </div>
  )
}

export default CompanyDetailPage