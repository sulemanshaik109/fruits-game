import './index.css'

const TabItem = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {tabId, displayText} = tabDetails

  const activeTabClassName = isActive ? 'active-tab-btn' : ''

  const onClickTab = () => {
    clickTabItem(tabId)
  }

  return (
    <li className="tab-item">
      <button
        className={`tab-btn ${activeTabClassName}`}
        type="button"
        onClick={onClickTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
