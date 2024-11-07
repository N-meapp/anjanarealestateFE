import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
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
import Preloader from './components/Preloader' 

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const location = window.location.href
  const isAdmin = location.includes('admin')

  
  const currentPath = window.location.pathname
  const isHomePage = currentPath === '/'

  useEffect(() => {

    if (isHomePage) {
      const timer = setTimeout(() => setIsLoading(false), 2000)
      return () => clearTimeout(timer) 
    } else {
      setIsLoading(false)
    }
  }, [isHomePage])


  if (isLoading && isHomePage) {
    return <Preloader />
  }

  return (
    <div>
      {!isAdmin && <NavbarDefault />}
      <BrowserRouter>
        <Routes>
          <Route path='/admin' element={<AdminRoute />} />
          <Route path="/property-details/:p_id" element={<SingleProperty />} />
          <Route path="/all-category-list" element={<ListCategory />} />
          <Route path="/about-page" element={<AboutPage />} />
          <Route path="/gallery-page" element={<GalleryPage />} />
          <Route path="/contact-page" element={<ContactPage />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      {!isAdmin && (
        <div>
          <ActionBtn />
          <Footer />
        </div>
      )}
    </div>
  )
}

export default App
