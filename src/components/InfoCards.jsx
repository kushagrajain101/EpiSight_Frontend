import React from "react";
import { motion } from "framer-motion";
import { FaBrain, FaHeartbeat } from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";

const InfoCard = ({ Icon, title, description, color, index }) => {
  return (
    <motion.div
      className="shadow-lg p-6 rounded-2xl bg-white"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.2, delay: index * 0.2 }}
    >
      <Icon className={`text-${color} text-6xl mx-auto`} />
      <h2 className="text-2xl font-semibold text-center mt-4 text-purple-800">
        {title}
      </h2>
      <p className="text-gray-600 text-center mt-2">{description}</p>
    </motion.div>
  );
};

const InfoCards = () => {
  const infoData = [
    {
      Icon: FaBrain,
      title: "What is Epilepsy?",
      description: "Epilepsy is a neurological disorder where brain activity becomes abnormal, causing seizures or periods of unusual behavior and sometimes loss of awareness.",
      color: "purple-600"
    },
    {
      Icon: FaHeartbeat,
      title: "Symptoms & Causes",
      description: "Seizures, temporary confusion, staring spells, uncontrollable jerking movements, and loss of consciousness or awareness are common symptoms of epilepsy.",
      color: "purple-600"
    },
    {
      Icon: MdHealthAndSafety,
      title: "Detection & Prevention",
      description: "Electroencephalogram (EEG), MRI, and CT scans help in detecting epilepsy. Medication, surgery, and lifestyle changes can help manage it effectively.",
      color: "purple-600"
    }
  ];

  return (
    <motion.div
      id="info"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="grid md:grid-cols-3 gap-6 px-8"
    >
      {infoData.map((item, index) => (
        <InfoCard key={index} {...item} index={index} />
      ))}
    </motion.div>
  );
};

export default InfoCards;