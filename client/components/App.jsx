import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Pets from './Pets'

import {connect} from 'react-redux'
import {getPets} from '../actions/pets'
import {getSpecies} from '../actions/species'

class App extends React.Component {
  componentDidMount() {
    console.log("mount")
    this.props.dispatch(getPets())
    this.props.dispatch(getSpecies())
  }
  render() {
    return <Router>
      <div className='app-container'>
        <h1>Hello World</h1>
        <Route exact path="/" component={Pets} />
      </div>
    </Router>
  }
}

export default connect()(App)
