import React from "react";
import error from "../assets/error.jpg";
import { Link } from "react-router";

const Error = () => {
  return (
    <div className="mt-0">
      <div className="flex justify-center items-center">
        <img src={error} alt="Error" />
      </div>

      <div className="text-center space-y-3 mt-0">
        <h2 className="text-4xl font-bold">Oops, page not found!</h2>
        <p>The page you are looking for is not available.</p>
        <Link to='/'><button className="bg-purple-600 px-3 py-2 rounded-xl">Go Back!</button></Link>
      </div>
    </div>
  );
};

export default Error;
