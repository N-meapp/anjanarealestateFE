import ListingCards from './ListingCards'
import NavBar from './NavBar'
import TitlePage from './TitlePage'
import Category from './Category'
import About from './About'
import Services from './Services'
import Features from './Features'
import CountOfAssets from './CountOfAssets'
import Videos from './VideosSec'

export default function Home(){
    return(
        <div>
            
        <TitlePage />
        <About />
        <ListingCards />
        <Services />
        <Features />
        <div className='p-8'><Videos /></div>
        
        </div>
    )
    // <CountOfAssets />
    // <Category />
}