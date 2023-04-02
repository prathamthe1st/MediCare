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
import Surgeon from '../src/pages/Surgeon/Surgeon'
import Cardiac from '../src/pages/Cardiac/Cardiac'
import Gynec from '../src/pages/Gynec/Gynec'
import Vet from '../src/pages/Vet/Vet'
import Neuro from '../src/pages/Neuro/Neuro'
import Pedia from '../src/pages/Pedia/Pedia'


export const DataContext = createContext();


function App() {
  const [data, setData] = useState([]);
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
            <Route path='/surgeon' element={<Surgeon />} />
            <Route path='/pedia' element={<Pedia />} />
            <Route path='/cardiac' element={<Cardiac />} />
            <Route path='/vet' element={<Vet />} />
            <Route path='/gynec' element={<Gynec />} />
            <Route path='/neuro' element={<Neuro />} />
          </Routes>
        </div>
      </DataContext.Provider>
    </BrowserRouter>
  )
}

export default App
