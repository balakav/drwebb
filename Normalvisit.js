import React from 'react'
import { Link } from 'react-router-dom'
import './Normalvisit.css'

function Normalvisit() {
  return (
    <>
    <center>
    <form>
      
      <div className='normalbox'>
    <p className='demo958'>BOOK APPOINTMENT</p>
    <p className='demo958'>FILL YOUR DETAILS</p>
    NAME:<input type='text'className='bdemo289'></input><br></br>
    AGE:<input type='text'className='bdemo289'></input><br></br>
    GENDER:<input type='text'className='bdemo289'></input><br></br>
    DATE:<input type='date'className='bdemo289'></input><br></br>
    PHONE:<input type='text'className='bdemo289' placeholder='+91'></input><br></br>
   <br></br><Link to='/Payment'><button >BOOK NOW</button></Link><br></br>
    
    <br></br>
    </div> 
    </form>
    </center>

    </>
  )
}

export default Normalvisit