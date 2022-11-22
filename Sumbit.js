import React from 'react'
import { Link } from 'react-router-dom'
import './Sumbit.css'

function Sumbit() {
  return (
    <>
    
    <h1 className='head'>Your Response has been<br></br> Submitted Successfully....</h1>
    <div className='class'>
    <Link to='/Payment'><button className='sucessbut'>Go to payment</button></Link></div>
    </>
  )
}

export default Sumbit