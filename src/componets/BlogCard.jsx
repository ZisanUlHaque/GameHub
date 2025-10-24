import React from "react";
import { motion } from "framer-motion";

const BlogCard = ({ data }) => {
  const { title, author, category, coverPhoto, description, date } = data;

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
          className="w-full h-48 sm:h-64 md:h-[300px] object-cover"
        />
        {/* Hover overlay (optional) */}
        <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex justify-center items-center text-white font-semibold text-lg px-4 text-center">
          {title}
        </div>
      </figure>

      {/* Content Section */}
      <div className="card-body p-4 md:p-5">
        <h2 className="card-title font-bold text-lg md:text-xl">{title}</h2>
        <p className="text-sm md:text-base text-gray-700 mt-2 line-clamp-3">
          {description}
        </p>

        <div className="card-actions flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mt-3">
          <div className="font-medium text-green-600 text-sm md:text-base">
            Author: {author}
          </div>
          <div className="font-medium text-yellow-500 text-sm md:text-base">
            Category: {category}
          </div>
        </div>

        <div className="text-gray-600 text-sm md:text-base mt-2">
          Date: {date}
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard;
