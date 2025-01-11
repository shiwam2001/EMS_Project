import React from 'react'
import { useState } from 'react'
const Login = ({ handleLogin }) => {
    console.log(handleLogin);

    const [Email, setEmail] = useState('')

    const [Password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(Email, Password)
        setEmail('')
        setPassword('')
    }

    return (
        <div
            className='flex h-screen w-screen items-center justify-center'>
            <div onSubmit={(e) => {
                submitHandler(e)
            }}
                className='border-2  rounded-xl border-emerald-600 pt-10 pl-20 pr-20 pb-20 '>
                <h2 className='text-3xl pb-3 text-gray-300'>Welcome in my EMS_Project</h2>
                <form className='flex flex-col m-2 items-center justify-center'>
                    <input required value={Email} onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                        className=' outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 rounded-full placeholder:text-gray-400' type="Email" placeholder='Enter your email' />
                    <input required value={Password} onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                        className=' outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 rounded-full mt-3 placeholder:text-gray-400' type="password" placeholder='Enter your password' />
                    <button class className='text-white mt-5 outline-none bg-transparent border-2 bg-emerald-600 py-3 px-5 rounded-full placeholder:text-white'>Log in</button>
                </form>
            </div>
        </div>
    )
}

export default Login
