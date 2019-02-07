import React from 'react'

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
        <button href='/aries'><h1>Aries</h1><br/>March 21 - April 19</button>
        <button href='/taurus'><h1>Taurus</h1><br/>April 20 - May 20</button>
        <button href='gemini'><h1>Gemini</h1><br/>May 21 - June 20</button>
        <button href='cancer'><h1>Cancer</h1><br/>June 21 - July 22</button>
        <button href='leo'><h1>Leo</h1><br/>July 23 - August 22</button>
        <button href='virgo'><h1>Virgo</h1><br/>August 23 - September 22</button>
        <button href='libra'><h1>Libra</h1><br/>September 23 - October 22</button>
        <button href='scorpio'><h1>Scorpio</h1><br/>October 23 - November 21</button>
        <button href='sagitarius'><h1>Sagitarius</h1><br/>November 22 - December 21</button>
        <button href='capricorn'><h1>Capricorn</h1><br/>December 22 - January 19</button>
        <button href='aqurius'><h1>Aquarius</h1><br/>January 20 - February 18</button>
        <button href='pisces'><h1>Pisces</h1><br/>February 19 - March 20</button>
        {/* {this.state.starSigns.map(sign => {
          return <h1 key={sign.name}> {sign.name} </h1>
        })
        } */}
      </div>
    )
  }
}
