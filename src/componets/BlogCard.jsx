import React from 'react';
import { motion } from 'framer-motion';

const BlogCard = ({data}) => {
    const {title,author,category,coverPhoto,description,date} = data;
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
        <img src={coverPhoto} alt="" className='w-full h-[300px]'/>
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-between items-center">
          <div className="font-medium text-green-600">Author : {author}</div>
          <div className="font-medium text-yellow-500">Category : {category}</div>
        </div>
        <div className='text-gray-700'>Date : {date}</div>
      </div>
    </motion.div>
    );
};

export default BlogCard;