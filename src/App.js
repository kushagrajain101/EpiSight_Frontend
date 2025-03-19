import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import InfoCards from "./components/InfoCards";
import SeizureTypes from "./components/SeizureTypes";
import ImpactMetrics from "./components/ImpactMetrics";
import CommunityStories from "./components/CommunityStories";
import SeizureFirstAid from "./components/SeizureFirstAid";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp"; // Create this component
import LogIn from "./components/LogIn"; // Create this component

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white overflow-y-auto scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-purple-200">
        <Header />
        <Routes>
          {/* Home Page Route */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <InfoCards />
                <SeizureTypes />
                <ImpactMetrics />
                <CommunityStories />
                <SeizureFirstAid />
              </>
            }
          />
          {/* Sign-Up Page Route */}
          <Route path="/signup" element={<SignUp />} />
          {/* Log-In Page Route */}
          <Route path="/login" element={<LogIn />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;