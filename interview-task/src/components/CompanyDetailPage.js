import { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import SummarySection from './SummarySection'
import NavTabs from './NavTabs'
import TabItem from './TabItem'
import RoundCard from './common/RoundCard'
import InfoTable from './InfoTable'
import StockChart from './StockChart'
import InfoList from './InfoList'
import InfoText from './InfoText'
import styles from '../styles/CompanyDetailPage.module.scss'
import { COMPANY_SUMMARY, OVERVIEW_INFO, KEY_INFO, LATEST_TRADES, LATEST_ANNOUNCEMENTS, ADDRESS_LIST, CONTACT_LIST, REASERCH_LIST } from '../constants/index'

const TAB_COMPONENT = {
  'Overview': <StockChart />,
  'Latest Trades': <InfoList infoList={LATEST_TRADES} />,
  'Latest Announcements': <InfoList infoList={LATEST_ANNOUNCEMENTS} />,
  'Address': <InfoText infoList={ADDRESS_LIST} infoTitle='Address' />,
  'Contacts': <InfoText infoList={CONTACT_LIST} infoTitle='Contacts' />,
  'Research': <InfoText infoList={REASERCH_LIST} infoTitle='Research' />
}
const TAB_LIST = Object.keys(TAB_COMPONENT)

const CompanyDetailPage = () => {
  const [selectedTab, setSelectedTab] = useState(TAB_LIST[0])

  const renderTabItem = (tabName) => {
    return (
      <TabItem key={tabName} tabName={tabName} selectedTab={selectedTab}>
        {TAB_COMPONENT[tabName]}
      </TabItem>
    )
  }

  return (
    <div className={styles.companyDetailPage}>
      <Header />
      <main>
        <a className={styles.backButton}><img src='/images/arrow_back.svg' alt='back icon'/><span>Back</span></a>
        <SummarySection CompanyInfo={COMPANY_SUMMARY} />
        <RoundCard isSmall title={'Overview'}><InfoTable infoObj={OVERVIEW_INFO}/></RoundCard>
        <NavTabs selectedTab={selectedTab} onTabClick={setSelectedTab} tabList={TAB_LIST}/>
        <section className={styles.bottomSection}>
          <div className={styles.cardTabsWrapper}>
            {TAB_LIST.map((tab) => (renderTabItem(tab)))}
          </div>
          <div className={styles.fixedCardWrapper}>
            <RoundCard isSmall title={'Key information'}><InfoTable isVertical infoObj={KEY_INFO}/></RoundCard>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default CompanyDetailPage