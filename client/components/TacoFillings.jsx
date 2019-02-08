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
        console.log(fillings)
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
    // {/* <p>1:{this.state.fillings[0][name]}</p>
    // <p>2:{this.state.fillings[1].name}</p>
    // <p>3:{this.state.fillings[2].name}</p>
    // <h1>Taco fillings:{this.state.fillings[3].name}</h1> */}

    )
  }
}
