import React from 'react';
import NavbarDefault from './NavBar';
import About from './About';
import CountOfAssets from './CountOfAssets';


export default function AboutPage() {
    return (
        <div>
            {/* <NavbarDefault /> */}

           <div style={{"padding-top": "150px"}}>
            <About />
           </div>

           <CountOfAssets />

        </div>
    );
}
