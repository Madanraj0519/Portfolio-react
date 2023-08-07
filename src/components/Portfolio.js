import React from 'react';
import {FaLink, FaShare, FaSearch} from "react-icons/fa";
import commerce from "../components/images/e-commerce-Website.png"

const Portfolio = () => {

    const portfolio = [
        {
            id:1,
            img:commerce,
            title:"Ecommerce website",
        },
        {
            id:2,
            img:commerce,
            title:"Ecommerce websiteasdfsgfdgdgdfg",
        },
        {
            id:3,
            img:commerce,
            title:"E-commerce website with redux toolkit",
        },
        {
            id:4,
            img:commerce,
            title:"Ecommerce website",
        },
    ]
  return (
    <section className='portfolio mb-10' name='portfolio'>
        <h1 className='heading text-5xl pb-4 text-zinc-900 uppercase font-medium'>
            <span className='text-orange-400 uppercase'>my </span> portfolio</h1>

        <div className='box-container grid md:grid-cols-3 gap-8'>
           {
            portfolio.map(port => (
                <div className='box overflow-hidden border-2 border-white shadow-lg shadow-zinc-900 p-4' key={port.id}>
                <img src={port.img} className='h-full w-full object-cover rounded-lg' />
               <div className='flex justify-between gap-8 items-center'>
               <h3 className='bottom-1 left-4 text-2xl text-zinc-900 font-medium'>{port.title}</h3>
                <div className='icons flex gap-4 '>
                    <a><FaLink/></a>
                    <a><FaShare /></a>
                    <a><FaSearch /></a>
                </div>
               </div>
            </div>

            ))
           }
        </div>
    </section>
  )
}

export default Portfolio