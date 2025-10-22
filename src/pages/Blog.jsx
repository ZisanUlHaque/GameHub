import React from 'react';
import Navbar from '../componets/Navbar';
import Footer from '../componets/Footer';
import {useLoaderData } from 'react-router';
import BlogCard from '../componets/BlogCard';

const Blog = () => {
    const data = useLoaderData();
    // console.log(data);
    return (
        <div className='bg-blue-950'>
            <Navbar></Navbar>
            <div className='text-white space-y-3'>
                <h1 className='font-bold text-3xl mx-5'>The Zero3Quest Blog</h1>
                <p className='mx-5'>News,interviews and insights from the world of indie game!!</p>
            </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 mx-auto w-11/12 lg:w-10/12 gap-10 mt-10 mb-10">
                {data.map((blog) => (
                <BlogCard key={blog.id} data={blog} />
                ))}
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blog;