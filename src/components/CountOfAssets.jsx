import { useEffect, useState,useRef } from "react"


export default function CountOfAssets(){

    const [countOne,setCountOne] = useState(0)
    const [countTwo,setCountTwo] = useState(0)
    const [countThree,setCountThree] = useState(0)
    const [countFour,setCountFour] = useState(0)

    const handleCount =()=>{

        let count = 0
        for(let i=0;i<20;i++){
            setTimeout(() => {
                if(i==19){
                    setCountOne(5999)
                    setCountTwo(6999)
                    setCountThree(4322)
                    setCountFour(1200)
                }else{
                    setCountOne(count+i*32)
                    setCountTwo(count+i*32)
                    setCountThree(count+i*32)
                    setCountFour(count+i*32)
                }
            }, i*50);
        }
        
    };



    useEffect(() => {
        // Function to handle scroll event
        const handleScroll = () => {
            const targetDiv = document.getElementById('scroll-div'); // Replace with your div's ID
            if (targetDiv) {
                const scrollPosition = window.scrollY || window.pageYOffset;

                // Get the top position of the target div
                const divTop = targetDiv.getBoundingClientRect().top + scrollPosition;

                console.log('Scroll Position:', scrollPosition, 'Div Top:', divTop);

                if (Math.floor(scrollPosition) <= Math.floor(divTop)) {
                    handleCount()
                } else {
                    console.log('Scrollbar position is NOT equal to the top position of the div.');
                }
            }
        };

        // Add event listener for scroll
        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    const targetRef = useRef(null); // Reference to the target div
  const [isVisible, setIsVisible] = useState(false); // State to track visibility






    return(
         <div id="scroll-div"
         className=" flex gap-5 w-full justify-around mb-96 counter-div">
          <div className="text-center">
          <h1 className="text-4xl text-black font-extrabold">{countOne}</h1>
          <h1 className="text-[#00000079] text-sm mt-3"># of Buy Properties</h1>
          </div>
          <div className="text-center">
          <h1 onClick={handleCount} className="text-4xl text-black font-extrabold">{countTwo}</h1>
          <h1 className="text-[#00000079] text-sm mt-3"># of Buy Properties</h1>
          </div>
          <div className="text-center">
          <h1 className="text-4xl text-black font-extrabold">{countThree}</h1>
          <h1 className="text-[#00000079] text-sm mt-3"># of Buy Properties</h1>
          </div>
          <div className="text-center">
          <h1 className="text-4xl text-black font-extrabold">{countFour}</h1>
          <h1 className="text-[#00000079] text-sm mt-3"># of Buy Properties</h1>
          </div>
        </div>
    )
}