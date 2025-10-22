import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ data }) => {
  const { title, coverPhoto } = data;

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
        <img src={coverPhoto} alt={title} className='w-full h-[430px] object-cover' />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
