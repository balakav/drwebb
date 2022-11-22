import React from 'react'
import { Link } from 'react-router-dom'
import './Payment.css'

function Payment() {
  return (
    <>
    <div className='div2g'>
      <div className='div1h'>
        <h1 className="hh">Payment<br></br>Options</h1><br></br>
        <div className='payim'>
       <img className='payi1' src="https://lh3.googleusercontent.com/RkN2IcvWd4DWNTVbh8Ma2G77D42Gd5HP0Deydf9FmzbDUMxLNsmWUSE8k562PgEPKzmF_OGWIiySxhdLUdNcxJ3t8kc7JugTaAhHYA"/>
       <img className='payi2' src="data:image/png;base64,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"/><br></br><br></br><br></br>
       <img className='payi3' src="https://nuvei.com/wp-content/uploads/2021/06/phonepe.png"/>
       <img className='payi4' src="https://pbs.twimg.com/profile_images/1214220012979920898/N4tFtfjN_400x400.png"/>
        </div>
        </div>
        </div>   
    </>
  )
}

export default Payment