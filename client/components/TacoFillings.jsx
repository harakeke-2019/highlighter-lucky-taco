import React from 'react'
import { Route } from 'react-router-dom'
import { getTacoFillings } from '../tacoApi'

export default class Tacofillings extends React.Component {
  constructor () {
    super()
    this.state = {
      fillings: []
    }
  }

  componentDidMount () {
    getTacoFillings()
      .then(fillings => {
        this.setState({ fillings: fillings })
      })
      .catch(err => {
        console.error('Error:', err)
      })
  }

  render () {
    return (
      <React.Fragment>
        <h1>Your Taco Fillings are:</h1>
        {this.state.fillings.length > 0 && this.state.fillings.map(filling => {
          return (
            <div key={filling.id}>
              <p key={filling.name}>{filling.name}</p>
              <img src={`/images/${filling.image}`} width="200px" />
            </div>
          )
        })}
      </React.Fragment>
    )
  }
}
