export default function About(){
    return(
        <div  className="md:flex about pt-20 pb-20 bg-[#005555]">
        <div className="w-[50%] ml-10">
        <h1 className="about-us text-lg font-light text-[#2aad97]">About us</h1>
        <hr className="w-10 rounded-full mb-4 border-[#34ffd32e;] border-2"></hr>
        <h1 className="text-4xl font-bold mb-8 text-[white] leading-normal">Heading for About <br></br> Page for RealEstate</h1>
        <p className="text-[#ffffff99] leading-loose">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
        </div>
        <div className="w-[65%] about-img">
        <img className="w-[65%]" src="/src/assets/about5.png"></img>
        </div>
        </div>
    )
}