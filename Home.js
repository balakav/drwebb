import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Home.css'
export class Home extends Component {
  render() {
     
    return (
      <>
      <nav className='nav-area'>
      <h1 className='h1'>
      <img className='img1'/>
      <h className="homh1">DR.WEB</h>
     <ul className='hi'>
      <a className='hello'>Home</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <a href="#" className='hello'>Location</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/Emer" className='hello'>Emergency</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/Abook" className='hello'>Ambulance</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/Ppro"><button className='signup'>Profile</button></Link>
      <Link to="/Login"><button className='lo'>Log Out</button></Link>
      </ul>
      </h1>
      
      </nav>
      <body className='body'>
      <marquee className='bn'>BOOK YOUR APPOINTMENT NOW!!!</marquee>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <div className='para'>
      <p className='p0'>Let's Find Your Doctor!<br></br></p><br></br><br></br>
      <p className='p1'>We care about your Health<br></br>We are here for your Care</p><br></br><br></br>
      <p className='p2'>THE INFORMATION PROVIDE BY YOU WILL NOT BE STOLEN </p><br></br><br></br><br></br>
      <Link to='/Dis'><button className='lo'>Next</button></Link>
  </div>
 
    </body>
      </>
    )
  }
}

export default Home

