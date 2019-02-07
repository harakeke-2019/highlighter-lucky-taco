import React from 'react'
import {Link} from 'react-router-dom'

export default class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      starSigns: []
    }
  }

  render () {
    return (
      <div>
        <div className='button'><Link to ='/taurus'><h1>Taurus</h1><br/>May 21 - June 20</Link></div>
        <div className='button'><Link to ='/gemini'><h1>Gemini</h1><br/>May 21 - June 20</Link></div>
        <div className='button'><Link to ='/cancer'><h1>Cancer</h1><br/>June 21 - July 22</Link></div>
        <div className='button'><Link to ='/leo'><h1>Leo</h1><br/>July 23 - August 22</Link></div>
        <div className='button'><Link to ='/aries'><h1>Aries</h1><br/>March 21 - April 19</Link></div>
        <div className='button'><Link to ='/virgo'><h1>Virgo</h1><br/>August 23 - September 22</Link></div>
        <div className='button'><Link to ='/libra'><h1>Libra</h1><br/>September 23 - October 22</Link></div>
        <div className='button'><Link to ='/scorpio'><h1>Scorpio</h1><br/>October 23 - November 21</Link></div>
        <div className='button'><Link to ='/sagitarius'><h1>Sagitarius</h1><br/>November 22 - December 21</Link></div>
        <div className='button'><Link to ='/capricorn'><h1>Capricorn</h1><br/>December 22 - January 19</Link></div>
        <div className='button'><Link to ='/aqurius'><h1>Aquarius</h1><br/>January 20 - February 18</Link></div>
        <div className='button'><Link to ='/pisces'><h1>Pisces</h1><br/>February 19 - March 20</Link></div>
        {/* {this.state.starSigns.map(sign => {
          return <h1 key={sign.name}> {sign.name} </h1>
        })
        } */}
      </div>
    )
  }
}
