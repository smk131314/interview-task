import Header from './Header'
import SummarySection from './SummarySection'
import NavTabs from './NavTabs'

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