import { useState } from 'react'
import './App.css'
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
function App() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // takes value from the password input field
  const checkPasswordChanges = (event) => {
    setPassword(event.target.value);
    console.log(event.target.value); // for checking purpose
  }

  // show and hide password
  const passwordVisibility = () => {
    setShowPassword((originalState) => !originalState)
  }
  return (
    <>
      <div className='min-h-[100vh] '>
        <h1 className='text-center text-3xl font-bold my-8'>Password Strength Checker</h1>
        <form className='flex items-center justify-center flex-col h-96 gap-7'>
          <div className='flex flex-col gap-2'>
            <label htmlFor="">Username</label>
            <input type="text" placeholder='Enter username' className='border border-gray-400 px-4 py-2 rounded-lg outline-none' />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor="">Password</label>
            <div className='flex items-center justify-center gap-1 border border-gray-400 rounded-lg overflow-hidden px-2 py-2'>
              <input type={showPassword ? "text" : "password"} placeholder='Enter password' value={password} onChange={checkPasswordChanges} className=' rounded-lg border-none outline-none' />
              <div onClick={passwordVisibility}>
                {
                  showPassword ? <FaRegEye className='hover:cursor-pointer'/> : <FaRegEyeSlash className='hover:cursor-pointer'/>
                }
              </div>
            </div>
          </div>
          <input type="submit" className='bg-emerald-500 w-32 py-2 rounded-full hover:cursor-pointer text-xl font-semibold' />
        </form>
      </div>
    </>
  )
}

export default App
