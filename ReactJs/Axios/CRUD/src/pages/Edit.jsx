import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Edit = () => {
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      profession: "",
      age: "",
      mobile: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      profession: Yup.string().required("Profession is required"),
      username: Yup.string().required("Username is required"),
      city: Yup.string().required("City is required"),
      age: Yup.number()
        .required("Age is required")
        .positive("Age must be positive")
        .integer("Age must be an integer"),
      contact: Yup.string()
        .required("Contact Number is required")
        .matches(/^[0-9]+$/, "Contact Number must be only digits")
        .min(10, "Contact Number must be at least 10 digits")
        .max(15, "Contact Number must be at most 15 digits"),
    }),
    onSubmit: (values) => {
      console.log(values);
      // Here you can handle form submission, e.g., sending data to an API
    },
  });

  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/";
    navigate(path);
  };

  const { id } = useParams();

  const [user, setUser] = useState({
    username: "",
    name: "",
    age: "",
    phone: "",
    city: "",
    profession: "",
  });

  const loadUserWithId = async () => {
    const res = await axios.get(`http://localhost:3000/User/${id}`);
    setUser(res.user);
  };

  const onSubmitEditUser = async () => {
    e.preventDefault();
    await axios.put(`http://localhost:3000/User/${id}`, user);
    navigate("/");
  };

  useEffect(() => {
    loadUserWithId();
  }, []);


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        className="bg-white p-6 rounded shadow-md w-full max-w-sm"
        onSubmit={onSubmitEditUser}
      >
        <h1 className="text-2xl font-bold mb-4 text-center">Edit User</h1>

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

        <div className="flex justify-center">
          <button
            type="Submit"
            className="px-[16px] mr-3 rounded-lg hover:rounded-xl py-[10px] bg-gray-800 mt-2 border-[1px] border-black text-white hover:bg-white hover:text-black duration-300 ease-in-out hover:scale-105 font-[500]"
          >
            Edit User
          </button>
          <button
            type="Submit"
            className="px-[16px] py-[10px] rounded-lg hover:rounded-xl bg-gray-800 mt-2 border-[1px] border-black text-white hover:bg-white hover:text-black duration-300 ease-in-out hover:scale-105 font-[500]"
            onClick={routeChange}
          >
            Back To Home
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
