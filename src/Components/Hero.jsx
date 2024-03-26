import React from 'react';
// import { Container } from 'reactstrap';
import heroImg from '../assests/images/hero-img1.png';

const Hero = () => {
  return (
    <section className="py-12">
      {/* <Container> */}
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="md:order-2">
              <img src={heroImg} alt="" className="w-full md:max-w-md mx-auto" />
            </div>
            <div className="md:order-1">
              <h2 className="mb-4 font-semibold text-3xl lg:text-4xl">
                Anytime Anywhere <br /> Learn on your <br /> Suitable Schedule
              </h2>
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
                Aut saepe voluptatum earum delectus <br /> deserunt id iste,
                quas officiis et repellat!
              </p>
              <div className="search w-full md:w-3/4 border border-green-400 flex justify-between items-center rounded-full px-4 py-2">
                <input type="text" placeholder="Search" className="flex-grow border-none outline-none px-2" />
                <button className="btn bg-[#00df9a] text-white font-semibold px-4 py-2 rounded-full">Search</button>
              </div>
            </div>
          </div>
        </div>
      {/* </Container> */}
    </section>
  );
};

export default Hero;
