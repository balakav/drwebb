import React from 'react'
import './Visa.css';
function Visa() {
  return (
    <>
    <body>
    <center>
    <div className='ddemo'>
    <h1>Payment</h1>
    <form className='fdemo'>
    <input type="text" className='ndemo' placeholder='Enter Card Number:'/><br></br><br></br>
    <input type="date" className='ndemo' placeholder='Exp Date:'/><br></br><br></br>
    <input type="text" className='ndemo' placeholder='CVC Code:'/><br></br><br></br>
    <input type="text" className='ndemo' placeholder='Enter Amount:'/><br></br><br></br>
    <input type="text" className='ndemo' placeholder='Enter the PIN:'/><br></br><br></br><br></br><br></br>
    <button className='bdemo'>CONFIRM</button>
    </form>
    </div>
    </center>
    </body>
    </>
  )
}

export default Visa