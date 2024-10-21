import React from 'react';
import NavbarDefault from './NavBar';
import About from './About';
import Gallery from './Gallery';
import './GalleryPage.css';


export default function GalleryPage() {
    return (
        <div>
            {/* <NavbarDefault /> */}

           <div className="gall-co">
           <Gallery />
           </div>

        </div>
    );
}
