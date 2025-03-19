import React from "react";

const FooterLinkSection = ({ title, links }) => {
  return (
    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
      <h2 className="title-font font-medium tracking-widest text-sm mb-3">
        {title}
      </h2>
      <nav className="list-none mb-10">
        {links.map((link, index) => (
          <li key={index}>
            <a href="#" className="hover:text-purple-200">
              {link}
            </a>
          </li>
        ))}
      </nav>
    </div>
  );
};

const Footer = () => {
  const footerSections = [
    {
      title: "QUICK LINKS",
      links: ["About Epilepsy", "Seizure First Aid", "Treatment Options", "Latest Research"]
    },
    {
      title: "SUPPORT",
      links: ["Community Forum", "Find a Specialist", "Crisis Support", "Caregiver Resources"]
    },
    {
      title: "LEGAL",
      links: ["Privacy Policy", "Terms of Service", "Accessibility", "Report a Problem"]
    }
  ];

  return (
    <footer className="bg-purple-900 text-purple-50 body-font">
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-wrap md:text-left text-center -mb-10">
          {footerSections.map((section, index) => (
            <FooterLinkSection key={index} title={section.title} links={section.links} />
          ))}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium tracking-widest text-sm mb-3">
              NEWSLETTER
            </h2>
            <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
              <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-purple-100 rounded border border-purple-300 focus:ring-2 focus:ring-purple-500 focus:bg-transparent text-base outline-none text-purple-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-purple-600 border-0 py-2 px-4 focus:outline-none hover:bg-purple-700 rounded">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-purple-300 mt-2">
              Get updates about epilepsy research and awareness events
            </p>
          </div>
        </div>
      </div>
      
      {/* Copyright Section */}
      <div className="bg-purple-950">
        <div className="container px-5 py-6 mx-auto flex items-center flex-col sm:flex-row">
          <p className="text-sm text-purple-300 sm:ml-6 sm:mt-0 mt-4">
            © 2024 Epilepsy Awareness —
            <a
              href="https://example.com"
              className="text-purple-200 ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              @epilepsyawareness
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            {["facebook", "twitter", "instagram", "linkedin"].map((social, index) => (
              <SocialIcon key={index} type={social} index={index} />
            ))}
          </span>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ type, index }) => {
  const icons = {
    facebook: (
      <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
      </svg>
    ),
    twitter: (
      <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
      </svg>
    ),
    instagram: (
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
      </svg>
    ),
    linkedin: (
      <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
        <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
        <circle cx="4" cy="4" r="2" stroke="none"></circle>
      </svg>
    )
  };

  return (
    <a href="#" className={`${index > 0 ? 'ml-3' : ''} text-purple-300 hover:text-white`}>
      {icons[type]}
    </a>
  );
};

export default Footer;
