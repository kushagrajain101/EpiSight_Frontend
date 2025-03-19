import React from "react";

const SeizureTypeCard = ({ title, subtitle, desc, index }) => {
  // Array of relevant images for each seizure type
  const images = [
    "focal.png",
    "general (1).png",
    "statusepilepticusseizure.jpg",
    "su.jpg",
  ];

  return (
    <div className="xl:w-1/4 md:w-1/2 p-4">
      <div className="bg-purple-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 hover:scale-105 h-full">
        <div className="relative h-48 rounded-lg overflow-hidden mb-6">
          <img
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={images[index]}
            alt={title}
          />
        </div>
        <h3 className="tracking-widest text-purple-500 text-xs font-medium title-font uppercase">
          {subtitle}
        </h3>
        <h2 className="text-2xl text-gray-900 font-semibold title-font mb-4">
          {title}
        </h2>
        <p className="leading-relaxed text-base text-gray-600">
          {desc}
        </p>
      </div>
    </div>
  );
};

const SeizureTypes = () => {
  const seizureData = [
    {
      title: "Focal Seizures",
      subtitle: "Partial Seizures",
      desc: "Focal seizures begin in one area of the brain. They can occur with or without loss of consciousness and may include changes in emotion, sensory perception, or involuntary movements.",
    },
    {
      title: "Generalized Seizures",
      subtitle: "Affecting Both Sides",
      desc: "These seizures involve both sides of the brain at once and include types such as absence seizures, tonic-clonic seizures, atonic seizures, and myoclonic seizures.",
    },
    {
      title: "Status Epilepticus",
      subtitle: "Medical Emergency",
      desc: "A condition where seizures follow one another without recovery of consciousness between them, or a seizure lasts longer than 5 minutes. Requires immediate medical attention.",
    },
    {
      title: "SUDEP",
      subtitle: "Sudden Unexpected Death",
      desc: "Sudden Unexpected Death in Epilepsy is a rare but serious risk where a person with epilepsy dies suddenly and no other cause of death is found.",
    },
  ];

  return (
    <section className="text-gray-800 body-font mt-24 mb-24">
      <div className="container px-5 py-16 mx-auto shadow-xl rounded-2xl bg-white">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4 text-purple-900">
               Types of Seizures
            </h1>
            <div className="h-1 w-24 bg-purple-600 rounded"></div>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-600 text-lg">
            Seizures are classified into different types based on how and
            where they begin in the brain. Understanding the type of seizure
            is crucial for proper diagnosis and treatment. Here we explore the
            major categories and their characteristics.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {seizureData.map((item, index) => (
            <SeizureTypeCard key={index} {...item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeizureTypes;