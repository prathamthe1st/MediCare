import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import Profile from './pages/Profile/Profile'
import Emergency from './pages/Emergency/Emergency'
import BloodBank from './pages/BloodBank/BloodBank'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
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
