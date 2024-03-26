import React, { useState } from "react";

const Accordion = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="bg-white rounded-md shadow-md border border-gray-200 my-4 mx-auto max-w-xl">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between items-center w-full px-4 py-3 focus:outline-none"
      >
        <span className="text-lg font-semibold">{title}</span>
        <svg
          className={`fill-current text-green-500 transform transition-transform ${
            accordionOpen ? "rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M12 4l-1.41 1.41L12 6.83l-4.58-4.58L6 4l6 6 6-6 1.41 1.41L12 9.83l-4.59-4.58L12 4z" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          accordionOpen ? "block" : "hidden"
        }`}
      >
        <div className="px-4 py-3">{answer}</div>
      </div>
    </div>
  );
};

export default Accordion;
