import React from "react";

const SeizureFirstAid = () => {
  const doItems = [
    "Stay with the person and time the seizure.",
    "Keep the person safe by removing harmful objects like furniture or sharp items.",
    "Gently turn the person onto their side to help them breathe if they're not awake.",
    "Stay calm and reassure the person as they recover; avoid crowding around them.",
    "Call emergency services (112 or local ambulance number) if the seizure lasts longer than 5 minutes.",
    "Loosen tight clothing, especially around the neck, to help with breathing.",
    "Place something soft (like a folded cloth) under their head to prevent injury.",
  ];

  const dontItems = [
    "Do not hold the person down or restrict their movements.",
    "Do not put anything in their mouth, including water or medicine.",
    "Do not try to perform any home remedies or spiritual rituals during the seizure.",
    "Avoid giving food or drink until the person is fully alert.",
  ];

  return (
    <section className="text-gray-800 body-font mt-24 mb-24">
      <div className="container px-5 py-16 mx-auto shadow-xl rounded-2xl bg-gradient-to-r from-purple-50 to-indigo-50">
        <h2 className="text-4xl font-bold text-center text-purple-900 mb-12 font-serif">
          Seizure First Aid in India
        </h2>
        <div className="flex flex-wrap lg:flex-nowrap gap-8">
          <div className="lg:w-1/2 w-full">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-purple-100">
              <h3 className="text-2xl font-bold text-purple-800 mb-6 flex items-center">
                <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  ✓
                </span>
                What to Do
              </h3>
              <ul className="space-y-4">
                {doItems.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-purple-100 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                      {index + 1}
                    </span>
                    <p className="text-gray-700">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-red-100">
              <h3 className="text-2xl font-bold text-red-800 mb-6 flex items-center">
                <span className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  ✕
                </span>
                What NOT to Do
              </h3>
              <ul className="space-y-4">
                {dontItems.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-red-100 text-red-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                      ✕
                    </span>
                    <p className="text-gray-700">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center text-gray-600">
          <p className="text-sm">
            Note: In India, dial <strong>112</strong> for emergencies or contact your nearest hospital.
          </p>
          <p className="text-sm mt-2">
            Always ensure the person is in a safe environment and avoid unnecessary crowd gathering.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SeizureFirstAid;