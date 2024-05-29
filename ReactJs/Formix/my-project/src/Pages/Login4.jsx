import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";

const initialValues = {
    FirstName: "",
    LastName: "",
    Email: "",
    Password: "",
  };
const Login4 = () => {
  return (
    <>
      <div className="mt-5 bg-green-300">
        <h1 className="text-center pb-5">Login4 Page</h1>
        <div className="flex bg-green-300 justify-center">
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            <Form className="">
              <label htmlFor="" className="">
                FirstName
              </label>
              <Field type="text" name="FirstName" id="FirstName" />

              <ErrorMessage name="FirstName"/>
              <label htmlFor="">LastName</label>
              <Field type="text" name="LastName" id="LastName" />
              <ErrorMessage name="LastName"/>

              <label htmlFor="">Email</label>
              <Field type="email" name="Email" id="Email" />
              <ErrorMessage name="Email"/>

              <label htmlFor="">Password</label>
              <Field type="password" name="Password" id="Password458" />
              <ErrorMessage name="Password"/>

              <button type="Submit">Submit</button>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Login4;
