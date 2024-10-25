import ListingCards from './ListingCards'
import TitlePage from './TitlePage'
import About from './About'
import Services from './Services'
import Features from './Features'
import Videos from './VideosSec'
import ContactPage from './ContactPage'

export default function Home(){
    return(
        <div>
        <div className='bg-[#005555]'>
        <TitlePage />
        <About />
        </div>
        <ListingCards />
        <Services />
        <Features />
        <div className='p-8'><Videos /></div>
        <ContactPage />
        </div>
    )
}