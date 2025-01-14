import { useState } from 'react'
import './App.css'
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
function App() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength,setPasswordStrength] = useState("");
  const notify = () => toast.success("Submitted sucessfully");

  // password strength patterns
  const patterns = {
    // password with only upto 5 characters
    weak : /^.{1,5}$/,

    // password with one letter and one number atleast and more than 6 characters
    medium : /^(?=.*[A-Za-z])(?=.*[0-9]).{6,}$/,

    // password with one letter, one number, one special charater and more than 8 characters
    strong : /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,}$/,
  };

  // password strength checker
  const checkPasswordStrength = (password) => {
    if (patterns.strong.test(password)) {
      setPasswordStrength("Strong")
    }else if (patterns.medium.test(password)) {
      setPasswordStrength("Medium")
    }else if (patterns.weak.test(password)) {
      setPasswordStrength("Weak")
    }else {
      setPasswordStrength("")
    }
  }
  // takes value from the password input field
  const checkPasswordChanges = (event) => {
    const newPassword = event.target.value
    setPassword(newPassword);
    checkPasswordStrength(newPassword);
    console.log(newPassword); // for checking purpose
  }

  // show and hide password
  const passwordVisibility = () => {
    setShowPassword((originalState) => !originalState)
  }

  // on submitting our request
  const handelSubmit = (event) => {
    event.preventDefault();
    notify();
  }
  return (
    <>
      <div className='min-h-[100vh] '>
        <h1 className='text-center text-3xl font-bold my-8'>Password Strength Checker</h1>
        <form className='flex items-center justify-center flex-col h-96 gap-7' onSubmit={handelSubmit}>
          <div className='flex flex-col gap-2'>
            <label htmlFor="">Username</label>
            <input type="text" placeholder='Enter username' className='border border-gray-400 px-4 py-2 rounded-lg outline-none' />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor="">Password</label>
            <div className='flex items-center justify-center gap-1 border border-gray-400 rounded-lg overflow-hidden px-2 py-2'>
              <input type={showPassword ? "text" : "password"} placeholder='Enter password' value={password} onChange={checkPasswordChanges} className=' rounded-lg border-none outline-none' />
              <button
                type="button"
                onClick={passwordVisibility}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="text-gray-600"
              >
                {showPassword ? (
                  <FaRegEye className="hover:cursor-pointer" />
                ) : (
                  <FaRegEyeSlash className="hover:cursor-pointer" />
                )}
              </button>
            </div>
            {/* Password strength output */}
            {
              passwordStrength && (
                <p className={`mt-1 text-sm font-semibold ${ passwordStrength === "Strong" ? "text-green-500" : passwordStrength === "Medium" ? "text-yellow-500" :  "text-red-500"}`}>
                  password Strength : {passwordStrength}
                </p>
              )
            }
          </div>
          <button type="submit" className='bg-emerald-500 w-32 py-2 rounded-full hover:cursor-pointer text-xl font-semibold'>Submit</button>
          <ToastContainer />
        </form>
      </div>
    </>
  )
}

export default App
