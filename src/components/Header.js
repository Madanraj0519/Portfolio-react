import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';   
import {FaBars, FaTimes, FaInstagram, FaTwitter, FaLinkedin, FaGithub} from "react-icons/fa"

const Header = () => {

  const [show, setShow] = useState("true");


  const links = [
    {
        id:1,
        name:"home",
    },
    {
        id:2,
        name:"about",
    },
    {
        id:3,
        name:"experience",
    },
    {
        id:4,
        name:"portfolio",
    },
    {
        id:5,
        name:"contact",
    },

  ]

  return (
   <>
    <div className='menu-bars fixed top-1 right-1 z-10000
     bg-orange-400 text-white rounded-md px-1.5 
     py-1 text-5xl cursor-pointer block lg:hidden' 
       onClick={() => setShow(!show)}>
        {show ? <FaBars /> : <FaTimes />}
    </div>

    <div className={`Header bg-zinc-900 z-1000 px-8 py-32 fixed top-0 ${show ?"-left-3/4":"left-0 w-5/6"} lg:left-0 bottom-0 flex items-center justify-between flex-col md:w-1/5 item-center`}>
        
        <Link to="#" className='logo uppercase text-white text-6xl font-bold'><span className='uppercase text-orange-400'>Madan </span>raj</Link>

        
            {
                links.map(link => (
                    <nav className='navbar' key={link.id}>
                    <Link to={link.name} className='link block text-3xl text-white mx-0 my-8' onClick={()=>setShow(!show)}>{link.name}</Link>
                    </nav>
                ))
            }

        <div className='follow flex'>
            <a href='#'><FaGithub/></a>
            <a href='#'><FaInstagram /></a>
            <a href='#'><FaTwitter /></a>
            <a href='#'><FaLinkedin/></a>
        </div>
    </div>
   </>
  )
}

export default Header