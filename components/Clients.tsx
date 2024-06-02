import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { companies, testimonials } from "@/data";

const Clients = () => {
  return (
    <div
      className="py-10 flex items-center justify-center flex-col"
      id="testimonials"
    >
      <h2 className="heading">
        Kind words from {""}
        <span className="text-purple">Satisfied Clients</span>
      </h2>

      {/* project cards */}
      <div className="flex flex-col items-center max-lg:mt-10">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg: mt-10">
        {companies.map(({ id, img, name, nameImg }) => (
          <div key={id} className="flex md:max-w-60 max-w-32 gap-2">
            <img src={img} alt={name} className="md:w-10 w-5" />
            <img src={nameImg} alt={name} className="md:w-24 w-20 dark:bg-transparent bg-purple rounded-full p-2" />
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Clients;
