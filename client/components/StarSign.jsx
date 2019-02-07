import React from 'react'

export default class StarSign extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      starSigns: []
    }
  }

  render () {
    return (
      <div>
        <h1>Star signs yo</h1>
      </div>
    )
  }
}
