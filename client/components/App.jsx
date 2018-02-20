import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import {connect} from 'react-redux'

import Builder from './Builder'

import {getIngredients} from '../api'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      ingredientsByType:[],
      showBuilder:false
    }
    //bind things here
    this.handleClick = this.handleClick.bind(this)
    this.logIngredients = this.logIngredients.bind(this)
  }
  handleClick(){
    this.setState({
      showBuilder:true
    })
  }
  setIngredients(data){
    this.setState({ingredientsByType:data})
  }
  componentDidMount() {
    getIngredients(this.logIngredients, 'bread')
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
