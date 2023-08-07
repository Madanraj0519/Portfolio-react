import React from 'react'

const Experience = () => {

    const experience = [
        {
            id:1,
            span:" Mar 2022 - May 2022 ",
            h3:"Teenofes",
            role:"Front-end Developer",
            para:[
                " Collaborated with a team of two to build a hospital website to manage user interface with the help of Tech like HTML , CSS , and Java Script.",
                "Designed and developed the front-end of a responsive Hospital website for Teenofes Company, featuring anintuitive navigation, visually appealing layout, and interactive elements ."
            ],
            skills:["javascript,","html,","css."]
        },
        {
            id:2,
            span:" Mar 2022 - May 2022 ",
            h3:"Teenofes",
            role:"Front-end Developer",
            para:[
                " Collaborated with a team of two to build a hospital website to manage user interface with the help of Tech like HTML , CSS , and Java Script.",
                "Designed and developed the front-end of a responsive Hospital website for Teenofes Company, featuring anintuitive navigation, visually appealing layout, and interactive elements ."
            ],
            skills:["react,","html,","css."]
        },
    ]

  return (
    <section className='experience py-20 px-0' name='experience'>
        <h1 className='heading text-5xl pb-4 text-zinc-900 uppercase font-medium'>
            <span className='text-orange-400 uppercase'>my </span> experience</h1>

        <div className='box-container flex flex-col gap-6'>         
            {
                 experience.map(exp => (
                    <div className='box border-l-4 border-orange-400 pl-8 pr-8 pb-8'>
                        <div key={exp.id} className='content bg-white p-10 shadow-lg shadow-zinc-900 rounded-lg mt-6'>
                            <span className='text-white bg-orange-400 text-2xl rounded-3xl px-2 py-4'>{exp.span}</span>
                            <h3 className='text-5xl px-2 py-0 text-zinc-900 mt-6'>{exp.h3}</h3>
                            <h2 className='text-3xl px-3 py-1 mt-3'>{exp.role}</h2>
                                {
                                    exp.para.map(para => (
                                        <p className='text-2xl px-3 py-0 text-zinc-900 mt-6'>* {para}</p>
                                    ))
                                }
                           <div className='flex text-2xl px-2 mt-5 gap-2'>
                            <h3 className='text-orange-400'>Tech Used:  </h3>
                            <ul className='flex gap-6'>
                                {
                                    exp.skills.map(skill => (
                                        <li> {skill}</li>
                                    ))
                                }
                            </ul>
                           </div>
                        </div>
                    </div>
                    ))
            }
    </div>
    </section>
  )
}

export default Experience