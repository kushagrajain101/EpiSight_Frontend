import React from "react";

const StoryCard = ({ name, title, story, src, index }) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
      <div className="h-full text-center p-6 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-500 bg-gradient-to-br from-purple-50 to-blue-50 transform hover:scale-105">
        <img
          alt={`${name}'s profile`} // Improved alt text
          className="w-24 h-24 mb-8 object-cover object-center rounded-full inline-block border-4 border-purple-200 bg-purple-100 shadow-lg"
          src={src} // Use the `src` from props
        />
        <p className="leading-relaxed text-gray-700 italic">"{story}"</p>
        <span className="inline-block h-1 w-12 rounded bg-gradient-to-r from-purple-600 to-blue-500 mt-6 mb-4"></span>
        <h2 className="text-gray-900 font-semibold title-font tracking-wider text-lg">
          {name}
        </h2>
        <p className="text-gray-600 font-medium">{title}</p>
      </div>
    </div>
  );
};

const CommunityStories = () => {
  const stories = [
    {
      name: "SARAH JOHNSON",
      title: "Living with Epilepsy for 15 Years",
      story:
        "After my diagnosis at 18, I was afraid I couldn't live a normal life. Through medication, support groups, and education, I've managed my condition successfully. Now I'm a teacher, married with two children, and an epilepsy advocate helping others understand that epilepsy doesn't define us.",
      src: "women.jpg", // Use the correct image path
    },
    {
      name: "DR. MICHAEL CHEN",
      title: "Neurologist & Epileptologist",
      story:
        "In my 20 years of treating epilepsy patients, I've seen tremendous advances in treatment options. The combination of new medications, surgical techniques, and devices like VNS has transformed outcomes. Patient education remains critical - understanding triggers and medication adherence can dramatically reduce seizure frequency.",
      src: "china.jpg", // Use the correct image path
    },
    {
      name: "JAMES WILSON",
      title: "Parent of child with Epilepsy",
      story:
        "When our daughter was diagnosed at age 7, we were overwhelmed. Finding the right resources and connecting with other families changed everything for us. We learned how to create a safe environment, work with her school, and advocate for her needs. She's now thriving in high school with her seizures well-controlled.",
      src: "james.jpg", // Use the correct image path
    },
  ];

  return (
    <section className="text-gray-800 body-font mt-24 mb-24">
      <div className="container px-5 py-16 mx-auto shadow-2xl rounded-3xl bg-gradient-to-br from-white to-purple-50">
        <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 mb-12">
          Community Stories
        </h2>
        <div className="flex flex-wrap -m-4">
          {stories.map((story, index) => (
            <StoryCard key={index} {...story} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityStories;