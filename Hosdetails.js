import React from 'react'
import './Hosdetails.css'
function Hosdetails() {
  return (
    <>
    <h1 className='hosh1'>Hospital Details</h1>
    <center>

    <div className='hosbox'>
     <img className='hosi'src="https://yt3.ggpht.com/ytc/AMLnZu-WIoIbzpyPEG5KIAvv6P5L4LD5vS1CT4u9bpIj4w=s900-c-k-c0x00ffffff-no-rj"/>
    <p className='hospara'>KG Hospital</p>
    
    <label for="r">Hospital Name:</label>
    <input type="text" value="KG Hospital" className='hosinput'></input>&nbsp;&nbsp;&nbsp;
    <label for="r">Patients treated</label>
    <input type="text" value="6000000" className='hosinput'></input><br></br><br></br>
    <label for="r">Doctors</label>
    <input type="text" value="170" className='hosinput'></input>&nbsp;&nbsp;&nbsp;
    <label for="r">Specialist:</label>
    <input type="text" value="Cardiologist" className='hosinput'></input><br></br><br></br>
    <label for="r">Email</label>
    <input type="text" value="info@kghospital.com" className='hosinput'></input>&nbsp;&nbsp;&nbsp;
    <label for="r">Phone:</label>
    <input type="text" value="+91 98430 66074" className='hosinput'></input><br></br><br></br><br></br><br></br>
    <a className="hosa" href="https://www.kghospital.com/">See KG Hospital Website</a>
    </div>
    </center>
    
    </>
  )
}

export default Hosdetails