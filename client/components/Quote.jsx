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
      <div className="quote">
        <h3>Today you should: <span className="bsquote">"{this.state.phrase}"</span></h3>
      </div>
    )
  }
}
