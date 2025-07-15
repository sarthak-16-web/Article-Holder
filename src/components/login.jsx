// import React from 'react'
// import { useState } from 'react'
// import { useNavigate  , Link} from 'react-router-dom'
// import { login as StoreLogin } from '../store/slice'
// import { Button  ,  Input , Logo} from './import_component'
// import authservice from '../appwrite/auth.js'
// import { useDispatch } from 'react-redux'
// import {useForm} from "react-hook-form"


// function Login() {
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     const {register , handleSubmit } = useForm()
//     const [error , setError] = useState(" ");

//      const login  = async (data) => {
//            setError(" ");
//            try {
//               const session =  await authservice.Login(data)
//               if(session){
//                 const userData = await authservice.CurrentUser()
//                 if(userData){
//                     dispatch(StoreLogin(userData))
//                     navigate("/")
//                     return ;
//                 }
//               }
//               setError("Invalid credentials");
//            } catch (error) {
//                 setError(error?.message || "Invalid email or password");
//            }
//       }
//   return (
//      <div
//     className='flex items-center justify-center w-full'
//     >
//         <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
//         <div className="mb-2 flex justify-center">
//                     <span className="inline-block w-full max-w-[100px]">
//                         <Logo width="100%" />
//                     </span>
//         </div>
//         <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
//         <p className="mt-2 text-center text-base text-black/60">
//                     Don&apos;t have any account?&nbsp;
//                     <Link
//                         to="/signup"
//                         className="font-medium text-primary transition-all duration-200 hover:underline"
//                     >
//                         Sign Up
//                     </Link>
//         </p>
//         {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
//         <form onSubmit={handleSubmit(login)} className='mt-8'>
//             <div className='space-y-5'>
//                 <Input
//                 label="Email: "
//                 placeholder="Enter your email"
//                 type="email"
//                 {...register("email", {
//                     required: true,
//                     validate: {
//                         matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || // Regexr 
//                         "Email address must be a valid address",
//                     }
//                 })}
//                 />
//                 <Input
//                 label="Password: "
//                 type="password"
//                 placeholder="Enter your password"
//                 {...register("password", {
//                     required: true,
//                     })}
//                 />
//                 <Button
//                 type="submit"
//                 className="w-full"
//                 >Sign in</Button>
//             </div>
//         </form>
//         </div>
//     </div>
//   )
// }   

// export default Login


// "use client"
import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { login as StoreLogin } from "../store/slice"
import { Button, Input, Logo } from "./import_component"
import authservice from "../appwrite/auth.js"
import { useDispatch } from "react-redux"
import { useForm } from "react-hook-form"

function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()
  const [error, setError] = useState(" ")

  const login = async (data) => {
    setError(" ")
    try {
      const session = await authservice.Login(data)
      if (session) {
        const userData = await authservice.CurrentUser()
        if (userData) {
          dispatch(StoreLogin(userData))
          navigate("/")
          return
        }
      }
      setError("Invalid credentials") // This line will only be reached if session is null/undefined
    } catch (error) {
      setError(error?.message || "Invalid email or password")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-4 py-8">
      <div className="mx-auto w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-6">
          <div className="flex justify-center mb-4">
            <div className="inline-block w-17 h-17 bg-white rounded-full p-3 shadow-lg">
              <Logo width="100%" />
            </div>
          </div>
          <h2 className="text-center text-2xl font-bold text-white leading-tight">Sign In to Your Account</h2>
          <p className="mt-2 text-center text-blue-100">Welcome back! Please enter your details.</p>
        </div>

        {/* Form Section */}
        <div className="px-8 py-6">
          <p className="text-center text-sm text-gray-600 mb-6">
            Don&apos;t have an account?{" "}
            <Link
              to="/signup"
              className="font-semibold text-blue-600 hover:text-blue-700 transition-colors duration-200 hover:underline"
            >
              Sign Up
            </Link>
          </p>

          {error &&
            error.trim() !== "" && ( // Only show error if it's not empty or just whitespace
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-700 text-sm text-center font-medium">{error}</p>
              </div>
            )}

          <form onSubmit={handleSubmit(login)} className="space-y-5">
            <div className="space-y-4">
              <div className="relative">
                <Input
                  label="Email Address"
                  placeholder="Enter your email address"
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-gray-50 focus:bg-white"
                  {...register("email", {
                    required: true,
                    validate: {
                      matchPatern: (value) =>
                        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                    },
                  })}
                />
              </div>

              <div className="relative">
                <Input
                  label="Password"
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-gray-50 focus:bg-white"
                  {...register("password", {
                    required: true,
                  })}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] focus:ring-4 focus:ring-blue-200 shadow-lg"
              >
                Sign In
              </Button>
            </div>
          </form>

          <div className="mt-6 text-center">
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
