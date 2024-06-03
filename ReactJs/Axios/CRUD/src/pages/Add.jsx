import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Add = () => {

  



  let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = '/'; 
      navigate(path);
    }

  const [user, setUser] = useState({
    username: "",
    name:"",
    age:"",
    phone:"",
    city:"",
    profession:""
  })

  // const handleImgChange = (e) => {
  //   const file = e.target.files(0)
  //   if(file){
  //     const reader = new FileReader()
  //     reader.onloadend = () => {
  //       setUser({...user , image:reader.result})
  //     }
  //     reader.readAsDataURL(file)
  //   }
  // }
  const onSubmitUser = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/User" , user)
    .then(() => {
      navigate('/')
    })
  } 

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm" onSubmit={onSubmitUser}>
        <h1 className="text-2xl font-bold mb-4 text-center">Add User</h1>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            id="username"
            name='username'
            placeholder='Username'
            className="shadow appearance-none border rounded w-full py-3 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        
            onChange={(e) => setUser({...user , username:e.target.value})}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstname">
            Name
          </label>
          <input
            type="text"
            id="name"
            name='name'
            placeholder='Name'
            className="shadow appearance-none border rounded w-full py-3 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"

            onChange={(e) => setUser({...user , name:e.target.value})}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="age">
            Age
          </label>
          <input
            type="number"
            id="age"
            placeholder='Age'
            className='shadow appearance-none border rounded w-full py-3 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' onChange={(e) => setUser({...user , age:e.target.value})}
    
          />
        </div>
        
        <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mobile">
            Contact
          </label>
          <input
            type="number"
            id="phone"
            name='phone'
            placeholder='Contact Number'
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"onChange={(e) => setUser({...user , phone:e.target.value})}
      
          />
        
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
            City
          </label>
          <input
            type="text"
            id="city"
            name='city'
            placeholder='City'
            className="shadow appearance-none border rounded w-full py-3 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"

            onChange={(e) => setUser({...user , city:e.target.value})}
          />
      
        </div>
       
        <div className="mb-4">
         
      
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="profession">
            Profession
          </label>
          <input
            type="text"
            id="profession"
            placeholder='Profession'
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"onChange={(e) => setUser({...user , profession:e.target.value})}
          />
         
        </div>
          
          <div className='flex justify-center'>
            <button type="Submit" className="px-[16px] mr-3 rounded-lg hover:rounded-xl py-[10px] bg-gray-800 mt-2 border-[1px] border-black text-white hover:bg-white hover:text-black duration-300 ease-in-out hover:scale-105 font-[500]">Add User</button>
            <button type="Submit" className="px-[16px] py-[10px] rounded-lg hover:rounded-xl bg-gray-800 mt-2 border-[1px] border-black text-white hover:bg-white hover:text-black duration-300 ease-in-out hover:scale-105 font-[500]" onClick={routeChange}>Back To Home</button>
          </div>
      </form>
    </div>
  );
};

export default Add;






   