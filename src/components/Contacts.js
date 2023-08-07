import React from 'react';
import {FaEnvelope, FaPhone, FaAddressCard} from "react-icons/fa"
import { Button } from 'react-scroll';

const Contacts = () => {
    const contacts = [
        {
            id:1,
            child:(
                <>
                <FaEnvelope />
                </>
            ),
            title:"my email",
            para1:"madan__raj@hotmail.com",
            para2:"madanraj0519@gmail.com"
        },
        {
            id:2,
            child:(
                <>
                <FaPhone />
                </>
            ),
            title:"my number",
            para1:"+91 8072441294",
            para2:"+91 8190928894"
        },
        {
            id:3,
            child:(
                <>
            <FaAddressCard />
                </>
            ),
            title:"my address",
            para1:"Chennai,",
            para2:"Tamilnadu, India.",
        },
       ]

  return (
   <section className='contact' name='contact'>
           <h1 className='heading text-5xl pb-4 text-zinc-900 uppercase font-medium'>
            <span className='text-orange-400 uppercase'>contact </span> me</h1>

            <div className='icons-container flex flex-wrap gap-6 pb-8'>
               {
                contacts.map(contact => (
                    <div className='icons text-center p-8 bg-white shadow-lg shadow-zinc-900 rounded-lg ' key={contact.id}>
                    <div className='h-20 w-20 bg-orange-400 rounded-2xl text-white'>
                        <h1 className='p-4 text-5xl '>{contact.child}</h1>
                    </div>
                    <h3 className='text-zinc-900 text-4xl px-2 p-0 font-medium'>{contact.title}</h3>
                    <p className='text-zinc-500 text-2xl mt-6'>{contact.para1}</p>
                    <p className='text-zinc-500 text-2xl mt-3'>{contact.para2}</p>
                </div>
                ))
               }
            </div>

            <div className='row flex flex-wrap gap-6'>
                <form className='bg-white px-8 py-0 shadow-lg shadow-zinc-900 rounded-lg'  action="https://getform.io/f/24d5a5b2-ce05-452d-81ca-ef1777a99223" method="POST">
                    <input type='text' placeholder='Enter your Name' required className='box' />
                    <input type='email' placeholder='Enter your email' required className='box' />
                    <input type='number' placeholder='Enter your number' required className='box' />

                    <textarea type='text' placeholder='Enter your message' className='box' />

                    <button type='submit' className='btn inline-block mt-2 px-3 py-3  bg-orange-400 text-white 
            cursor-pointer text-3xl hover:bg-zinc-900 mb-6'>Submit</button>
                </form>

                <iframe className='map border-2 border-white shadow-lg shadow-zinc-900 rounded-lg w-full  ' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.5482500326093!2d80.26238308165021!3d13.000720411287732!2m3!1f0!2f0!
                3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526759b61b4ec3%3A0xf7bffde96f5a573a!2sBesant%20Nagar%20Bus%20Depot!5e0!3m2!1sen!2sin!4v1690476603067!5m2!1sen!2sin"
                 allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>       
   </section>
  )
}

export default Contacts