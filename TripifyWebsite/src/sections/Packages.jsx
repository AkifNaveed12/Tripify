import React, {useEffect} from 'react';
import { tourpackages } from '../export'
import { MdOutlineDateRange } from 'react-icons/md'
import {FaUsers} from 'react-icons/fa'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Packages = () => {
    useEffect(() => {
            AOS.init({
                delay: 200,
                once: false,
                duration: 800 
                })
            }, []);
    return (
        <div id='packages'
        className='w-full bg-gray-200 flex flex-col justify-center items-center gap-10 px-5 lg:px-22 lg:py-22 py-20'>
            {/* top div starts here */}
            <div id='top'
            className='w-full lg:flex-row flex flex-col justify-between items-center lg:gap-20 gap-5'>
                <div>
                    <h1 data-aos="zoom-in" data-aos-delay="100"
                    className='lg:text-5xl text-3xl font-fakhwang font-semibold text-black'> Explore our most popular tour packages</h1>
                </div>
                <div className='flex flex-col items-start justify-between gap-7'>
                    <p data-aos="zoom-in" data-aos-delay="200"
                    className='text-gray-500 text-left w-full'>Lorem, ipsum dolor sit amet consectetur
                        adipisicing elit. Ipsa distinctio nulla aliquam, dignissimos nobis voluptates!</p>
                    <hr data-aos="zoom-in" data-aos-delay="300" className='w-[15%] border-2 border-orange-600'/>
                </div>
            </div>
            {/* top div ends here */}
            
            {/* bottom div starts here */}
            <div data-aos="zoom-in" data-aos-delay="400" id='bottom' className='w-full'>
                <div className='w-full grid lg:grid-cols-3 grid-cols-1 justify-between items-start gap-6 mt-10'>
                    {tourpackages.map((item, index) => (
                        <div key={index} className='w-full flex flex-col justify-between items-start'>
                            <div id='imagebox' style={{backgroundImage: `url(${item.image})`}}
                                className='bg-cover bg-center h-[300px] w-full rounded-t-md relative'>
                                <span className='bg-orange-600 text-white absolute top-0 left-6 w-auto h-auto p-2 flex flex-col
                                justify-center items-center rounded-md '>
                                    <span className='text-xl font-medium'>{item.price}</span>
                                    <p className='text-sm font-light '>/Person</p>
                                </span>
                            </div>
                            <div id='contentbox' 
                            className='flex w-full flex-col  justify-between items-start bg-white p-7 gap-5'>
                                <h1 className='text-xl text-black font-semibold font-fakhwang w-[80%]'>{item.name}</h1>
                                <hr className='w-full border-1 border-gray-100 '/>

                                <div className='w-full flex justify-start items-center gap-5'>
                                    <span className='flex justify-between items-center gap-1'><MdOutlineDateRange className='text-orange-600 text-xl '/>
                                    <p>{item.days}</p></span>

                                    <span className='flex justify-between items-center gap-1'><FaUsers className='text-orange-600 text-xl '/>
                                    <p>{item.pax}</p></span>
                                </div>

                                <div className='text-gray-500'>{item.about}</div>
                                <button className='bg-orange-600 hover:bg-black w-full text-white px-8 py-3 font-semibold capitalize rounded-md
                                    mt-5 cursor-pointer'>
                                    {item.btn}</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* bottom div ends here */}
        </div>
    );
}

export default Packages;
