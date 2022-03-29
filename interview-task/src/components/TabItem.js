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
      {isSelected ? <RoundCard>{children}</RoundCard> : <></>}
    </>
  )
}

export default TabItem