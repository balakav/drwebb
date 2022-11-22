import React from'react';
import'./Login.css';
import {Link} from 'react-router-dom'
export default function Login() {
return (
<>
<body>
<center>
<div className='demo56'>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM35D9k88rgotfv791Och_V6Jkyguwa8aheg&usqp=CAU"alt="Login"/>
<p className='lp'>Login</p>
<center>
<div className='dd'> 
<input type="text"className='demo1' placeholder='Email' ></input><br></br><br></br><br></br>
<input type="password"className='demo1' placeholder='Password'></input><br></br><br></br>
<Link to='/Home'><input type="submit"value="Login"className='submit'></input></Link><br></br><br></br>
<p1>Or</p1><br></br><br></br>
<center>
<Link to="/Signup"className='ca'>Create new &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Account?</Link>
</center>
</div>
</center>
</div>
</center>
</body>
</>
)
}
