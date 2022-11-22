import React from 'react'
import { Link } from 'react-router-dom'
import './Typevisit'
import './Typevisit.css'

function Typevisit() {
  return (
    <>
    <div className='typebox'>
    <div className='typebu'>
    <Link to='/Time'><button className='typebut'>Normal visit</button></Link><br></br><br></br>
    <Link to='/Emer'><button className='typebut'>Emergency visit</button></Link>
    </div>
    </div>
    </>
  )
}

export default Typevisit