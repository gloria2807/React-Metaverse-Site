import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt } from 'react-icons/fa';


const FooterLinks = [
    { id:1, title: 'Home', link: "/#" },
    { 
        id:2, 
        title: 'About', 
        link: "/#about" 
    },
    { 
        id:3, 
        title: 'Contact', 
        link: "/#contact" 
    },
    { 
        id:4, 
        title: 'Blog', 
        link: "/#blog" 
    },
];

const Footer = () => {
  return (
    <>
    <div data-aos='fade' className="bg-gray-100 mt-14 rounded-t-3xl dark:bg-black">
        <div className="px-12">
            <div className="grid md:grid-cols-3 py-4">
                <div className="py-8 px-4">
                    <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3'>
                        Metaverse
                    </h1>
                    <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, deleniti?</p>
                    <br />
                    <div>
                        <div className="flex items-center gap-3">
                            <FaLocationArrow />
                            <p>Innovative Solutions</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaMobileAlt />
                            <p>+234-81*-***-****</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 mt-6">
                    <a href='#'>
                        <FaFacebook className='text-3xl hover:text-primary duration-300' />
                    </a>
                    <a href='#'>
                        <FaInstagram className='text-3xl hover:text-primary duration-300'/>
                    </a>
                    <a href='#'>
                        <FaLinkedin className='text-3xl hover:text-primary duration-300'/>
                    </a>
                    </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
                    <div>
                        <div className="py-8 px-4">
                            <h1 className="text-xl font-bold mb-3">Quick Links</h1>
                                <ul className='space-y-3'>
                                    {FooterLinks.map(({id, link, title}) => {
                                        return(
                                        <li
                                        key={id}
                                        className='hover:translate-x-1 duration-300'
                                        >
                                            <a href={link}
                                            className='cursor-pointer hover:text-primary'
                                            >
                                                {title}
                                            </a>
                                        </li>
                                        );
                                    })
                                    }
                                </ul>
                        </div>
                    </div>
                    <div>
                         <div className="py-8 px-4">
                            <h1 className="text-xl font-bold mb-3">Quick Links</h1>
                                <ul className='space-y-3'>
                                    {FooterLinks.map(({id, link, title}) => {
                                        return(
                                        <li
                                        key={id}
                                        className='hover:translate-x-1 duration-300'
                                        >
                                            <a href={link}
                                            className='cursor-pointer hover:text-primary'
                                            >
                                                {title}
                                            </a>
                                        </li>
                                        );
                                    })
                                    }
                                </ul>
                        </div>
                    </div>
                    <div>
                         <div className="py-8 px-4">
                            <h1 className="text-xl font-bold mb-3">Location</h1>
                                <ul className='space-y-3'>
                                    {FooterLinks.map(({id, link, title}) => {
                                        return(
                                        <li
                                        key={id}
                                        className='hover:translate-x-1 duration-300'
                                        >
                                            <a href={link}
                                            className='cursor-pointer hover:text-primary'
                                            >
                                                {title}
                                            </a>
                                        </li>
                                        );
                                    })
                                    }
                                </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default Footer;