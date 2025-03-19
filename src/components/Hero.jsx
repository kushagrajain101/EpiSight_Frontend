import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-gray-800 body-font bg-gradient-to-r from-purple-50 to-indigo-50"
    >
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 drop-shadow-lg tracking-wide leading-tight"
          >
            Empowering Epilepsy
            <br className="hidden lg:inline-block" /> EDF Files, Smarter Solutions!
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-6 mb-8 leading-relaxed text-gray-600 text-lg"
          >
            Epilepsy affects over 65 million people worldwide, yet remains
            widely misunderstood. Our mission is to increase understanding,
            reduce stigma, and improve support for those living with epilepsy.
            With proper information and resources, people with epilepsy can
            lead full, healthy lives.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex justify-center"
          >
            <button className="inline-flex text-white bg-gradient-to-r from-purple-600 to-indigo-600 border-0 py-3 px-8 focus:outline-none hover:from-purple-700 hover:to-indigo-700 rounded-lg text-lg font-semibold shadow-lg transform transition-all duration-300 hover:scale-105">
              Learn More
            </button>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
        >
          <img
            className="object-cover rounded-full shadow-2xl border-8 border-purple-100 transform transition-all duration-500 hover:rotate-3 hover:scale-105"
            alt="Epilepsy Awareness"
            src="https://149347514.v2.pressablecdn.com/wp-content/uploads/02-epilepsy-society-purple-day.png"
            loading="lazy"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;