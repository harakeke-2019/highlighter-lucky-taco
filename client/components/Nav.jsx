import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div className='nav'>
      <div className='navButtons'><Link to ='/'>Back to home</Link></div>
      <div className='navButtons'><Link to ='/puppy'>Show me a puppy!</Link></div>
      <div className='navButtons'><Link to ='/add-filling'>Add filling</Link></div>
    </div>
  )
}

export default Nav
