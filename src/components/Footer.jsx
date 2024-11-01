import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faDribbble, faGithub, faInstagram, faYoutube,  } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope,faPhone } from "@fortawesome/free-solid-svg-icons"; // Your original icon


export default function Footer(){


    return(

 <footer class="relative bg-blueGray-200 pt-20 pb-14 bg-[#e1b400]">
  <div class="container mx-auto px-4">
    <div class="flex flex-wrap text-left lg:text-left">
      <div class="w-full lg:w-6/12 px-4">
        <h4 class="text-3xl font-bold text-blueGray-700 text-white">Let's keep in touch!</h4>
        <h5 class="text-lg mt-0 mb-2 text-blueGray-600 text-[#ffffff86]">
          Find us on any of these platforms, we respond 1-2 business days.
        </h5>
        <div class="mt-6 lg:mb-0 mb-6">
          <button class="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
          <a href="https://www.facebook.com/profile.php?id=61567087028926">
          <FontAwesomeIcon icon={faFacebookF} />
          </a>
          </button>  
          <button class="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
          <a href="https://www.instagram.com/anjana_realestates/">
          <FontAwesomeIcon icon={faInstagram} />
          </a>
            </button>
            <button class="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <a href="https://youtube.com/@anjanarealestates?si=a_XYjj6dgLMSSxqK">
            <FontAwesomeIcon icon={faYoutube} />
            </a>
            </button>
        </div>
      </div>
      <div class="w-full lg:w-6/12 px-4">
        <div class="flex flex-wrap items-top mb-6">
          <div class="w-full lg:w-4/12 px-4 ml-auto">
            <span class="block uppercase text-blueGray-500 text-sm font-semibold mb-2 text-white">Useful Links</span>
            <ul class="list-unstyled">
              <li>
                <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm text-[#ffffffba]" href="/">Home</a>
              </li>
              <li>
                <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm text-[#ffffffba]" href="/all-category-list">Properties</a>
              </li>
              <li>
                <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm text-[#ffffffba]" href="/about-page">About</a>
              </li>
              <li>
                <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm text-[#ffffffba]" href="/gallery-page">Gallery</a>
              </li>
              <li>
                <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm text-[#ffffffba]" href="/contact-page">Contact us</a>
              </li>
            </ul>
          </div>
          <div class="w-full lg:w-4/12 px-4">
            <span class="block uppercase text-blueGray-500 text-sm font-semibold mb-2 text-white">Our Services</span>
            <ul class="list-unstyled text-[#ffffffba]">
              <li>
                <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/terms?ref=njs-profile">Properties</a>
              </li>
              <li>
                <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/privacy?ref=njs-profile">Property For Sale</a>
              </li>
              <li>
                <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/contact-us?ref=njs-profile">Real Estate Agent</a>
              </li>
              <li>
                <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/contact-us?ref=njs-profile">House For Sale</a>
              </li>
            </ul>
          </div>
          <div class="w-full lg:w-4/12 px-4">
            <span class="block uppercase text-blueGray-500 text-sm font-semibold mb-2 text-white">Contact</span>
            <ul class="list-unstyled text-[#ffffffba]">
              <li className="">
                <a class="flex text-blueGray-600 hover:text-blueGray-800 font-semibold pb-2 text-sm" href="https://creative-tim.com/terms?ref=njs-profile">anjanarealestates50@gmail.com</a>
              </li>
              <li>
                <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/privacy?ref=njs-profile"><FontAwesomeIcon icon={faPhone} /> +91 99657 35888</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <hr class="my-6 border-blueGray-300"/>
    <div class="flex flex-wrap items-center md:justify-between justify-center">
      <div class="w-full md:w-4/12 px-4 mx-auto text-center">
        <div class="text-sm text-[#9c0b00] font-semibold py-1">
          Copyright © <span id="get-current-year">2024</span>
          <a href="#" class="text-blueGray-500 hover:text-gray-800" target="_blank"> Anjana Realestate</a>
          <a href="https://nmesmartech.com" class="text-blueGray-500 hover:text-gray-800" target="_blank">, <br/> Made by <span className="text-white">N-me Smartech</span></a>
        </div>
      </div>
    </div>
  </div>
</footer>
    )
}



// <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css">
// <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css">
