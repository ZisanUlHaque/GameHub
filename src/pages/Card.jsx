import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Link } from "react-router";

const Card = ({ data }) => {
  const { title, coverPhoto, description, developer, ratings, id } = data;

  return (
    <motion.div
      className="card bg-base-100 w-full sm:w-80 md:w-96 shadow-md rounded-2xl overflow-hidden mx-auto"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Image Section */}
      <figure className="relative">
        <img
          src={coverPhoto}
          alt={title}
          className="w-full h-56 sm:h-72 md:h-[430px] object-cover"
        />
        {/* Optional hover overlay for larger screens */}
        <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex justify-center items-center text-white text-lg font-semibold">
          {title}
        </div>
      </figure>

      {/* Card Body */}
      <div className="card-body p-4 md:p-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="card-title font-bold text-lg md:text-xl">{title}</h2>
          <div className="flex gap-1 items-center bg-amber-400 px-2 py-1 rounded-xl text-sm md:text-base">
            <Star className="w-4 h-4 md:w-5 md:h-5" />
            {ratings}
          </div>
        </div>

        <p className="text-sm md:text-base mt-2 line-clamp-3">
          {description}
        </p>

        <div className="card-actions flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mt-4">
          <div className="font-medium text-red-700 text-sm md:text-base">
            Developed by: {developer}
          </div>
          <Link to={`/details/${id}`}>
            <div className="text-blue-700 underline font-semibold text-sm md:text-base">
              Details
            </div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
