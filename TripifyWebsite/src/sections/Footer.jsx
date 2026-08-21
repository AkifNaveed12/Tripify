import React, {useEffect} from 'react';
import {IoMail} from 'react-icons/io5'
import {FaPhoneAlt} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'
import {FaTwitter, FaLinkedin, FaFacebook} from 'react-icons/fa'
import AOS from 'aos'
import 'aos/dist/aos.css'
const Footer = () => {
    useEffect(() => {
        AOS.init({
            once: false,
            duration: 800, 
            delay: 200
                        })
        }, []);
    return (
        <div id='contact' className='w-full bg-black lg:px-22 px-5 pt-5 pb-5 flex flex-col justify-center items-center gap-12'>
            {/* top div starts here */}
            <div id='top'
            className='bg-[#046e8f] w-full lg:px-10 p-6 rounded-md flex lg:flex-row flex-col justify-between items-start -mt-[80px]'>
                <div className='lg:w-[70%] w-full flex flex-col justify-between items-start gap-5'>
                    <h1 className='text-3xl font-fakhwang  font-semibold text-white text-left lg:w-[60%] w-full' >Crafting unforgettable journeys, one adventure at a time!</h1>
                    <hr className='lg:w-[10%] w-[20%] border-2 border-orange-600' />
                </div>

                <div className='lg:w-[30%] w-full flex flex-col justify-between items-start gap-5'>
                    <h1 className='text-white text-xl'>Subscribe to our Newsletters</h1>
                    <div className='flex lg:flex-row flex-col gap-3 w-full'>
                        <input type="text" placeholder='Enter your Email' className='bg-white p-1 rounded-md text-black'/>
                        <button className='bg-orange-600 text-white rounded-md '>Subscribe</button>
                    </div>
                </div>

            </div>
            {/* top div ends here */}

            {/* mid div starts here */}
            <div id='mid' className='text-white w-full flex lg:flex-row flex-col justify-between items-start gap-10'>
                {/* 1st box */}
                <div className='lg:w-[40%] w-full '>
                    <h1 className='text-3xl font-fakhwang font-semibold'>Tripify</h1>
                    <p className='mt-5'> Your journey starts here. Discover inspiring destinations, thoughtfully planned
                    adventures, and experiences designed to make every trip unforgettable.</p>
                    <div className='flex flex-col justify-between items-start gap-2'>
                        {/* icons and contact here */}
                        <div className='flex justify-start items-center gap-2'> 
                            <IoMail className='text-orange-600 text-xl'/>
                            <p>hello@tripify.com</p>
                        </div>

                        <div className='flex justify-start items-center gap-2'> 
                            <FaPhoneAlt className='text-orange-600 text-xl'/>
                            <p>+92 314 367 890</p>
                        </div>
                    </div>

                </div>
                {/* 1st box ends */}

                {/* 2nd box (a) start */}
                <div className='lg:w-[20%] w-full'>
                    <h1 className='text-xl font-medium font-fakhwang'>Quick Links</h1>
                    <ul className='flex flex-col justify-between items-start gap-3 mt-5'>
                        <li className='text-gray-300 hover:text-orange-600 cursor-pointer'>Home</li>
                        <li className='text-gray-300 hover:text-orange-600 cursor-pointer'>About</li>
                        <li className='text-gray-300 hover:text-orange-600 cursor-pointer'>Services</li>
                        <li className='text-gray-300 hover:text-orange-600 cursor-pointer'>Features</li>
                        <li className='text-gray-300 hover:text-orange-600 cursor-pointer'>Contact</li>
                    </ul>
                </div>
                {/* 2nd box (a) ends here */}

                {/* 2nd box (b) start */}
                <div className='lg:w-[20%] w-full'>
                    <h1 className='text-xl font-medium font-fakhwang'>Travel Services</h1>
                    <ul className='flex flex-col justify-between items-start gap-3 mt-5'>
                        <li className='text-gray-300 hover:text-orange-600 cursor-pointer'>Tour Packages</li>
                        <li className='text-gray-300 hover:text-orange-600 cursor-pointer'>Flight & hotel deals</li>
                        <li className='text-gray-300 hover:text-orange-600 cursor-pointer'>Travel Insurance</li>
                        <li className='text-gray-300 hover:text-orange-600 cursor-pointer'>Visa Assistance</li>
                        <li className='text-gray-300 hover:text-orange-600 cursor-pointer'>Online Booking</li>
                    </ul>
                </div>
                {/* 2nd box (b) ends here */}

                {/* 2nd box (c) start */}
                <div className='lg:w-[20%] w-full'>
                    <h1 className='text-xl font-medium font-fakhwang'>Follow Us</h1>
                    <ul className='flex flex-col justify-between items-start gap-3 mt-5'>
                        <li className='text-gray-300 hover:text-orange-600 cursor-pointer'><FaFacebook className='text-orange-600 text-xl'/>Facebook</li>
                        <li className='text-gray-300 hover:text-orange-600 cursor-pointer'><AiFillInstagram className='text-orange-600 text-xl'/>Instagram</li>
                        <li className='text-gray-300 hover:text-orange-600 cursor-pointer'><FaLinkedin className='text-orange-600 text-xl'/>LinkedIn</li>
                        <li className='text-gray-300 hover:text-orange-600 cursor-pointer'><FaTwitter className='text-orange-600 text-xl'/>Twitter</li>
                    </ul>
                </div>
                {/* 2nd box (c) ends here */}

            </div>
            <hr className='w-full border-1 border-gray-800'/>
            {/* mid div ends here */}

            {/* last div starts here */}
            <div id='last'
            className='flex justify-between items-center gap-2'>
                <p className='text-gray-300 text-center '>Copyright 2026, All Rights Reserved.</p>
            </div>
            {/* last div ends here */}
        </div>
    );
}

export default Footer;
