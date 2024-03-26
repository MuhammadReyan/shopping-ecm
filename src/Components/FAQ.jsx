import React from "react";
import Accordion from "./Accordion";

const FAQ = () => {
    return (
        <div className="bg-white rounded-lg py-2 px-4">
            <h1 className="text-center text-4xl text-[#00df9a] font-bold py-3 "> FAQs </h1>
            <Accordion
                title="Do you prefer Android or iOS"
                answer="I like to use iOS products"
            />
            <Accordion
                title="Do you prefer writing Tailwind?"
                answer="I like to use Tailwind"
            />
            <Accordion title="Firebase or Supabase?" answer="I am using Supabase!" />
        </div>
    );
};

export default FAQ;