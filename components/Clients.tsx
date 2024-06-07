import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { companies, testimonials } from "@/data";
import Companies from "./ui/Companies";

const Clients = () => {
  return (
    <div
      className="py-10 flex items-center justify-center flex-col"
      id="testimonials"
    >
      <h2 className="heading">
        Kind words from 
        <span className="text-purple"> Satisfied Clients</span>
      </h2>

      {/* project cards */}
      <div className="flex flex-col items-center max-lg:mt-10">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
      
      {/* companies component placed here*/}
      
    </div>
  );
};

export default Clients;
