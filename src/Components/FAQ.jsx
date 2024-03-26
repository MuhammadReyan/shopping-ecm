import React from "react";
import Accordion from "./Accordion";

const FAQ = () => {
    return (
        <div className=" bg-gray-200 rounded-lg">
            <h1 className=" text-center text-4xl text-black font-bold "> FAQs </h1>
            <Accordion
                title="Do you prefer Android or iOS"
                answer="I like to use iOS products"
            />
            <Accordion
                title="Do you prefer writing CSS or Tailwind?"
                answer="I like to use Tailwind"
            />
            <Accordion title="Firebase or Supabase?" answer="I am using Supabase!" />
        </div>
    );
};

export default FAQ;