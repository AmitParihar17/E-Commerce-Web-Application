import React from 'react'

const NewsletterBox = () => {
    const onSubmitHander = (e) => {
        e.preventDefault()
    }
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
       <p className="text-gray-400 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, voluptatum, repudiel?</p>

        <form onSubmit={onSubmitHander}
         className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
            <input type="email" className='w-full sm:flex-1 outline-none' placeholder='Enter your email' required />
            <button type='submit' className='bg-black text-white text-xs px-10 py-4 cursor-pointer'>SUBSCRRIBE</button>
        </form>

    </div>
  )
}

export default NewsletterBox
