import { socialMedia } from "@/data";
import Image from "next/image";
import React from "react";

const SocialIcons = () => {
  return (
    <div className="flex items-center md:gap-3 gap-6">
      {socialMedia.map((profile) => (
        <a key={profile.id} href={profile.link} target="_blank">
          <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 dark:bg-black-300 bg-purple rounded-lg border dark:border-black-300 border-slate-400 hover:bg-pink-300 dark:hover:bg-black-100 transition-all">
            <Image src={profile.img} alt={"social link"} width={20} height={20} />
          </div>
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
