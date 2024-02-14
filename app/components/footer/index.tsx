import Image from 'next/image'
import React from 'react'
import { SocialIcon } from 'react-social-icons'

const Footer: React.FC<{}> = () => {
  return (
    <footer className="shadow-sharp h-fit bg-gray-100 text-slate-800 dark:bg-slate-900 dark:text-white">
      <div className="xs:px-4 xs:py-6 container mx-auto px-3 py-4">
        <div className="flex flex-row flex-wrap items-center justify-between">
          <div className="flex items-center">
            <Image
              src="https://via.placeholder.com/50"
              width={32}
              height={32}
              alt="logo"
              className="mr-2 h-10 w-10"
            />
            <span className=" xs:text-xl text-base font-semibold">
              Minister
            </span>
          </div>
          <div className="hidden lg:flex">
            <h3 className=" text-base text-slate-600">
              © 2023 Minister, Kenya. All rights reserved.
            </h3>
          </div>
          <div className="xs:gap-2 flex flex-row items-center gap-[6px]">
            <SocialIcon
              href="#"
              network="facebook"
              bgColor="#fff"
              className="transform transition-all duration-200 ease-in-out hover:cursor-pointer hover:opacity-70"
            />

            <SocialIcon
              href="#"
              network="twitter"
              bgColor="#fff"
              className="transform transition-all duration-200 ease-in-out hover:cursor-pointer hover:opacity-70"
            />

            <SocialIcon
              href="#"
              network="instagram"
              bgColor="#fff"
              className="transform transition-all duration-200 ease-in-out hover:cursor-pointer hover:opacity-70"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
