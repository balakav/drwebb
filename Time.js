import React from 'react'
import { Link } from 'react-router-dom'
import './Time.css'

function Time() {
  return (
   <>
   <div className='box67'>
    <h1 className='t1'>APPOINTMENT TIMING</h1>
    <h2 className='t2'>WeekDays</h2>
    <input type="checkbox" className='timecheck'/>
    <label for="time" className='n1'>11.00 A.M - 2.00 P.M</label><br></br><br></br>
    <input type="checkbox" className='timecheck2'/>
    <label for="time" className='n'>&nbsp;&nbsp;&nbsp;6.00 P.M - 9.00 P.M</label>
    <h2 className='t2'>SunDay</h2>
    <input type="checkbox" className='timecheck'/>
    <label for="time" className='n'>10.00 A.M - 2.00 P.M</label><br></br><br></br><br></br>
    <Link to='/Normalvisit'><button className='b'>Next</button></Link>
    </div>
   </>
  )
}

export default Time