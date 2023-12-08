// Write your code here

import './index.css'

const TabItem = props => {
  const {setActivateTab, isActiveTab, TabDetails} = props
  const {tabId, displayText} = TabDetails

  const onClickChangeTabs = () => {
    setActivateTab(tabId)
  }

  const tabBtnClassName = isActiveTab ? 'active tab-button' : 'tab-button'

  return (
    <li className="tab-item">
      <button
        type="button"
        className={tabBtnClassName}
        onClick={onClickChangeTabs}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
