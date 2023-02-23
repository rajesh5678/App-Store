// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, setActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const createClass = isActive ? 'active' : 'deactive'

  const onClickTabButton = () => {
    setActiveTabId(tabId)
  }

  return (
    <li className="tab-item">
      <button className={createClass} onClick={onClickTabButton} type="button">
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
