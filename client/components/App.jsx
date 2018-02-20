import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

import {connect} from 'react-redux'

import Builder from './Builder'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      ingredients:[],
      showBuilder:false
    }
    //bind things here
  }
  handleClick(){
    this.setState({
      showBuilder:true
    })
  }
  //define functions

  render (){
    return(
      <div>
            <h1>Sand-which?</h1>
            <button onClick={this.handleClick}>Build your sandwich!</button>

            {this.state.showBuilder && <Builder />}
        </div>

    )
  }
}

export default connect()(App)
