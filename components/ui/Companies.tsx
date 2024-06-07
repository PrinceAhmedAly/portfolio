import { companies } from '@/data'
import React from 'react'

const Companies = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg: mt-10">
    {companies.map(({ id, img, name, nameImg }) => (
      <div key={id} className="flex md:max-w-60 max-w-32 gap-2">
        <img src={img} alt={name} className="md:w-10 w-5" />
        <img src={nameImg} alt={name} className="md:w-24 w-20 dark:bg-transparent bg-purple rounded-full p-2" />
      </div>
    ))}
  </div>
  )
}

export default Companies