import React from 'react'
import {Link} from 'react-router-dom'
import {getQuote} from '../quoteApi'

export default class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      phrase: ''
    }
  }

  componentDidMount () {
    getQuote()
      .then(quote => {
        this.setState({phrase: quote.phrase})
      })
      .catch(err => {
        console.error('Error:', err)
      })
  }

  render () {
    return (
      <div>
        <h1>{this.state.phrase}</h1>
      </div>
    )
  }
}
