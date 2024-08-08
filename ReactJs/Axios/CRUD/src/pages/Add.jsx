import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Add = () => {

  let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = '/'; 
      navigate(path);
    }

  const [user, setUser] = useState({
    image: "https://cdn-icons-png.freepik.com/512/847/847969.png",
    username: "",
    name:"",
    age:"",
    phone:"",
    city:"",
    profession:"",
    gender:""
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
    axios.post("http://localhost:3000/users" , user)
    .then(() => {
      navigate('/')
    })
  } 

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm" onSubmit={onSubmitUser}>
        <h1 className="text-2xl font-bold mb-4 text-center">Add User</h1>
        <div className="flex items-center rounded-md p-2 mb-4">
          <div className="w-20 mr-3">
            <img
              src={user.image}
              className="inline-block h-14 w-14 rounded-full border"
              alt="avatar"
            />
          </div>
          <select
            id="Img"
            name="image"
            onChange={(e) => setUser({ ...user, image: e.target.value })}
            // onChange={getInputVal}
            className="flex w-full  text-center rounded-md shadow border bg-transparent px-[16px] py-[10px] leading-tight cursor-pointer text-gray-700 focus:outline-gray-500 appearance-none"
          >
            <option defaultValue="https://cdn-icons-png.freepik.com/512/847/847969.png">
              Select a Avatar
            </option>
            <optgroup label="Male Avatar" className="text-left">
              <option
                value="https://xsgames.co/randomusers/assets/avatars/male/26.jpg"
                className="text-center"
              >
                Patrick Shei
              </option>
              <option
                value="https://xsgames.co/randomusers/assets/avatars/male/44.jpg"
                className="text-center"
              >
                Harland Qualley
              </option>
              <option
                value="https://xsgames.co/randomusers/assets/avatars/male/64.jpg"
                className="text-center"
              >
                Jerald Whalum
              </option>
              <option
                value="https://xsgames.co/randomusers/assets/avatars/male/73.jpg"
                className="text-center"
              >
                Tracey Vollkommer
              </option>
              <option
                value="https://xsgames.co/randomusers/assets/avatars/male/74.jpg"
                className="text-center"
              >
                Kendall Salls
              </option>
              <option
                value="https://xsgames.co/randomusers/assets/avatars/male/57.jpg"
                className="text-center"
              >
                Owen Aubourg
              </option>
              <option
                value="https://xsgames.co/randomusers/assets/avatars/male/52.jpg"
                className="text-center"
              >
                Michael Davis
              </option>
              <option
                value="https://xsgames.co/randomusers/assets/avatars/male/28.jpg"
                className="text-center"
              >
                David Brown
              </option>
              <option
                value="https://xsgames.co/randomusers/assets/avatars/male/17.jpg"
                className="text-center"
              >
                Mark Johnson
              </option>
            </optgroup>
            <optgroup label="Female Avatar" className="text-left">
              <option
                value="https://xsgames.co/randomusers/assets/avatars/female/33.jpg"
                className="text-center"
              >
                Luanna Waiden
              </option>
              <option
                value="https://xsgames.co/randomusers/assets/avatars/female/39.jpg"
                className="text-center"
              >
                Jadwiga Brasko
              </option>
              <option
                value="https://xsgames.co/randomusers/assets/avatars/female/63.jpg"
                className="text-center"
              >
                Hertha Hathaway
              </option>
              <option
                value="https://xsgames.co/randomusers/assets/avatars/female/20.jpg"
                className="text-center"
              >
                Consuelo Henry
              </option>
              <option
                value="https://xsgames.co/randomusers/assets/avatars/female/37.jpg"
                className="text-center"
              >
                Theresa Matzinger
              </option>
              <option
                value="https://xsgames.co/randomusers/assets/avatars/female/44.jpg"
                className="text-center"
              >
                Sara Lee
              </option>
              <option
                value="https://xsgames.co/randomusers/assets/avatars/female/58.jpg"
                className="text-center"
              >
                Anna Smith
              </option>
              <option
                value="https://xsgames.co/randomusers/assets/avatars/female/31.jpg"
                className="text-center"
              >
                Nicole Vielbig
              </option>
            </optgroup>
          </select>
        </div>

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
            required
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
            required
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
            className='shadow appearance-none border rounded w-full py-3 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
            onChange={(e) => setUser({...user , age:e.target.value})}
            required
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
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
            onChange={(e) => setUser({...user , phone:e.target.value})}
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
            required
            onChange={(e) => setUser({...user , city:e.target.value})}
          />
      
        </div>
       
        <div className="mb-4">
        <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="profession"
          >
            Profession
          </label>
          <select id="profession" name="profession"
          onChange={(e) => setUser({...user , profession:e.target.value})}
           className="w-full appearance-none shadow cursor-pointer rounded-md border bg-transparent px-[16px] py-[10px] leading-tight text-gray-700 focus:outline-gray-500">
                <option defaultValue="Select Profession">Select Profession</option>
                <option value="Software Developer">Software Developer</option>
                <option value="Database Administrator">Database Administrator</option>
                <option value="DevOps Engineer">DevOps Engineer</option>
                <option value="QA Tester">QA Tester</option>
                <option value="Mobile App Developer">Mobile App Developer</option>
                <option value="Front-End Developer">Front-End Developer</option>
                <option value="Back-End Developer">Back-End Developer</option>
                <option value="Full Stack Developer">Full Stack Developer</option>
                <option value="IOS Developer">IOS Developer</option>
                <option value="System Administrator">System Administrator</option>
                <option value="Network Engineer">Network Engineer</option>
                <option value="Cybersecurity Analyst">Cybersecurity Analyst</option>
                <option value="React Developer">React Developer</option>
                <option value="Cloud Architect">Cloud Architect</option>
                <option value="Data Scientist">Data Scientist</option>
                <option value="UX/UI Designer">UX/UI Designer</option>
          </select>
        </div>
        <div className="grid grid-cols-2 gap-2 mb-3">
              <h4 className="w-full flex col-span-2 text-gray-700 font-bold text-sm mb-1">
                Gender
              </h4>
              <label>
                <input
                  type="radio"
                  value="Male"
                  onChange={(e) => setUser({ ...user, gender: e.target.value })}
                  className="peer hidden"
                  checked={user.gender === "Male"}
                  // {employee.gender === "male" ?  checked : ""}
                  name="gender"
                />

                <div className="hover:bg-gray-50 flex items-center justify-start gap-x-2 py-2 px-3 border-2 rounded-md shadow cursor-pointer  border-gray-200 group peer-checked:border-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-gray-400 group-[.peer:checked+&]:text-gray-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="text-gray-400 ">Male</p>
                </div>
              </label>
              <label>
                <input
                  type="radio"
                  value="Female"
                  onChange={(e) => setUser({ ...user, gender: e.target.value })}
                  checked={user.gender === "Female"}
                  className="peer hidden"
                  // {employee.gender === "female" ?  checked : ""}
                  name="gender"
                />

                <div className="hover:bg-gray-50 flex items-center justify-start gap-x-3 px-3 py-2 border-2 shadow rounded-md cursor-pointer border-gray-200 group peer-checked:border-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-gray-400  group-[.peer:checked+&]:text-gray-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="text-gray-400">Female</p>
                </div>
              </label>               
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






   