import React from 'react'
import { Link } from 'react-router-dom'
import './AreyouDocrPai.css'
function AreyouDocrPai() {
  return (
    <>
    <div className='adiv'>
    <h1 className='Arh'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Are You Doctor or Patient</h1>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link to='/Doc'><button className='ab'>Doctor</button></Link>Or
    <Link to='/'><button className='ab'>Patient</button></Link>
    </div>
    </>
  )
}

export default AreyouDocrPai