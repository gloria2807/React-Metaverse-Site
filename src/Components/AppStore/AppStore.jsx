import React from 'react';
import AppImg from '../../assets/website/app_store.png';
import PlayImg from '../../assets/website/play_store.png';

const AppStore = () => {
  return (
    <>
    <div className="px-4 py-14 sm:min-h-[400px] sm:grid sm:place-items-center">
        <div className='space-y-6 max-w-xl mx-auto'>
            <h1  data-aos='fade-up'
            className='text-2xl text-center sm:text-4xl font-semibold'>Get Started with our App</h1>
            <p data-aos='fade-up' data-aos-delay='300' className='text-center'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, ea.</p>
            <div className='flex flex-wrap justify-center gap-4 items-center'>
                <a href='#' data-aos='fade-up' data-aos-delay='500'>
                    <img src={AppImg} alt='' className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'/>
                </a>
                <a href='#' data-aos='fade-up' data-aos-delay='700'>
                    <img src={PlayImg} alt='' className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'/>
                </a>
            </div>
        </div>
    </div>
    </>
  );
};

export default AppStore;