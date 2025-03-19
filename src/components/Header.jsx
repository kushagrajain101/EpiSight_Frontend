import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-r from-purple-700 to-purple-900 text-white body-font shadow-lg"
    >
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <img
          src="epilepsy.png"
          className="h-10 w-10"
          alt="Epilepsy Awareness Logo"
        />
        <span className="ml-3 text-2xl font-bold font-sans">Episight</span>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <button
            onClick={() => navigate("/signup")}
            className="bg-white text-purple-800 mr-3 px-6 py-2 rounded-full shadow-lg hover:bg-purple-100 hover:shadow-xl transition duration-300 transform hover:scale-105"
          >
            Sign-Up
          </button>
          <button
            onClick={() => navigate("/login")}
            className="bg-white text-purple-800 px-6 py-2 rounded-full shadow-lg hover:bg-purple-100 hover:shadow-xl transition duration-300 transform hover:scale-105"
          >
            Log-In
          </button>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;