import React from 'react';
import img from "../components/images/avatar.png"

const About = () => {
  return (
    <section className='about' name='about'>
        <h1 className='heading text-5xl pb-4 text-zinc-900 uppercase font-medium'>about 
        <span className='text-orange-400 uppercase'> me</span></h1>

    <div className='row-1 flex flex-wrap gap-6 pb-8'>
        <div className='image'>
            <img src={img} alt='aboutPic' className='w-full h-full object-cover border-8 border-white rounded-lg shadow-lg shadow-zinc-900' />
        </div>

        <div className='content'>
            <h3 className='text-zinc-700 text-6xl pb-2 mt-3'>This is Madanraj & i am a front-end developer</h3>
            <p className='text-zinc-600 text-3xl px-2 py-0 pb-2 mt-4'>
             Enthusiastic and detail-oriented front-end developer with a strong foundation in HTML, CSS, JavaScript, ReactJS and Tailwind CSS. 
             Eager to create visually appealing and responsive web applications that provide seamless user experiences. 
             Looking to contribute and grow in a dynamic team environment.</p>
                
                <div className='box-container flex flex-wrap gap-6 px-2 py-0 text-3xl mt-6'>
                    <div className='box '>
                        <p><span> age: </span> 22</p>
                        <p><span> gender: </span> male</p>
                        <p><span> language: </span> tamil, english</p>
                        <p><span> work: </span> front-end developer</p>
                    </div>
                    <div className='box'>
                        <p><span> freelance: </span> available</p>
                        <p><span> phone: </span> +91 8072441294</p>
                        <p><span> email: </span> madan__raj@hotmail.com</p>
                        <p><span> country: </span> india</p>
                    </div>
                </div>

                 <a href='/Rezume.pdf' aria-label='resume' download={true} rel='noreferrer' target={'_blank'} className='btn inline-block mt-4 px-3 py-3 
                  bg-orange-400 text-white cursor-pointer 
                  text-3xl hover:bg-zinc-900 '>download cv</a>
        </div>
     </div>

     <h1 className='heading text-5xl pb-4 text-zinc-900 uppercase font-medium'>
        <span className='text-orange-400 uppercase'>my</span> skills</h1>

        <div className='row-2 flex flex-wrap gap-6 items-center px-4 py-0'>
            <div className='skills'>
                <div className='progress'>
                    <h3>web development <span>80%</span></h3>
                    <div className='bar'><span></span></div>
                </div>
                <div className='progress'>
                    <h3>Freelancing <span>70%</span></h3>
                    <div className='bar'><span></span></div>
                </div>
            </div>

            <div className='box-container flex flex-wrap gap-6'>
                <div className='box'>
                    <h3> >>  0 </h3>
                    <p>year of experience(fresher)</p>
                </div>
                <div className='box'>
                    <h3> >> 2+ </h3>
                    <p>happy clients</p>
                </div>
                <div className='box'>
                    <h3> >> 2+ </h3>
                    <p>projects completed</p>
                </div>
            </div>
        </div>


    </section>
  )
}

export default About