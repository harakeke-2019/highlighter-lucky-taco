import React from 'react'
import {getPuppy} from '../puppyApi'

export default class Puppy extends React.Component {
  constructor () {
    super()
    this.state = {
      puppy: ''
    }
  }

  componentDidMount () {
    getPuppy()
      .then(res => {
        this.setState({puppy: res.message})
      })
      .catch(err => {
        console.error('Error:', err)
      })
  }

  render () {
    return (
      <div className='puppy'>
        <div className='puppyImage'>
          <img src={this.state.puppy}></img>
        </div>
      </div>
    )
  }
}
