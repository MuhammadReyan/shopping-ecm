import React, { useState } from "react";

const Accordion = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="bg-white rounded-md shadow-md border border-gray-200 my-4 mx-auto max-w-xl">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between items-center w-full px-4 py-3 focus:outline-none transition-colors duration-300 hover:bg-[#00df9a]"
      >
        <span className="text-lg font-semibold">{title}</span>
        {accordionOpen ? (
          <svg
            className="w-6 h-6 text-green-900 transform transition-transform rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6 text-green-900 transform transition-transform"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}
      </button>
      <div
        className={`overflow-hidden transition-height duration-300 ${
          accordionOpen ? "h-auto" : "h-0"
        }`}
      >
        <div className="px-4 py-3">{answer}</div>
      </div>
    </div>
  );
};

export default Accordion;
