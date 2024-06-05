import React from 'react'
import MagicBtn from './ui/MagicBtn'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer className="w-full" id="contact">
        <div className="w-full absolute left-0 -bottom-24 min-h-96">
            <img src="/footer-grid.svg" alt="footer-grid"
            className="w-full h-full opacity-50" />
        </div>

        <div className="flex flex-col items-center">
            <h2 className="heading lg:max-w-[45vw]">
                Ready to take <span className="text-purple">you outside degital presence to the next level</span>
            </h2>
            <p className="text-white md:mt-10 my-5 text-center">
                Reach out to me today and let&apos;s discuss how I can help you achieve your goals.
            </p>
            <a href="mailto:beyada85@gmail.com">
                <MagicBtn 
                title="Let's get in touch"
                icon={<FaLocationArrow />}
                position="right"
                />
            </a>
        </div>

        <div className="flex mt-16 md:flex-row flex-col justify-between items-center gap-5">
            <p className="md:text-base text-sm md:font-normal font-light">Copyright © 2024 Dreamer</p>
            <div className="flex items-center md:gap-3 gap-6">
                {socialMedia.map((profile) => (
                    <a key={profile.id} href="https:www.google.com" target="_blank">
                    <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 dark:bg-black-300 bg-purple rounded-lg border dark:border-black-300 border-slate-400 hover:bg-pink-300 dark:hover:bg-black-100 transition-all">
                        <img src={profile.img} alt={"social link"} width={20} height={20} />
                    </div>
                    </a>
                ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer