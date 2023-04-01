import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import Profile from './pages/Profile/Profile'
import Emergency from './pages/Emergency/Emergency'
import BloodBank from './pages/BloodBank/BloodBank'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import UserButton from './components/Button/UserButton'
function App() {
  const [data, setData] = useState([]);

  useEffect(
    () => {
    axios.get('https://django-hack-api.vercel.app/hospital/')
      .then(response => {
        setData(response.data)
        console.log(response.data)
        ;
      }).catch(err => {
        console.error(err);
      });
  }, []);
  console.log(data)
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        {/* <UserButton /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/bloodbank' element={<BloodBank />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/emergency' element={<Emergency />} />
        </Routes>
      </div>
    </BrowserRouter>

  )
}

export default App
