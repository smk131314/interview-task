import { useState } from 'react'
import Header from './Header'
import SummarySection from './SummarySection'
import NavTabs from './NavTabs'
import TabItem from './TabItem'
import RoundCard from './common/RoundCard'
import InfoTable from './InfoTable'
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
          <TabItem tabName={TAB_LIST[0]} selectedTab={selectedTab}><p>Overview</p></TabItem>
          <TabItem tabName={TAB_LIST[1]} selectedTab={selectedTab}><p>2</p></TabItem>
          <TabItem tabName={TAB_LIST[2]} selectedTab={selectedTab}><p>3</p></TabItem>
          <TabItem tabName={TAB_LIST[3]} selectedTab={selectedTab}><p>4</p></TabItem>
          <TabItem tabName={TAB_LIST[4]} selectedTab={selectedTab}><p>5</p></TabItem>
          <TabItem tabName={TAB_LIST[5]} selectedTab={selectedTab}><p>6</p></TabItem>
          <div className={styles.fixedCard}>
            <RoundCard title={'Overview'}><InfoTable infoObj={OVERVIEW_INFO}/></RoundCard>
            <RoundCard title={'Key information'}><InfoTable isVertical infoObj={KEY_INFO}/></RoundCard>
          </div>
        </section>
      </main>
    </div>
  )
}

export default CompanyDetailPage