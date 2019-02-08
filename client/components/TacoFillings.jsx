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
      <div className="taco">
        <h1>Your Lucky Taco Fillings are:</h1>
        {this.state.fillings.length > 0 && this.state.fillings.map(filling => {
          return (
            <div className="tacoFillings" key={filling.id}>
              <img src={`/images/${filling.image}`} width="200px" />
              <p key={filling.name} className="filling">{filling.name}</p>
            </div>
          )
        })}
      </div>
    )
  }
}
