import React from "react";

const ImpactMetrics = () => {
  const stats = [
    { value: "65M", label: "People with Epilepsy" },
    { value: "150+", label: "Support Groups" },
    { value: "24/7", label: "Helpline" },
    { value: "$30M", label: "Research Funded" }
  ];

  return (
    <section className="text-gray-800 body-font mt-24 mb-24">
  <div className="container px-5 py-16 mx-auto shadow-xl rounded-2xl bg-white">
    <div className="flex flex-wrap mx-auto">
      <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-600 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-sm text-purple-900 mb-1 tracking-wider">DATA COLLECTION</h2>
            <p className="leading-relaxed text-gray-600">Our system collects high-resolution EEG data from multiple channels using non-invasive electrodes placed according to the international 10-20 system. Data is securely transmitted for processing.</p>
          </div>
        </div>
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-600 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-sm text-purple-900 mb-1 tracking-wider">PREPROCESSING</h2>
            <p className="leading-relaxed text-gray-600">Raw EEG data undergoes artifact removal, noise filtering, and signal normalization. Advanced algorithms eliminate interference from eye movements, muscle activity, and electrical noise.</p>
          </div>
        </div>
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-600 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <circle cx="12" cy="5" r="3"></circle>
              <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
            </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-sm text-purple-900 mb-1 tracking-wider">FEATURE EXTRACTION</h2>
            <p className="leading-relaxed text-gray-600">The system extracts key features from the EEG signals including frequency band powers, statistical measures, and time-frequency characteristics that are indicative of seizure activity.</p>
          </div>
        </div>
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-600 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-sm text-purple-900 mb-1 tracking-wider">PATTERN ANALYSIS</h2>
            <p className="leading-relaxed text-gray-600">Our machine learning algorithm analyzes the extracted features to detect seizure patterns. The model has been trained on thousands of EEG samples and can identify subtle signs of epileptic activity.</p>
          </div>
        </div>
        <div className="flex relative">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-600 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-sm text-purple-900 mb-1 tracking-wider">VISUALIZATION</h2>
            <p className="leading-relaxed text-gray-600">Results are presented in intuitive charts and graphs, showing brain activity patterns, detected seizure events, and confidence levels. The visual interface makes it easy for both patients and medical professionals to interpret findings.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-3/5 md:w-1/2 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
        <img 
          className="object-cover object-centerw-auto h-full rounded-lg shadow-lg" 
          src={`ep-detect.png`}
          alt="EEG data analysis and epilepsy detection visualization"
        />
      </div>
    </div>
  </div>
</section>
  );
};

export default ImpactMetrics;