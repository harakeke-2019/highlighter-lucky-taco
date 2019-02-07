import React from 'react'
// import { Route } from 'react-router-dom'
import { getTacos } from '../../server/db'

export default class Tacofillings extends React.Component {
  constructor () {
    super()
    this.state = {
      fillings: ''
    }
  }

  componentDidMount () {
    // const fillingId = 1
    // getTacos()
    //   .then(person => {
    //     this.setState({ fllings: name })
    //   })
    //   .catch(err => {
    //     console.error('Error:', err)
    //   })
  }

  render () {
    return (
      <div>
        <h1>Taco fillings:{this.state.fillings}</h1>
      </div>
    )
  }
}
