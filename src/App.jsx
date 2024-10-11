import { useState } from 'react'
import {BrowserRouter,Route, Routes, useLocation} from 'react-router-dom'
import './App.css'
import NavbarDefault from './components/NavBar'
import SingleProperty from './components/SingleProperty'
import Home from './components/Home'
import Dashboard from './components/Admin1/Dashboard'
import { Slider } from '@material-tailwind/react'
import AdminSidebar from './components/Admin1/SideBar'
import AdminProperty from './components/Admin1/AdminProperty'
import AdminCategory from './components/Admin1/AdminCategory'
import Admin from './components/Admin1/Admin'
// import Dashboard from './components/admin/Dashboard'
Dashboard




function App() {
  const [count, setCount] = useState(0)

  const location = window.location.href
  const isAdmin = location.includes('admin')
  console.log(isAdmin,'sdfdf');
  

  return (
    <div>
    {!isAdmin?
      <NavbarDefault />:null
    }
    <BrowserRouter>
    <Routes>
    <Route path='/admin' element={<Admin />}/>
      <Route path="/property-details" element={<SingleProperty />}/>
      <Route path="/" element={<Home />}>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>



  )
}

export default App
