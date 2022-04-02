import { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import SummarySection from './SummarySection'
import NavTabs from './NavTabs'
import TabItem from './TabItem'
import RoundCard from './common/RoundCard'
import InfoTable from './InfoTable'
import StockChart from './StockChart'
import styles from '../styles/CompanyDetailPage.module.scss'
import { COMPANY_SUMMARY, TAB_LIST, OVERVIEW_INFO, KEY_INFO } from '../constants/index'

const CompanyDetailPage = () => {
  const [selectedTab, setSelectedTab] = useState(TAB_LIST[0])

  return (
    <div className={styles.companyDetailPage}>
      <Header />
      <main>
        <a className={styles.backButton}><img src='/images/arrow_back.svg' alt='back icon'/><span>Back</span></a>
        <SummarySection CompanyInfo={COMPANY_SUMMARY} />
        <NavTabs selectedTab={selectedTab} onTabClick={setSelectedTab} tabList={TAB_LIST}/>
        <section className={styles.cardsSection}>
          <TabItem tabName={TAB_LIST[0]} selectedTab={selectedTab}><StockChart /></TabItem>
          <TabItem tabName={TAB_LIST[1]} selectedTab={selectedTab}><p>{TAB_LIST[1]}</p></TabItem>
          <TabItem tabName={TAB_LIST[2]} selectedTab={selectedTab}><p>{TAB_LIST[2]}</p></TabItem>
          <TabItem tabName={TAB_LIST[3]} selectedTab={selectedTab}><p>{TAB_LIST[3]}</p></TabItem>
          <TabItem tabName={TAB_LIST[4]} selectedTab={selectedTab}><p>{TAB_LIST[4]}</p></TabItem>
          <TabItem tabName={TAB_LIST[5]} selectedTab={selectedTab}><p>{TAB_LIST[5]}</p></TabItem>
          <div className={styles.fixedCard}>
            <RoundCard isSmall title={'Overview'}><InfoTable infoObj={OVERVIEW_INFO}/></RoundCard>
            <RoundCard isSmall title={'Key information'}><InfoTable isVertical infoObj={KEY_INFO}/></RoundCard>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default CompanyDetailPage