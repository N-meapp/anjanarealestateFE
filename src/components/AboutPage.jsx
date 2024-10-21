import React from 'react';
import NavbarDefault from './NavBar';
import About from './About';


export default function AboutPage() {
    return (
        <div>
            {/* <NavbarDefault /> */}

           <div style={{"margin-top": "150px"}}>
            <About />
           </div>

        </div>
    );
}
