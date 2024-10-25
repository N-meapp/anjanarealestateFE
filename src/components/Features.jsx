import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUsers,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

export default function Features() {
  document.addEventListener("DOMContentLoaded", function () {
    new Splide(".splide", {
      type: "loop",
      drag: "free",
      focus: "center",
      perPage: 3,
      autoScroll: {
        speed: 1,
      },
    }).mount(window.splide.Extensions);
  });

  return (
    <div>
      <div className="pt-10 px-10 pb-10">
        <div className="md:flex gap-10">
          <div className="features-icon md:hidden">
            <img
              className="w-[95%] rounded-xl"
              src="/src/assets/featuresBackground.jpg"
            ></img>
          </div>
          <div className="md:w-[50%] w-full md:text-left text-center">
            <div className="gap-6 md:flex mb-0 mt-10 md:mt-0 md:mb-10 center">
              <div className="w-24 h-24 md:mb-0 mb-3 round rounded-full mx-auto md:mx-0 bg-white content-center text-center shadow-md">
                <i className="fa fa-home icon-animation" aria-hidden="true">
                  <FontAwesomeIcon icon={faHome} />
                </i>
              </div>
              <div className="content-center">
                <h1 className="font-bold text-[#005555] mb-3">2M Properties</h1>
                <h1 className="">
                  Lorem ipsum dolor sit amet consectetur <br></br> adipisicing
                  elit. Nostrum iste.
                </h1>
              </div>
            </div>
            <div className="gap-6 md:flex mb-0 mt-10 md:mt-0 md:mb-10 center">
              <div className="md:mb-0 mb-3 w-24 h-24 round rounded-full mx-auto md:mx-0 bg-white content-center text-center shadow-md">
                <i className="fa fa-home" aria-hidden="true"></i>
                <FontAwesomeIcon icon={faUsers} />
              </div>
              <div className="content-center">
                <h1 className="font-bold text-[#005555] mb-3">2M Properties</h1>
                <h1 className="">
                  Lorem ipsum dolor sit amet consectetur <br></br> adipisicing
                  elit. Nostrum iste.
                </h1>
              </div>
            </div>
            <div className="gap-6 md:flex mb-0 mt-10 md:mt-0 md:mb-10 center">
              <div className="md:mb-0 mb-3 w-24 h-24 round rounded-full mx-auto md:mx-0 bg-white content-center text-center shadow-md">
                <i className="fa fa-home" aria-hidden="true"></i>
                <FontAwesomeIcon icon={faShieldHalved} />
              </div>
              <div className="content-center">
                <h1 className="font-bold text-[#005555] mb-3">2M Properties</h1>
                <h1 className="">
                  Lorem ipsum dolor sit amet consectetur <br></br> adipisicing
                  elit. Nostrum iste.
                </h1>
              </div>
            </div>
          </div>
          <div className="w-[80%] md:block hidden features-icon">
            <img
              className="w-[75%] rounded-xl"
              src="/src/assets/featuresBackground.jpg"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
