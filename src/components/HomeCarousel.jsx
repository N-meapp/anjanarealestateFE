import { Carousel } from "@material-tailwind/react";
import NextArrow from "./Arrows/NextArrow";
import PrevArrow from "./Arrows/PrevArrow";
 
export default function HomeCarousel() {
  return (
    <Carousel transition={{ duration: 2 }} autoplay={true} loop={true} prevArrow={''} nextArrow={''} navigation={false}>
    <div className="title-page1">
    
   
    
    </div> 
      
    <div className="title-page2">
    
   
    
    </div> 
    <div className="title-page3">
    
   
    
    </div> 
    </Carousel>
  );
}