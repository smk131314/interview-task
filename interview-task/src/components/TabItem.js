import RoundCard from './common/RoundCard'

const TabItem = (props) => {
  const {
    children,
    tabName,
    selectedTab
  } = props

  const isSelected = tabName === selectedTab

  return (
    <>
      {isSelected ? <RoundCard title={tabName}>{children}</RoundCard> : <></>}
    </>
  )
}

export default TabItem