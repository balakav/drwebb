import React from 'react'
import { Link } from 'react-router-dom'
import './Locat.css'
function Locat() {
  return (
    <>
    <center>
<div className='demo23'>
<h>LOCATION</h><img className='limg' src="https://i.pinimg.com/736x/d4/85/8f/d4858fd1d4664a86bcf06733e56608d7.jpg"alt="jan"/><br></br><br></br>
<a classname='la'href="https://maps.google.com">Click on this to access your location</a>
<p className='lpara'>After Accessing your location, Search in text box to search your Hospitals. </p>
<label>Search:</label>
<input type="text"placeholder="Enter your hospital"></input><br></br><br></br>
<Link to='/Availbledoc'><button className='lo'>Confirm</button></Link>
</div>
</center>

</>
  )
}

export default Locat