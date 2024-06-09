import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa'
import Image from 'next/image'

const RecentProjects = () => {
  return (
    <div className="py-20 flex items-center justify-center flex-col" id="projects">
        <h2 className="heading font-bold text-3xl md:text-4xl text-center">
            A small selection of {''}
            <span className="text-purple"> Recent Projects</span>
        </h2>

        {/* project cards */}
        <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
            {projects.map(({id, title, des, img, iconLists, link}) => (
                <div key={id} className="h-[28rem] lg:min-h-[32rem] flex items-center justify-center sm:w-[570px] w-[80vw] md:w-[35vw]">
                    <PinContainer title={title} href={"link"}>
                    <div className="relative flex items-center justify-center w-[80vw] md:w-[35vw] overflow-hidden h-[27vh] sm:h-[32vh] md:h-[28vh] lg:h-[35vh] mb-10">
                        <div className="relative w-full h-full overflow-hidden rounded-2xl lg:rounded-3xl bg-[#13162d]">
                            <Image src="/bg.png" alt="bg-img" width={20} height={20} layout="responsive"/>
                        </div>
                        <Image src={img} alt={title} className="absolute top-0 p-5 rotate-1 hover:rotate-2 transition-all" width={50} height={50} layout="responsive"/>
                    </div>

                    {/* title */}
                    <h2 className="font-bold lg:text-2xl md:*:text-xl text-base line-clamp-1">
                        {title}
                    </h2>

                    {/* des */}
                    <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                        {des}
                    </p>

                    {/* info & icons */}
                    <div className="flex flex-center justify-between mt-7 mb-3">
                        {/* icons */}
                        <div className="flex items-center">
                            {iconLists.map((icon, index) => (
                                <div key={icon} className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                                style={{
                                    transform: `translateX(-${5 * index * 2}px)`
                                }}>
                                    <Image src={icon} alt={icon} width={10} height={10} layout="responsive"/>
                                </div>
                            ))}
                        </div>

                        {/* live link */}
                        <div className="flex justify-center items-center">
                            <a href={link} target="_blank" className="flex justify-center items-center">
                            <p className="flex lg:text-xl md:text-xs text-sm text-purple">Live Site</p>
                            <FaLocationArrow className="ms-3"
                            color="#CBACF9"/>
                            </a>
                        </div>
                    </div>

                    </PinContainer>
                </div>
            ))}
        </div>
    </div>
  )
}

export default RecentProjects
