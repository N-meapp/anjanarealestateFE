import { useState, useEffect } from 'react'
import Home from './components/Home'
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import './App.css'
import NavbarDefault from './components/NavBar'
import SingleProperty from './components/SingleProperty'
import ListCategory from './components/ListCategory'
import AboutPage from './components/AboutPage'
import GalleryPage from './components/GalleryPage'




function App() {
  const [count, setCount] = useState(0)



    

  return (
    <div>
    <NavbarDefault /> 
    <BrowserRouter>
      <Routes>
      <Route path="/property-details/:p_id" element={<SingleProperty />}/>
      <Route path="/all-category-list" element={<ListCategory />}/>
      <Route path="/about-page" element={<AboutPage />}/>
      <Route path="/gallery-page" element={<GalleryPage />}/>
      <Route path="/" element={<Home />}>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>



  )
}

export default App
