import React from 'react'
import styles from './home.css'
import ReactGridLayout from 'react-grid-layout';
class home extends React.Component{
  constructor(props){
    super(props)
  }
 
  render(){
    var layout = [
      { i: 'a', x: 0, y: 0, w: 1, h: 2, static: true },
      { i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
      { i: 'c', x: 4, y: 0, w: 1, h: 2 }
    ];
    return (
      <div>
        <ReactGridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
          <div className="first" key="a"> a </div>
          <div className="second" key="b"> b </div>
          <div className="tree" key="c"> c </div>
        </ReactGridLayout>
      </div>
    
      )
    }
  }
export default home