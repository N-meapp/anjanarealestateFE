import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome,faUsers,faShieldHalved } from "@fortawesome/free-solid-svg-icons";

export default function Features() {
  return (
    <div>
      <div className="pt-10 px-10 pb-10">
        <div className="md:flex gap-10">
          <div className="w-[50%]">
            <div className="gap-6 md:flex mb-10">
              <div className="w-24 h-24 round rounded-full bg-white content-center text-center shadow-md">
                <i class="fa fa-home icon-animation" aria-hidden="true">
                <FontAwesomeIcon icon={faHome} />
                </i>
              </div>
              <div className="content-center">
              <h1 className="font-bold text-[#005555] mb-3">2M Properties</h1>
              <h1 className="">Lorem ipsum dolor sit amet consectetur <br></br> adipisicing elit. Nostrum iste.</h1>
              </div>
            </div>
            <div className="gap-6 md:flex mb-10">
            <div className="w-24 h-24 round rounded-full bg-white content-center text-center shadow-md">
              <i class="fa fa-home" aria-hidden="true"></i>
              <FontAwesomeIcon icon={faUsers} />
            </div>
            <div className="content-center">
            <h1 className="font-bold text-[#005555] mb-3">2M Properties</h1>
            <h1 className="">Lorem ipsum dolor sit amet consectetur <br></br> adipisicing elit. Nostrum iste.</h1>
            </div>
          </div>
          <div className="gap-6 md:flex mb-10">
          <div className="w-24 h-24 round rounded-full bg-white content-center text-center shadow-md">
            <i class="fa fa-home" aria-hidden="true"></i>
            <FontAwesomeIcon icon={faShieldHalved} />
          </div>
          <div className="content-center">
          <h1 className="font-bold text-[#005555] mb-3">2M Properties</h1>
          <h1 className="">Lorem ipsum dolor sit amet consectetur <br></br> adipisicing elit. Nostrum iste.</h1>
          </div>
        </div>
          </div>
          <div className="w-[80%] features-icon">
          <img className="w-[75%] rounded-xl" src="/src/assets/featuresBackground.jpg"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
