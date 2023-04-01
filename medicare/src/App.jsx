import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect , createContext  } from 'react'
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
import HospitalCard from './pages/HospitalCard/HospitalCard'

export const DataContext = createContext();


function App() {
  const [data, setData] = useState([]);

  useEffect(
    () => {
      axios.get('https://django-hack-api.vercel.app/hospital/')
        .then(response => {
          setData(response.data)
          console.log(data)
            ;
        }).catch(err => {
          console.error(err);
        });
      return (() => data)
    }, []
  );
  console.log(data)
  return (
    <BrowserRouter>
      <DataContext.Provider value={data}>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/bloodbank' element={<BloodBank />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/emergency' element={<Emergency />} />
            <Route path='/hospital' element={<HospitalCard />} />
          </Routes>
        </div>
      </DataContext.Provider>
    </BrowserRouter>
  )
}

export default App
