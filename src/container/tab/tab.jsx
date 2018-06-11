import React from 'react'
import styles from './tab.css'
class Tab extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div className={styles.container}>tab</div>
    )
  }
}
export default Tab