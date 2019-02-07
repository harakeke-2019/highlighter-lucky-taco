import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Home from './Home'
// import Nav from './Nav'
import Starsign from './StarSign'

const App = () => {
  return (
    <Router>
      <div>
        {/* <Nav /> */}
        <Route exact path="/" component={Home}/>
        <Route path="/:starSign" component={Starsign}/>
      </div>
    </Router>
  )
}

export default App
