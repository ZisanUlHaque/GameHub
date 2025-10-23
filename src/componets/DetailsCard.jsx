import { Download, Star } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

const DetailsCard = ({ details }) => {
  const {
    title,
    coverPhoto,
    description,
    category,
    developer,
    downloadLink,
    ratings,
  } = details;

  return (
    <div className="pb-10">
      <motion.h3
        className="font-bold text-4xl text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Game Details
      </motion.h3>

      <motion.div
        className="flex flex-col md:flex-row px-5 gap-10 pt-10 items-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img
          src={coverPhoto}
          alt=""
          className="rounded-2xl w-[280px] h-[280px] md:w-[300px] md:h-[300px] shadow-lg"
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ type: "spring", stiffness: 200 }}
        />

        <motion.div
          className="max-w-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h1 className="font-bold text-4xl text-emerald-800 mb-3">{title}</h1>
          <p className="font-medium text-gray-700 leading-relaxed">{description}</p>

          <div className="pt-5 space-y-2">
            <div className="font-medium text-blue-800 text-lg">
              Category: <span className="font-semibold">{category}</span>
            </div>
            <div className="text-xl font-medium text-red-700">
              Developed By: <span className="font-semibold">{developer}</span>
            </div>
          </div>

          <motion.button
            className="flex gap-2 items-center font-bold text-xl mt-6 text-emerald-700 hover:text-emerald-900"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open(downloadLink, "_blank")}
          >
            Download Now : <Download className="w-5 h-5" />
          </motion.button>

          <motion.button
            className="flex gap-2 items-center bg-amber-400 px-3 py-1 rounded-xl mt-5 font-semibold shadow-md"
            whileHover={{ scale: 1.1, rotate: -3 }}
            whileTap={{ scale: 0.9 }}
          >
            <Star className="text-yellow-700" /> {ratings}
          </motion.button>
        </motion.div>
      </motion.div>
      <Link to='/'><button className="btn btn-outline btn-primary rounded-2xl mx-5 my-10">Go Back!</button></Link>
    </div>
  );
};

export default DetailsCard;
