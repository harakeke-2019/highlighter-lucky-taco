import React from 'react'

import TacoFillings from './TacoFillings'
import Quote from './Quote'

export default class StarSign extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      sign: props.match.params.starSign
    }
  }

  render () {
    return (
      <div>
        <h1>{this.state.sign}</h1>
        <TacoFillings />
        <Quote />
      </div>
    )
  }
}
