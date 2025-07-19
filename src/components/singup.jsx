

import { useState } from "react"
import authservice from "../appwrite/auth"
import { Link, useNavigate } from "react-router-dom"
import { login } from "../store/slice"
import { Button, Input, Logo } from "./import_component"
import { useDispatch } from "react-redux"
import { useForm } from "react-hook-form"

function Signup() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()
  const [error, setError] = useState("")

  const HandleSignup = async (data) => {
    setError("")
    try {
      const user = await authservice.CreateAccount(data)
      if (user) {
        const userData = await authservice.CurrentUser()
        if (userData) {
          dispatch(login(userData))
          navigate("/")
        }
      }
    } catch (error) {
      setError(error.message || "Something went wrong, please try again later.")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-4 py-8">
      <div className="mx-auto w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden">
      
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-6">
          <div className="flex justify-center mb-4">
            <div className="inline-block w-17 h-17 bg-white rounded-full p-3 shadow-lg">
              <Logo width="100%" />
            </div>
          </div>
          <h2 className="text-center text-2xl font-bold text-white leading-tight">Create Your Account</h2>
          <p className="mt-2 text-center text-blue-100">Join us today and get started</p>
        </div>

       
        <div className="px-8 py-6">
          <p className="text-center text-sm text-gray-600 mb-6">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-blue-600 hover:text-blue-700 transition-colors duration-200 hover:underline"
            >
              Sign In
            </Link>
          </p>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-700 text-sm text-center font-medium">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit(HandleSignup)} className="space-y-5">
            <div className="space-y-4">
              <div className="relative">
                <Input
                  label="Full Name"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-gray-50 focus:bg-white"
                  {...register("name", {
                    required: true,
                  })}
                />
              </div>

              <div className="relative">
                <Input
                  type="email"
                  label="Email Address"
                  placeholder="Enter your email address"
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
                  placeholder="Create a strong password"
                  type="password"
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
                Create Account
              </Button>
            </div>
          </form>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center">
              By creating an account, you agree to our{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
