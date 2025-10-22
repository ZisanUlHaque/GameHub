import React from "react";
import Navbar from "../componets/Navbar";
import { useLoaderData } from "react-router";
import Footer from "../componets/Footer";
import Card from "./Card";
import { motion } from "framer-motion";

const Discover = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <div className="bg-black">
      <Navbar />
      
      <motion.h1
        className="font-bold text-4xl flex justify-center mt-10 text-white"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
      >
        Ultimate Game List
      </motion.h1>

      <motion.p
        className="flex justify-center mt-4 text-lg text-gray-300"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Explore the top games and discover your next favorite adventure.
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-3 mx-auto w-11/12 lg:w-10/12 gap-10 mt-10 mb-10">
        {data.map((game) => (
          <Card key={game.id} data={game} />
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Discover;
