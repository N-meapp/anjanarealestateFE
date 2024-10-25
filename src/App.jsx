import { useState } from 'react'
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import './App.css'
import NavbarDefault from './components/NavBar'
import SingleProperty from './components/SingleProperty'
import Home from './components/Home'
import Footer from './components/Footer'
import ListCategory from './components/ListCategory'
import AboutPage from './components/AboutPage'
import GalleryPage from './components/GalleryPage'
import ContactPage from './components/ContactPage'
import AdminRoute from './components/admin/AdminRoute'
import ActionBtn from './components/ActionBtn'



function App() {

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
    <Route path='/admin' element={<AdminRoute />}/>
      <Route path="/property-details/:p_id" element={<SingleProperty />}/>
      <Route path="/all-category-list" element={<ListCategory />}/>
      <Route path="/about-page" element={<AboutPage />}/>
      <Route path="/gallery-page" element={<GalleryPage />}/>
      <Route path="/contact-page" element={<ContactPage />}/>
      <Route path="/" element={<Home />}>
        </Route>
      </Routes>
    </BrowserRouter>
    {!isAdmin?
      <div>
     <ActionBtn />
    <Footer />
      </div>:null
    }
    </div>



  )
}

export default App
