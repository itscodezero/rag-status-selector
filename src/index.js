import React from 'react'
import styles from './styles.module.css'
import SelectDropdown from './dropdown'

const RAGStatus = (props) => {
  const RAGOptions = [
    { key: 'Red', value: '#e60000' },
    { key: 'Green', value: '#418600' },
    { key: 'Amber', value: '#eb9700' }
  ]
  const onGateRAGChange = (option) => {
    props.onSelect(option)
  }
  return (
    <div id='EditDropdownBox' className={styles.RAGbox}>
      <SelectDropdown
        onSelect={(option) => onGateRAGChange(option)}
        options={RAGOptions}
        defaultOption={props.defaultOption}
      />
    </div>
  )
}
export default RAGStatus
