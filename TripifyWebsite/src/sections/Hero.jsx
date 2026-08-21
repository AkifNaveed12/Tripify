import React, { useEffect } from "react";
import heroimg from "../assets/hero.webp";
import AOS from 'aos'
import 'aos/dist/aos.css'

const Hero = () => {

    useEffect(() => {
        AOS.init({
            duration: 800, 
            delay: 200,
            once: false
        })
    }, []);

    return (
        <div id="hero"
            className="relative w-full lg:h-screen py-30 h-auto bg-cover
            bg-center z-20"
            style={{backgroundImage: `url(${heroimg})`}}>

            {/*   black overlay */}
            <div className="absolute insert-0 bg-black/40"></div>

                {/*  content  */}
                <div className="w-full relative z-10 flex flex-col justify-center
                    items-center h-full gap-6 text-white px-6">
                        
                        <h1 data-aos="zoom-in" data-aos-delay="100"
                            className="lg:text7xl text-4xl capitalize text-center font-fakhwang
                            font-bold bg-transparent-100">Explore every beautiful <br />destination</h1>

                        <p data-aos="zoom-in" data-aos-delay="200"
                            className="text-lg text-center lg:w-[50]% w-full">Discover breathtaking places, unforgettable experiences, and journeys made just for you. Let us help you turn your next trip into a story worth remembering.</p>

                        <button data-aos="slide-up" data-aos-delay="300"
                        className="bg-orange-600 hover:bg-black hover:text-white
                        px-8 py-3 font-semibold capitalize rounded *:mt-5 cursor-pointer">
                        Book Now</button>
                </div>
        </div>
    );
}

export default Hero;
