import React from "react";
import Navbar from "../componets/Navbar";
import { Outlet, useLoaderData } from "react-router";
import Footer from "../componets/Footer";
import Card from "./Card";

const Discover = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="bg-black">
      <Navbar></Navbar>
      <div className="grid grid-cols-1 lg:grid-cols-3 mx-auto w-11/12 lg:w-10/12 gap-10 mt-10 mb-10">
        {data.map((game) => (
          <Card key={game.id} data={game} />
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Discover;
