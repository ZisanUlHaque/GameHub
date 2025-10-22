import React from "react";
import { Outlet } from "react-router";
import Navbar from "../componets/Navbar";
import Footer from "../componets/Footer";

const AuthLayout = () => {
  return (
    <div className="bg-base-200 min-h-screen">
      <header>
        <Navbar></Navbar>
      </header>
      <main className="w-11/12 mx-auto py-5">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default AuthLayout;
