import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div className='nav'>
      <div><Link to ='/'>Back to home</Link></div>
      <div><Link to ='/puppy'>Show me a puppy!</Link></div>
    </div>
  )
}

export default Nav
