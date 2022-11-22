import React from 'react'
import {Link} from 'react-router-dom'
import './Emer.css'
function Emer() {
  return (
    <>
    <div className='div119'>
    <h1>Emergency Form</h1>
    <h2>Fill Your Details</h2>
    <input type="text" placeholder='Name' className='Em'></input><br></br><br></br>
    <input type="text" placeholder='Age' className='Em'></input><br></br><br></br>
    <input type="text" placeholder='Gender' className='Em'></input><br></br><br></br>
    <input type="Date" placeholder='Date' className='Em'></input><br></br><br></br>
    <textarea name="message" rows="5" cols="30" placeholder='Enter a valid reason' className='ta'></textarea><br></br>
    <Link to="/Sumbit"><button className='sumbitbutton45'>Submit</button></Link>
    </div>
    </>
  )
}

export default Emer

