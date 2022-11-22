import React from 'react'
import './Abook.css'
import {Link} from 'react-router-dom'
function Abook() {
  return (
    <>
    <div class="box">
      <body> </body>
      <br></br>
      <br></br>
      <div className='div2'>
      <div className='div1'>
        <center>
        <br></br>
        <h1 className="h11">108 Emergency</h1>
        <br></br>
        <br></br>
        
        <img class="img2" src="https://cdn-icons-png.flaticon.com/128/1032/1032989.png" alt=""/>
        <br></br> 
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <a><Link to="/Ambulance">
          <button className="img3"></button>
        </Link>
        </a>
        <h2 className="h2">Book now</h2>
        </center>
        <br></br>
        </div>
        </div>
    </div>
    </>
  )
}

export default Abook