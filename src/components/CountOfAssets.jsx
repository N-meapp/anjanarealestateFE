import { useEffect, useState } from "react";

export default function CountOfAssets() {
    const [countOne, setCountOne] = useState(0);
    const [countTwo, setCountTwo] = useState(0);
    const [countThree, setCountThree] = useState(0);
    const [countFour, setCountFour] = useState(0);
    const [hasCounted, setHasCounted] = useState(false); // Track if counting has occurred

    const handleCount = () => {
        let count = 0;
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                if (i === 19) {
                    setCountOne(5999);
                    setCountTwo(6999);
                    setCountThree(4322);
                    setCountFour(1200);
                } else {
                    setCountOne(count + i * 32);
                    setCountTwo(count + i * 32);
                    setCountThree(count + i * 32);
                    setCountFour(count + i * 32);
                }
            }, i * 50);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const targetDiv = document.getElementById("scroll-div");
            if (targetDiv && !hasCounted) { // Only trigger if hasCounted is false
                const scrollPosition = window.scrollY || window.pageYOffset;
                const divTop = targetDiv.getBoundingClientRect().top + scrollPosition;

                if (scrollPosition >= divTop - window.innerHeight + 100) {
                    handleCount();
                    setHasCounted(true); // Set to true after counting
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [hasCounted]);

    return (
        <div>
        <div className="container mx-auto px-4">
         <h1 class="overflow-hidden pr-5 text-2xl font-bold text-[#e1b400]">#Happy clients</h1>
         <h1 class="overflow-hidden pr-5 text-5xl font-extrabold text-[#e5de85]">Push Your Visitors Into Happy Customers</h1>
         </div>
             <div id="scroll-div" className="md:flex gap-5 w-full justify-around mb-36 md:mt-36 mt-20 counter-div" >

            <div className="text-center md:mb-0 mb-12">
                <h1 className="text-4xl text-black font-extrabold">{countOne}</h1>
                <h1 className="text-[#00000079] text-sm mt-3"># of Buy Properties</h1>
            </div>
            <div className="text-center  md:mb-0 mb-12">
                <h1 className="text-4xl text-black font-extrabold">{countTwo}</h1>
                <h1 className="text-[#00000079] text-sm mt-3"># of Rent Properties</h1>
            </div>
            <div className="text-center  md:mb-0 mb-12">
                <h1 className="text-4xl text-black font-extrabold">{countThree}</h1>
                <h1 className="text-[#00000079] text-sm mt-3"># of Lease Properties</h1>
            </div>
            <div className="text-center  md:mb-0 mb-12">
                <h1 className="text-4xl text-black font-extrabold">{countFour} +</h1>
                <h1 className="text-[#00000079] text-sm mt-3"># of Sold Properties</h1>
            </div>
        </div>
        </div>
    );
}
