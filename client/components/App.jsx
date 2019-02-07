import React from 'react'
import {Hashroute as Router, Route} from 'react-router-dom'
import Home from './Home'
import Nav from './Nav'
import Starsign from './Starsign'

const App = () => {
  return (
    <Router>
      <Nav />
      <Route exact path="/" component={Home}/>
      <Route path="/:starsign" component={Starsign}/>
    </Router>
  )
}

export default App
