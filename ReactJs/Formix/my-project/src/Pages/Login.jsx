import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';

const initialValues = {
  FirstName: "",
  LastName: "",
  Email: "",
  Password: "",
};



const onSubmit = (value) => {
  console.log("First Data", value);
};

// const validate = (values) => {
//   let error = {};
//   if (!values.FirstName) {
//     error.FirstName = "Required";
//   }
//   if (!values.LastName) {
//     error.LastName = "Required";
//   }
//   if (!values.Email) {
//     error.Email = "Required";
//   } else if( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
//       error.email = 'Invalid email address'
//   }
//   if (!values.Password) {
//     error.Password = "Required";
//   }

//   return error;
// };

const validationSchema = Yup.object({
  FirstName: Yup.string().required('Required'),
  LastName: Yup.string().required('Required'),
  Email: Yup.string().email('Invalid Email Address').required('Required'),
  Password: Yup.string().required('Required'),
})


const Login = () => {
  
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  console.log("formik data", formik.values);
  console.log("form error", formik.errors);
  return (
    <>
      <div className="mt-5 bg-green-300">
        <h1 className="text-center pb-5">Login Page</h1>
        <div className='flex bg-green-300 justify-center'>
          <form className="" onSubmit={formik.handleSubmit}>
            <label htmlFor="" className="">FirstName</label>
            <input
              type="text"
              name="FirstName"
              id="FirstName"
              value={formik.values.FirstName}
              onChange={formik.handleChange}
            />
            {formik.errors.FirstName ? (
              <div>{formik.errors.FirstName}</div>
            ) : null}
            <label htmlFor="">LastName</label>
            <input
              type="text"
              name="LastName"
              id="LastName"
              value={formik.values.LastName}
              onChange={formik.handleChange}
            />
            {formik.errors.LastName ? (
              <div>{formik.errors.LastName}</div>
            ) : null}
            <label htmlFor="">Email</label>
            <input
              type="email"
              name="Email"
              id="Email"
              value={formik.values.Email}
              onChange={formik.handleChange}
            />
            {formik.errors.Email ? <div>{formik.errors.Email}</div> : null}

            <label htmlFor="">Password</label>
            <input
              type="password"
              name="Password"
              id="Password458"
              value={formik.values.Password}
              onChange={formik.handleChange}
            />
            {formik.errors.Password ? (
              <div>{formik.errors.Password}</div>
            ) : null}

            <button type="Submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;