import React from 'react';
import { Link } from 'react-scroll';
import Madan from "../components/images/avatar.png"

const Home = () => {
  return (
    <section className='home min-h-screen flex items-center flex-wrap gap-8' name='home' >
        <div className='content'>
            <span className='hi text-3xl text-orange-400'>Hey there....</span>
            <h3 className='text-8xl text-zinc-900 uppercase'>i am <span className='uppercase text-orange-400'>Madanraj</span></h3>
            <p className='info text-6xl text-zinc-900 uppercase'>front-end developer</p>
            <p className='text text-3xl text-zinc-500 mt-4'>
            Highly motivated and creative front-end developer with a passion for building 
            beautiful and user-friendly web applications. Proficient in HTML, CSS, and JavaScript 
            with a solid foundation in React. A quick learner with a strong understanding of responsive design 
            principles and cross-browser compatibility. Eager to leverage my skills and contribute to dynamic projects 
            in a collaborative and fast-paced environment. Seeking an opportunity to grow and excel as a front-end developer
             with a focus on delivering exceptional user experiences.</p>
            <Link to='about' className='btn inline-block px-3 py-3  bg-orange-400 text-white 
            cursor-pointer text-3xl hover:bg-zinc-900 mt-4'>about me</Link>
        </div>

        <div className='image'>
            <img src={Madan} alt='madanPic' className='w-full h-full' />
        </div>
    </section>
  )
}

export default Home