export default function About(){

    const location = window.location.href
    const isAboutPage = location.includes('about')
    
    return(
        <div  className={`${isAboutPage? 'pt-40 md:pt-56':'pt-[5rem] md:pt-[3rem]'} md:flex about pb-20 bg-[#e1b400]`}>
        <div className="md:w-[50%] mx-6 md:mx-0 md:ml-10">
        <h1 className="about-us text-lg font-light text-[#6f070096]">About us</h1>
        <hr className="w-10 rounded-full mb-4 border-[#7f04042e] border-2"></hr>
        <h1 className="text-4xl font-bold mb-8 text-[white] leading-normal">About Anjana <br></br>Real Estate</h1>
        <p className="text-[#ffffffd9] leading-loose">At Anjana Real Estate, we’re more than just agents—we’re your trusted partners in finding the perfect space to call home. With a commitment to genuine service and deep local expertise, we guide you through every step of the real estate journey.
        {isAboutPage?"Whether you’re buying, selling, or investing, our team is dedicated to understanding your unique needs and making your dreams a reality. Discover extraordinary properties and exceptional experiences with Anjana Real Estate, Strength in Every Foundation!":''}
        </p>
        </div>
        <div className="md:w-[65%] md:p-0 p-14 about-img">
        <img className="md:w-[65%]" src="/src/assets/about5.png"></img>
        </div>
        </div>
    )
}