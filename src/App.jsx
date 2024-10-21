import { useState } from 'react'
import {BrowserRouter,Route, Routes, useLocation} from 'react-router-dom'
import './App.css'
import NavbarDefault from './components/NavBar'
import SingleProperty from './components/SingleProperty'
import Home from './components/Home'
import Dashboard from './components/Admin/Dashboard'
import { Slider } from '@material-tailwind/react'
import AdminSidebar from './components/Admin/SideBar'
import AdminProperty from './components/Admin/AdminProperty'
import AdminCategory from './components/Admin/AdminCategory'
import Admin from './components/Admin/Admin'
import Footer from './components/Footer'
// import Dashboard from './components/admin/Dashboard'
import ListCategory from './components/ListCategory'
import AboutPage from './components/AboutPage'
import GalleryPage from './components/GalleryPage'



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
      <Route path="/property-details/:p_id" element={<SingleProperty />}/>
      <Route path="/all-category-list" element={<ListCategory />}/>
      <Route path="/about-page" element={<AboutPage />}/>
      <Route path="/gallery-page" element={<GalleryPage />}/>
      <Route path="/" element={<Home />}>
        </Route>
      </Routes>
    </BrowserRouter>
    <Footer />
    </div>



  )
}

export default App
