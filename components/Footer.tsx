import React from "react";
import MagicBtn from "./ui/MagicBtn";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";
import SocialIcons from "./ui/SocialIcons";

const Footer = () => {
  return (
    <footer className="w-full mb-10" id="contact">
      <div className="w-full absolute left-0 -bottom-24 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="footer-grid"
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="flex flex-col items-center">
        <h2 className="heading lg:max-w-[45vw]">
          Ready to take{" "}
          <span className="text-purple">
            you outside degital presence to the next level
          </span>
        </h2>
        <p className="text-white md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:beyada85@gmail.com">
          <MagicBtn
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      {/* social icons */}
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center gap-5">
        <p className="md:text-base text-sm md:font-normal font-light text-center">
          Copyright © 2024 Dreamer
        </p>
        <SocialIcons />
      </div>
    </footer>
  );
};

export default Footer;
