import './App.css';
import Sumbit from './Sumbit';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Home'
import Emer from './Emer'
import Doc from './Doc';
import Login from './Login'
import Signup from './Signup';
import AreyouDocrPai from './AreyouDocrPai';
import Ambulance from './Ambulance';
import Abook from './Abook';
import Docappo from './Docappo';
import Dochos from './Dochos';
import Prodoc from './Prodoc';
import Dis from './Dis';
import Locat from './Locat';
import Availbledoc from './Availbledoc'
import Typevisit from './Typevisit';
import Normalvisit from './Normalvisit';
import Payment from './Payment';
import Time from './Time';
import Hosdetails from './Hosdetails'
import Ppro from './Ppro'


function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/Home' element={<Home/>}></Route>
          <Route path='/Emer' element={<Emer/>}></Route>
          <Route path='/Sumbit' element={<Sumbit/>}></Route>
          <Route path='/Doc' element={<Doc/>}></Route>
          <Route path='/Login' element={<Login/>}></Route>
          <Route path='/Signup' element={<Signup/>}></Route>
          <Route path='/AreyouDocrPai' element={<AreyouDocrPai/>}></Route>
          <Route path='/Ambulance' element={<Ambulance/>}></Route>
          <Route path='/Abook' element={<Abook/>}></Route>
          <Route path='/Docappo' element={<Docappo/>}></Route>
          <Route path='/Dochos' element={<Dochos/>}></Route>
          <Route path='/Prodoc' element={<Prodoc/>}></Route>
          <Route path='/Dis' element={<Dis/>}></Route>
          <Route path='/Locat' element={<Locat/>}></Route>
          <Route path='/Availbledoc' element={<Availbledoc/>}></Route>
          <Route path='/Typevisit' element={<Typevisit/>}></Route>
          <Route path='/Normalvisit' element={<Normalvisit/>}></Route>
          <Route path='/Payment' element={<Payment/>}></Route>
          <Route path='/Time' element={<Time/>}></Route>
          <Route path='/Payment' element={<Payment/>}></Route>
          <Route path='/Hosdetails' element={<Hosdetails/>}></Route>
          <Route path='/Ppro' element={<Ppro/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;