import React from 'react'
import { Link } from 'react-router-dom'
import './Availbledoc.css'

function Availbledoc() {
  return (
    <>
    <h1 className='Availh'>Available Doctors</h1>
    <ddiv className='availb'>
    </ddiv>
    <div className='availdoc1'>
        <Link to='/Typevisit' className='availdoc'>
        <p>&nbsp;&nbsp;Dr.Susila<img className='availdoci' src='https://cdn.askapollo.com/live/images/doctors/cardiology/dr-dattagupta-aditi-cardiology-in-bangalore.png'></img><br></br>
        &nbsp;&nbsp;Senior Specialist<br></br>
        &nbsp;&nbsp;Hospital<br></br>
        &nbsp;&nbsp;Available for in person visit<br></br>
        &nbsp;&nbsp;ph: +91 ********20</p>
        </Link>
        </div>




        <div className='availdoc1'>
        <Link to='/Typevisit' className='availdoc'>
        <p>&nbsp;&nbsp;Dr.Ram<img className='availdoci' src='https://edappalhospitals.org/wp-content/uploads/2021/11/ABDUL-HAKEEM.webp'></img><br></br>
        &nbsp;&nbsp;Junior Specialist<br></br>
        &nbsp;&nbsp;Hospital<br></br>
        &nbsp;&nbsp;Available for in person visit<br></br>
        &nbsp;&nbsp;ph: +91 ********00</p>
        </Link>
        </div>
        <div className='availdoc1'>
        <Link to='/Typevisit' className='availdoc'>
        <p>&nbsp;&nbsp;Dr.Anbu<img className='availdoci' src='https://www.felixhospital.com/sites/default/files/2022-11/dr-dk-gupta.jpg'></img><br></br>
        &nbsp;&nbsp;Senior Specialist<br></br>
        &nbsp;&nbsp;Hospital<br></br>
        &nbsp;&nbsp;Available for in person visit<br></br>
        &nbsp;&nbsp;ph: +91 ********10</p>
        </Link>
        </div>
        <div className='availdoc1'>
        <Link to='/Typevisit' className='availdoc'>
        <p>&nbsp;&nbsp;Dr.Sivaraman<img className='availdoci' src='https://www.peopletreehospitals.com/images/doctors/chethan.png'></img><br></br>
        &nbsp;&nbsp;Senior Specialist<br></br>
        &nbsp;&nbsp;Hospital<br></br>
        &nbsp;&nbsp;Available for in person visit<br></br>
        &nbsp;&nbsp;ph: +91 ********29</p>
        </Link>
        </div><br></br><br></br><br></br><br></br><br></br><br></br><br></br>

        <div className='availdoc1'>
        <Link to='' className='availdoc6'>
        <p>&nbsp;&nbsp;Dr.Roja<img className='availdoci' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqVOA4o6ryqDlQRuk9JCJae16oojo9BLFl-A&usqp=CAU'></img><br></br>
        &nbsp;&nbsp;Senior Specialist<br></br>
        &nbsp;&nbsp;Hospital<br></br>
        &nbsp;&nbsp;unavailable for in person visit<br></br>
        &nbsp;&nbsp;ph: +91 ********90</p>
        </Link>
        </div>

        <div className='availdoc1'>
        <Link to='/Typevisit' className='availdoc'>
        <p>&nbsp;&nbsp;Dr.Jayasudha<img className='availdoci' src='https://www.sriramakrishnahospital.com/wp-content/uploads/2022/07/Dr.Ajitha.png'></img><br></br>
        &nbsp;&nbsp;Senior Specialist<br></br>
        &nbsp;&nbsp;Hospital<br></br>
        &nbsp;&nbsp;Available for in person visit<br></br>
        &nbsp;&nbsp;ph: +91 ********11</p>
        </Link>
        </div>

        <div className='availdoc1'>
        <Link to='' className='availdoc6'>
        <p>&nbsp;&nbsp;Dr.Radharavi<img className='availdoci' src='https://regencyhealthcare.in/wp-content/uploads/2022/07/doctor-banner-new-2-899.png'></img><br></br>
        &nbsp;&nbsp;Junior Specialist<br></br>
        &nbsp;&nbsp;Hospital<br></br>
        &nbsp;&nbsp;Unavailable for in person visit<br></br>
        &nbsp;&nbsp;ph: +91 ********20</p>
        </Link>
        </div>

        <div className='availdoc1'>
        <Link to='' className='availdoc6'>
        <p>&nbsp;&nbsp;Dr.Geetharani<img className='availdoci' src='https://d3b6u46udi9ohd.cloudfront.net/wp-content/uploads/2022/07/28051050/IMG_20220601_163202-1.jpg'></img><br></br>
        &nbsp;&nbsp;Junior Specialist<br></br>
        &nbsp;&nbsp;Hospital<br></br>
        &nbsp;&nbsp;Unavailable for in person visit<br></br>
        &nbsp;&nbsp;ph: +91 ********20</p>
        </Link><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        </div>

        <div className='availdoc1'>
        <Link to='' className='availdoc6'>
        <p>&nbsp;&nbsp;Dr.Ranganathen<img className='availdoci' src='https://regencyhealthcare.in/wp-content/uploads/2020/06/dr-abhishek-2.jpg'></img><br></br>
        &nbsp;&nbsp;Senior Specialist<br></br>
        &nbsp;&nbsp;Hospital<br></br>
        &nbsp;&nbsp;Unavailable for in person visit<br></br>
        &nbsp;&nbsp;ph: +91 ********20</p>
        </Link>
        </div>
   <p className='availpara'>* Red denotes unavailable doctors</p>
    
    </>
  )
}

export default Availbledoc