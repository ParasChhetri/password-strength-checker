import './App.css'

function App() {

  return (
    <>
    <div className='min-h-[100vh] '>
      <h1 className='text-center text-3xl font-bold my-8'>Password Strength Checker</h1>
      <form className='flex items-center justify-center flex-col h-96 gap-7'>
        <div className='flex flex-col gap-2'>
          <label htmlFor="">Username</label>
          <input type="text" placeholder='Enter username' className='border border-gray-400 px-4 py-2 rounded-lg'/>
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor="">Password</label>
          <input type="email" placeholder='Enter password' className='border border-gray-400 px-4 py-2 rounded-lg'/>
        </div>
        <input type="submit" className='bg-emerald-500 w-32 py-2 rounded-full hover:cursor-pointer text-xl font-semibold'/>
      </form>
    </div>
    </>
  )
}

export default App
