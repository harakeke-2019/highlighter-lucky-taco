import React from 'react'
import {Link} from 'react-router-dom'
import {getStarSigns} from '../starSignApi'

export default class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      starSigns: []
    }
  }

  componentDidMount () {
    getStarSigns()
      .then(starSigns => {
        this.setState({ starSigns: starSigns })
      })
      .catch(err => {
        console.error('Error:', err)
      })
  }

  render () {
    return (
      <div>
        {this.state.starSigns.length > 0 && this.state.starSigns.map(sign => {
          return <div className='button' key={sign.name}><Link to ={`/star-sign/${sign.name}`}><h1>{sign.name}</h1><br/>{sign.date}</Link></div>
        })
        }
      </div>
    )
  }
}
