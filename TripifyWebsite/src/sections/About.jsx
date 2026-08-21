import React from 'react';
import aboutimg1 from '../assets/about1.webp'
import aboutimg2 from '../assets/about2.webp'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {FaGlobeAmericas} from 'react-icons/fa'
import {IoIosPricetag} from 'react-icons/io'
import { useEffect } from "react";

const About = () => {
    useEffect(() => {
            AOS.init({
                duration: 800, 
                delay: 200,
                once: false
            })
        }, []);
    return (
        <div id='about'
        className='flex lg:flex-row flex-col justify-between items-center
        gap-15 lg:px-22 px-5 lg:py-22 p-29'>
            
            {/* images div of about section */}
            <div className='flex flex-col justify-center items-start'>
                <img data-aos="zoom-in" data-aos-delay="100"
                className='rounded-md' src={aboutimg1} alt="" />
                <img data-aos="zoom-in" data-aos-delay="200"
                className='rounded-md w-[40]% border-10 border-white
                -mt-[150px] -ml-[30px] -rotate-2' src={aboutimg2} alt="" />
            </div>
            <div className='flex flex-col gap-5'>
                <h1 data-aos="zoom-in" data-aos-delay="300"
                className='text-md text-gray-600'>About Us</h1>
                <h1 data-aos="zoom-in" data-aos-delay="400"
                className='lg:text-5xl text-3xl font-fakhwang font-semibold
                text-black'>Your journey begins with experiences worth remembering!</h1>

                <p data-aos="zoom-in" data-aos-delay="500"
                className='text-gray-700 font-semibold'>At Tripify, we believe travel is more than simply visiting new places. It is about discovering new cultures, creating unforgettable memories, and experiencing the world in a way that feels truly personal.</p>

                <p data-aos="zoom-in" data-aos-delay="600"
                className='text-gray-500'>From breathtaking destinations to carefully planned adventures, we make it easier to explore with confidence, comfort, and excitement. Wherever you want to go, we are here to help make the journey special.</p>

                <hr className='w-full border-gray-300 border-t'/>

                <div data-aos="zoom-in" data-aos-delay="600" 
                    id='iconbox' className='w-full grid lg:grid-cols-2
                    grid-cols-1 justify-center items-center lg:gap-5 gap-10'>

                    <div id='left' className='flex lg:flex-row flex-col justify-between lg:justify-between *
                        lg:items-center items-start gap-4' >
                            
                        <div id='icon' className='w-[20]% flex justify-center items-center
                        bg-orange-600 hover:bg-black cursor-pointer p-4 rounded-md '>
                            <FaGlobeAmericas className='text-3xl text-white'/>
                        </div>

                        <div className='w-[80]% flex flex-col justify-center items-start gap-1'>
                            <h1 className='text-black text-xl font-medium'>Best Destinations</h1>
                            <p className='text-sm text-gray-500'>Explore handpicked destinations that turn every trip into an unforgettable adventure.</p>
                        </div>
                    </div>

                    <div id='right' className='flex lg:flex-row flex-col justify-between lg:justify-between *
                        lg:items-center items-start gap-4' >
                            
                        <div id='icon' className='w-[20]% flex justify-center items-center
                        bg-orange-600 hover:bg-black cursor-pointer p-4 rounded-md '>
                            <IoIosPricetag className='text-3xl text-white'/>
                        </div>

                        <div className='w-[80]% flex flex-col justify-center items-start gap-1'>
                            <h1 className='text-black text-xl font-medium'>Affordable Price</h1>
                            <p className='text-sm text-gray-500'>Enjoy thoughtfully planned trips at prices that make exploring the world easier.</p>
                        </div>
                    </div>                 
                </div>
            </div>
        </div>
    );
}

export default About;
