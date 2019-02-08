import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Home from './Home'
import Nav from './Nav'
import Starsign from './StarSign'
import Puppy from './Puppy'
import AddFilling from './AddFilling'

const App = () => {
  return (
    <Router>
      <div>
        <Nav />
        <Route exact path="/" component={Home}/>
        <Route path="/star-sign/:starSign" component={Starsign}/>
        <Route exact path="/puppy" component={Puppy}/>
        <Route exact path="/add-filling" component={AddFilling}/>
      </div>
    </Router>
  )
}

export default App
