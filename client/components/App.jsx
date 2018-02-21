import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import {connect} from 'react-redux'

import Builder from './Builder'

import {getIngredients} from '../api'
import {addIngredient} from '../actions/sandwiches'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      ingredients:[],
      showBuilder:false,
      types:['bread', 'veg', 'filling', 'cheese'],
      currentType: 0,
      count:0,
      showSandwich:true
    }
    //bind things here
    this.handleClick = this.handleClick.bind(this)
    this.setIngredients = this.setIngredients.bind(this)
    this.selectIngredient = this.selectIngredient.bind(this)
    this.showTheBuilder = this.showTheBuilder.bind(this)
    this.nextIngredient = this.nextIngredient.bind(this)
  }

  showTheBuilder(){
    this.setState({showBuilder:true})
    // console.log(this.state.showBuilder)
  }

  nextIngredient(){
    this.state.currentType++
  }

  handleClick(e){
    if (this.state.currentType <3) {
    // this.selectIngredient(e)
    this.nextIngredient()
    getIngredients(this.setIngredients, this.state.types[this.state.currentType])}
    else (this.setState({showSandwich:true}))
  }

  setIngredients(data){
    this.setState({ingredients:data})
  }

  selectIngredient(e){
    console.log(this.props.dispatch)
    this.props.dispatch(addIngredient(e.target.value))
  }

 
  componentDidMount() {
    getIngredients(this.setIngredients, this.state.types[this.state.currentType])
  }
  //define functions

  render (){
    return(
      <div>
            <h1>Sand-which?</h1>
            <button onClick={this.showTheBuilder}>Build your sandwich!</button>

            {this.state.showBuilder && <Builder ingredients ={this.state.ingredients} selectIngredient={this.selectIngredient} handleClick={this.handleClick}/>}
      </div>

    )
  }
}

export default connect()(App)
