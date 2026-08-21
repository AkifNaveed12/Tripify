import React, {useEffect, useRef, useState} from 'react';
import service1 from '../assets/service1.webp'
import service2 from '../assets/service2.webp'
import service3 from '../assets/service3.webp'
import service4 from '../assets/service4.webp'
import service5 from '../assets/service5.webp'
import service6 from '../assets/service6.webp'
import service3Video from '../assets/service3.mp4'
import service6Video from '../assets/service6.mp4'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { FaPlay, FaPause } from 'react-icons/fa';



const Services = () => {
    const service3Ref = useRef(null);
    const service6Ref = useRef(null);

    const [service3Playing, setService3Playing] = useState(false);
    const [service6Playing, setService6Playing] = useState(false);

    const toggleService3 = () => {
    if (service3Ref.current.paused) {
        service3Ref.current.play();
        setService3Playing(true);
    } else {
        service3Ref.current.pause();
        setService3Playing(false);
    }
};

const toggleService6 = () => {
    if (service6Ref.current.paused) {
        service6Ref.current.play();
        setService6Playing(true);
    } else {
        service6Ref.current.pause();
        setService6Playing(false);
    }
};
    useEffect(() => {
                AOS.init({
                    duration: 800, 
                    delay: 200,
                    once: false
                })
            }, []);
    return (
        <div id='services' className='w-full bg-gray-200 lg:px-22 px-5 lg:py-22 
        py-20 flex flex-col justify-between lg:items-center items-left gap-5'>
            <h1 data-aos="zoom-in" data-aos-delay="100" className='lg:text-5xl text-3xl
            font-fakhwang font-semibold'>Discover your next dream destination</h1>
            <p data-aos="zoom-in" data-aos-delay="200" className='text-gray-500 
            lg:w-[60]% w-full lg:text-center text-left '>From tropical escapes to iconic landmarks, discover handpicked destinations
            that turn every journey into a story worth remembering.</p>
            <hr data-aos="zoom-in" data-aos-delay="300" className='lg-w[7]% w-[20]% border-2 border-orange-600'/>

            {/*services grids here*/}
                {/* first row start here */}
                <div data-aos="zoom-in" data-aos-delay="400" id='first-row' className='w-full flex lg:flex-row flex-col justify-between items-center gap-5 mt-5'>
                    {/* left starts here */}
                    <div id='left'className='lg:w-[50%] w-full flex lg:flex-row flex-col 
                    justify-between items-center gap-5'>
                        <div style={{backgroundImage: `url(${service1})`}} className='relative bg-cover bg-center 
                        w-full h-[350px] lg:w-1/2 rounded-md p-8 flex justify-center items-end'>
                            {/* gradient overlay */}
                            <div className='absolute rounded-md inset-0 bg-gradient-to-t from-black/60 via-black/40 to-white/10'></div>
                            {/* gradient ends */}
                            <div className='relative z-10 w-full flex lg:flex-row flex-col justify-between items-start lg:gap-1 gap-3'>
                                <div className='lg:w-[80%] w-full'>
                                    <h1 className='text-white text-2xl font-semibold'>Pandar Island</h1>
                                    <p className='text-white text-lg'>Indonesia.</p>
                                </div>
                            </div>
                        </div>
                    

                    <div style={{backgroundImage: `url(${service2})`}} className='relative bg-cover bg-center 
                            w-full h-[350px] lg:w-1/2 rounded-md p-8 flex justify-center items-end'>
                            {/* gradient overlay */}
                            <div className='absolute rounded-md inset-0 bg-gradient-to-t from-black/60 via-black/40 to-white/10'></div>
                            {/* gradient ends */}
                            <div className='relative z-10 w-full flex lg:flex-row flex-col justify-between items-start lg:gap-1 gap-3'>
                                <div className='lg:w-[80%] w-full'>
                                    <h1 className='text-white text-2xl font-semibold'>Eiffel Tower</h1>
                                    <p className='text-white text-lg'>Paris, France</p>
                                </div>
                            </div>
                        </div>
                    </div>

                        {/* left ends here */}

                        {/* right bigger dev here */}
                        <div id='right' className='lg:w-[50%] w-full'>
                            <div className='relative bg-cover bg-center 
                            w-full h-[350px] rounded-md p-8 flex justify-center items-end'>

                             {/* video */}
                            <video
                                ref={service3Ref}
                                src={service3Video}
                                poster={service3}
                                className='absolute inset-0 w-full h-full object-cover'
                                playsInline
                                onEnded={() => setService3Playing(false)}
                            />

                            {/* gradient overlay */}
                            <div className='absolute rounded-md inset-0 bg-gradient-to-t from-black/60 via-black/40 to-white/10'></div>
                            {/* gradient ends */}

                            {/* content */}
                            <div className='relative z-10 w-full flex lg:flex-row flex-col justify-between items-start lg:gap-1 gap-3'>
                                <div className='lg:w-[80%] w-full'>
                                    <h1 className='text-white text-2xl font-semibold'>Great Wall of China</h1>
                                    <p className='text-white text-lg'>China</p>
                                </div>

                                {/* video control */}
                                    <button
                                        onClick={toggleService3}
                                        className='lg:w-[10%] bg-white rounded-full flex justify-center items-center p-3 cursor-pointer'
                                    >
                                        {service3Playing ? 
                                        (<FaPause className='lg:text-2xl text-xl' />) : 
                                        ( <FaPlay className='lg:text-2xl text-xl' />)}
                                    </button>
                            </div>
                        </div>
                        </div>
                        {/* right ends here */}
                    </div>
                    {/* first row ends here */}

                {/* 2nd row starts here */}
                <div data-aos="zoom-in" data-aos-delay="400" id='second-row' className='w-full flex lg:flex-row-reverse flex-col justify-between items-center gap-5 mt-5'>
                    {/* left starts here */}
                    <div id='left'className='lg:w-[50%] w-full flex lg:flex-row flex-col 
                    justify-between items-center gap-5'>
                        <div style={{backgroundImage: `url(${service4})`}} className='relative bg-cover bg-center 
                        w-full lg:w-1/2 h-[350px] rounded-md p-8 flex justify-center items-end'>
                            {/* gradient overlay */}
                            <div className='absolute rounded-md inset-0 bg-gradient-to-t from-black/60 via-black/40 to-white/10'></div>
                            {/* gradient ends */}
                            <div className='relative z-10 w-full flex lg:flex-row flex-col justify-between items-start lg:gap-1 gap-3'>
                                <div className='lg:w-[80%] w-full'>
                                    <h1 className='text-white text-2xl font-semibold'>Maldivian Paradise</h1>
                                    <p className='text-white text-lg'>Maldives</p>
                                </div>
                            </div>
                        </div>
                    

                    <div style={{backgroundImage: `url(${service5})`}} className='relative bg-cover bg-center 
                            w-full lg:w-1/2 h-[350px] rounded-md p-8 flex justify-center items-end'>
                            {/* gradient overlay */}
                            <div className='absolute rounded-md inset-0 bg-gradient-to-t from-black/60 via-black/40 to-white/10'></div>
                            {/* gradient ends */}
                            <div className='relative z-10 w-full flex lg:flex-row flex-col justify-between items-start lg:gap-1 gap-3'>
                                <div className='lg:w-[80%] w-full'>
                                    <h1 className='text-white text-2xl font-semibold'>Seiganto-ji Temple & Nachi Falls</h1>
                                    <p className='text-white text-lg'>Wakayama, Japan</p>
                                </div>
                            </div>
                        </div>
                    </div>

                        {/* left ends here */}

                        {/* right bigger dev here */}
                        <div id='right' className='lg:w-[50%] w-full'>
                            <div className='relative bg-cover bg-center 
                            w-full h-[350px] rounded-md p-8 flex justify-center items-end'>

                                  {/* video */}
                                    <video
                                        ref={service6Ref}
                                        src={service6Video}
                                        poster={service6}
                                        className='absolute inset-0 w-full h-full object-cover'
                                        playsInline
                                        onEnded={() => setService6Playing(false)}
                                    />
                            {/* gradient overlay */}
                            <div className='absolute rounded-md inset-0 bg-gradient-to-t from-black/60 via-black/40 to-white/10'></div>
                            {/* gradient ends */}

                            {/* content */}
                            <div className='relative z-10 w-full flex lg:flex-row flex-col justify-between items-start lg:gap-1 gap-3'>
                                <div className='lg:w-[80%] w-full'>
                                    <h1 className='text-white text-2xl font-semibold'>Merlion Park, Singapore</h1>
                                    <p className='text-white text-lg'>Singapore</p>
                                </div>

                                 {/* video control */}
                                <button
                                    onClick={toggleService6}
                                    className='lg:w-[10%] bg-white rounded-full flex justify-center items-center p-3 cursor-pointer'
                                    >
                                        {service6Playing ? (<FaPause className='lg:text-2xl text-xl' /> ) 
                                        : ( <FaPlay className='lg:text-2xl text-xl' /> )}
                                </button>
                            </div>
                            </div>
                        </div>
                        {/* right ends here */}
                    </div>
                
                {/* 2nd row ends here */}
                </div>

                

        
    );
}

export default Services;
