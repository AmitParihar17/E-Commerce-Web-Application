import React, { useState } from 'react'

const Login = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    
    

    const onSubmitHandler = async (e) => {
        try {
            e.preventDefault()
            // console.log(email, password);
            
        } catch (error) {
            
        }
    }
  return (
    <div className='flex items-center justify-center min-h-screen '>
        <div className="bg-white shadow-md rounded-lg px-8 py-8 max-w-md">
            <h1 className='text-2xl font-bold mb-4 text-center'>Admin Panel</h1>
            <form onSubmit={onSubmitHandler}>
                <div className="mb-3 min-w-72">
                    <p className='text-sm font-medium mb-3 text-gray-700'>Email</p>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} className='w-full border border-gray-300 rounded-md px-3 py-2 outline-none' type="email" placeholder='Your@gmail.com' required />
                </div>
                <div className='mb-3 min-w-72'>
                    <p className='text-sm font-medium mb-3 text-gray-700'>Password</p>
                    <input onChange={(e) => setPassword(e.target.value)} value={password} className='w-full border border-gray-300 rounded-md px-3 py-2 outline-none' type="password" placeholder='Enter your password' />
                </div>
                <button className='mt-2 w-full py-2 px-4 rounded-md text-white bg-black cursor-pointer' type='submit'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login
