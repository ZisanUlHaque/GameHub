import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Link } from "react-router";

const Card = ({ data }) => {
  const { title, coverPhoto, description, developer, ratings,id } = data;

  return (
    <motion.div
      className="card bg-base-100 w-96 shadow-sm"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <figure>
        <img
          src={coverPhoto}
          alt={title}
          className="w-full h-[430px] object-cover"
        />
      </figure>
      <div className="card-body">
        <div className="flex items-center justify-between">
          <h2 className="card-title font-bold">{title}</h2>
          <div className="flex gap-2 items-center bg-amber-400 px-2 py-1 rounded-xl">
            <Star></Star>
            {ratings}
          </div>
        </div>
        <p>{description}</p>
        <div className="card-actions justify-between items-center">
          <div className="font-medium text-red-700">
            Developed by: {developer}
          </div>
          <Link to={`/details/${id}`}>
              <div className="text-blue-700 underline font-semibold">
              Details
              </div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
