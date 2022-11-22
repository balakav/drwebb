import React from 'react'
import './Doc.css'
import {Link} from 'react-router-dom'
function Doc() {
  return (
    <>
    <nav className='nav-area'>
    <h1 className='h1'>
      <img className='img1'/>
      DR.WEB
        <ul className='ji'> 
        <div className='l'>
   <Link to='/Doc' className='d'>Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   <Link to='/Docappo' className='d'>Appointment</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   <Link to='/Hosdetails' className='d'>Hospital Details</Link>&nbsp;&nbsp;&nbsp;&nbsp;
   <Link to='/Prodoc'><button className='pr'>Profile</button></Link>
   </div>

   </ul>
   </h1>
    </nav>
    <body>
        <div className='body1'>
        <p className='para1'>Welcome Doctor,</p><p className='para2'>You can check Patients problems and</p><p className='para3'> You can solve there problems</p>
        </div>
        <Link to='/Docappo'><button className='pr2'>Next</button></Link>
        </body>
    </>
  )
}

export default Doc