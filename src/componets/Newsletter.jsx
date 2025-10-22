import React, { useState } from "react";
import { motion } from "framer-motion";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@") || !email.includes(".")) {
      setStatus(" Please enter a valid email!");
      return;
    }
    setStatus(" Thanks for subscribing!");
    setEmail("");
    setTimeout(() => setStatus(""), 3000);
  };

  return (
    <section className="relative overflow-hidden bg-black py-24 text-white">
      
      {/* Animated neon gradient background */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="absolute -bottom-60 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 opacity-30 blur-3xl rounded-full"
      />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-11/12 md:w-8/12 mx-auto text-center space-y-8"
      >
        {/* Heading with neon text effect */}
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold text-white"
          style={{
            textShadow:
              "0 0 10px #8b5cf6, 0 0 20px #9333ea, 0 0 30px #d946ef",
          }}
        >
          Join the <span className="text-indigo-400">Zero3 Game</span> Community
        </motion.h2>

        {/* Subtitle with hover sparkle effect */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto"
        >
          Subscribe to unlock early access, secret drops, and exclusive in-game bonuses
        </motion.p>

        {/* Interactive form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col md:flex-row justify-center items-center gap-4 mt-8"
        >
          <div className="relative group w-full md:w-2/3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full px-5 py-3 rounded-xl text-white focus:outline-none border-2 border-gray-700 focus:border-indigo-500 transition-all bg-black"
              required
            />
            {/* Neon border on hover */}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 blur-md -z-10"></div>
          </div>

          <motion.button
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 20px #8b5cf6, 0 0 40px #d946ef",
            }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 px-8 py-3 rounded-xl font-semibold shadow-lg"
          >
            Subscribe
          </motion.button>
        </motion.form>

        {/* Status message */}
        {status && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm text-gray-400 mt-3"
          >
            {status}
          </motion.p>
        )}
      </motion.div>

      {/* Optional floating particles / neon sparks */}
      <motion.div
        animate={{ x: [0, 30, -30, 0], y: [0, -20, 20, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
        className="absolute top-10 left-1/4 w-2 h-2 bg-pink-500 rounded-full opacity-70 blur-sm"
      />
      <motion.div
        animate={{ x: [0, -25, 25, 0], y: [0, 20, -20, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute top-1/3 right-1/3 w-3 h-3 bg-indigo-400 rounded-full opacity-60 blur-sm"
      />
    </section>
  );
};

export default Newsletter;