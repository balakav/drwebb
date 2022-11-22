import React from 'react'
import {Link} from 'react-router-dom'
import './Signup.css'
function Signup() {
  return (
    <>
    <body>
        <div className='sub1'>
        <h1 className='suh'>Signup</h1>
        <input type='text' placeholder='Full Name' className='sui'></input><br></br><br></br>
        <input type='mail' placeholder='Email' className='sui'></input><br></br><br></br>
        <input type='password' placeholder='Password' className='sui'></input><br></br><br></br>
        <input type='password' placeholder='Confirm Password' className='sui'></input><br></br><br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/AreyouDocrPai"><button className='sucb'>Sign Up</button></Link><br></br>
        <p className='sup'>OR</p>
        <a href="https://accounts.google.com/v3/signin/identifier?dsh=S1661695292%3A1668921017336636&authuser=0&continue=https%3A%2F%2Fwww.google.com%2F&ec=GAlAmgQ&hl=en&flowName=GlifWebSignIn&flowEntry=AddSession"><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png' className='suim'></img></a><a href="https://www.facebook.com/campaign/landing.php?campaign_id=14884913640&extra_1=s%7Cc%7C589460569891%7Cb%7Cfacebook%20signin%7C&placement=&creative=589460569891&keyword=facebook%20signin&partner_id=googlesem&extra_2=campaignid%3D14884913640%26adgroupid%3D128696221832%26matchtype%3Db%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-3821998899%26loc_physical_ms%3D1007810%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAiAmuKbBhA2EiwAxQnt7_hFVbqQKhp3RfgO9_BxedA6EZofY3Td1NEWB-GhHlgdWI2cANbhAhoCgkwQAvD_BwE"><img src='https://cdn-icons-png.flaticon.com/512/124/124010.png' className='suim'></img></a><a href="https://www.instagram.com/accounts/login/"><img src='https://workingwithdog.com/wp-content/uploads/2016/05/new_instagram_logo.jpg' className='suim'></img></a>
        </div>
    </body>
    </>
  )
}

export default Signup