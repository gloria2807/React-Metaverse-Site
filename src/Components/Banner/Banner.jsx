import React from 'react';
import BannerImg from '../../assets/banner1.png';
import { BiPlayCircle } from 'react-icons/bi';

const Banner = ({togglePlay}) => {
  return (
    <div className='py-12 sm:py-0 relative'>
        <div className="px-4 min-h-[620px] flex items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8
            place-items-center">
                <div data-aos='fade-up' data-aos-once='false'>
                    <img src={BannerImg} alt='' 
                    className='relative w-full max-w-[400px]'/>
                </div>
                <div className='lg:pr-20 relative'>
                    <div className='space-y-5 relative z-10'>
                                    <h1  data-aos='fade-up' data-aos-delay='300'
                                    className='text-4xl font-semibold'>GET READY TO ENJOY VR 
                                        {" "}<span className='bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>
                                            Movies WITH OUR PLATFORM
                                            </span></h1>
                                    <p data-aos='fade-up' data-aos-delay='500'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptate cumque perferendis qui dolorum pariatur ea dolore blanditiis harum architecto magni laborum laboriosam eaque, ullam veritatis, expedita aliquam voluptas repudiandae?</p>
                                    <div className='flex gap-6'>
                                       <button data-aos='fade-up' data-aos-delay='700' className='primary-btn cursor-pointer'>
                                        Get Started
                                        </button>
                                        <button data-aos='fade-up' data-aos-delay='700' onClick={togglePlay}
                                        className='flex items-center gap-2 cursor-pointer'>
                                            {" "}
                                            <BiPlayCircle className='text-3xl' />
                                            See Demo
                                        </button>
                                    </div>
                                    </div>
                                    <div className='h-[300px] w-[300px]
                                    bg-gradient-to-r from-primary to-secondary
                                    rounded-full absolute bottom-[-50px] left-[300px]
                                    blur-3xl opacity-50'></div>
                                </div>
            </div>
        </div>
    </div>
  );
};

export default Banner;