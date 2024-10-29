import React from 'react';
import NavbarDefault from './NavBar';
import About from './About';
import CountOfAssets from './CountOfAssets';


export default function AboutPage() {
    return (
        <div>
            {/* <NavbarDefault /> */}

           <div className='mb-24'>
            <About />
           </div>

           <CountOfAssets />

        </div>
    );
}
