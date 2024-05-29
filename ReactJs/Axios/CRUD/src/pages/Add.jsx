import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const Add = () => {
  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      profession: '',
      age: '',
      mobile: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      profession: Yup.string().required('Profession is required'),
      username: Yup.string().required('Username is required'),
      city: Yup.string().required('City is required'),
      age: Yup.number().required('Age is required').positive('Age must be positive').integer('Age must be an integer'),
      contact: Yup.string()
        .required('Contact Number is required')
        .matches(/^[0-9]+$/, 'Contact Number must be only digits')
        .min(10, 'Contact Number must be at least 10 digits')
        .max(15, 'Contact Number must be at most 15 digits'),
    }),
    onSubmit: (values) => {
      console.log(values);
      // Here you can handle form submission, e.g., sending data to an API
    },
  });

  let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = '/'; 
      navigate(path);
    }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm" onSubmit={formik.handleSubmit}>
        <h1 className="text-2xl font-bold mb-4 text-center">Add User</h1>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            id="username"
            placeholder='Username'
            className="shadow appearance-none border rounded w-full py-3 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...formik.getFieldProps('username')}
          />
          {formik.touched.username && formik.errors.username ? (
            <div className="text-red-500 text-sm mt-1">{formik.errors.username}</div>
          ) : null}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstname">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder='Name'
            className="shadow appearance-none border rounded w-full py-3 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...formik.getFieldProps('name')}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-red-500 text-sm mt-1">{formik.errors.name}</div>
          ) : null}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="age">
            Age
          </label>
          <input
            type="number"
            id="age"
            placeholder='Age'
            className="shadow appearance-none border rounded w-full py-3 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...formik.getFieldProps('age')}
          />
          {formik.touched.age && formik.errors.age ? (
            <div className="text-red-500 text-sm mt-1">{formik.errors.age}</div>
          ) : null}
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contact">
            Contact
          </label>
          <input
            type="number"
            id="contact" placeholder='Contact' className="shadow appearance-none border rounded w-full py-3 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...formik.getFieldProps('contact')}
          />
          {formik.touched.contact && formik.errors.contact ? (
            <div className="text-red-500 text-sm mt-1">{formik.errors.contact}</div>
          ) : null}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
            City
          </label>
          <input
            type="text"
            id="city"
            placeholder='City'
            className="shadow appearance-none border rounded w-full py-3 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...formik.getFieldProps('city')}
          />
          {formik.touched.city && formik.errors.city ? (
            <div className="text-red-500 text-sm mt-1">{formik.errors.city}</div>
          ) : null}
        </div>
       
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="profession">
            Profession
          </label>
          <input
            type="text"
            id="profession"
            placeholder='Profession'
            className="shadow appearance-none border rounded w-full py-3 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...formik.getFieldProps('profession')}
          />
          {formik.touched.profession && formik.errors.profession ? (
            <div className="text-red-500 text-sm mt-1">{formik.errors.profession}</div>
          ) : null}
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






   