import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";
import { AuthProvider } from "./Auth";

const Layout = () => {
  return (
    <AuthProvider>
      <Navbar />
      <Outlet />
    </AuthProvider>
  );
};

export default Layout;
