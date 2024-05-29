import React from 'react'

const Home = () => {

    const logout = () => {
        localStorage.removeItem('signUp')
        window.location.reload()
    }

    const deleteAccount = () => {
        localStorage.clear()
        window.location.reload()
    }

  return (
    <div className=' '>
      <div className='flex h-screen bg-yellow-100 justify-center items-center ' id='romil'>
                        <div className='bg-blue-200 p-12 border-4 border-solid border-black'>
                            <figcaption className='text-center font-bold border-amber-950'></figcaption>
                    
      <h1 className='font-bold text-center text-3xl  text-lg'>Home Page</h1>
      <div>
      <p >Welcome {localStorage.getItem('name')}</p>
      </div>
      <div className='flex justify-center items-center '>
      <button onClick={logout} className=' btn bg-green-200  ring-amber-300 w-full mt-4 h-12 rounded-2xl  hover:text-white font-bold hover:border-2 hover:border-solid hover:border-black'>Logout</button>
      </div>
      <div className='flex justify-center items-center '>
      <button onClick={deleteAccount} className='btn bg-green-200 ring-amber-300 w-full mt-4 h-12 rounded-2xl  hover:text-white font-bold hover:border-2 hover:border-solid hover:border-black'>Delete</button>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Home