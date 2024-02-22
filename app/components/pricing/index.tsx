import React from 'react'
import { CheckIcon } from '@radix-ui/react-icons'

const Pricing: React.FC<object> = () => {
  return (
    <section
      className="bg-black text-white lg:h-[100vh] xl:h-[90vh]"
      id="pricing"
    >
      <div className="container mx-auto flex flex-col pt-10 lg:pt-12">
        <div className="flex flex-col">
          <h1 className="text-center text-3xl font-semibold md:text-4xl">
            The Right Plan for you
          </h1>
          <p className="mx-3 mt-2.5 text-center text-[16px] sm:text-[21px] lg:mx-auto lg:w-1/2 lg:text-2xl ">
            We have several plans to showcase your Business. Get everything you
            need
          </p>
        </div>
        <div className="mx-auto mt-10 flex flex-col items-center gap-0 lg:mt-20 lg:flex-row">
          <div className=" border-primary-400 xs:w-[340px] z-0 flex h-[480px] w-[330px] transform flex-col rounded-lg border-[1px] p-5 pr-0 transition-transform duration-300 ease-in-out sm:w-[350px] sm:hover:scale-105 lg:w-[330px] lg:rounded-b-none lg:rounded-t-lg lg:border-b-0 lg:border-r-0">
            <h4 className="text-primary-500 shadow-customPricing -ml-2 mb-7 w-full border-b-[1px] border-t-[1px] py-2 text-center text-[30px] font-semibold">
              Basic
            </h4>
            <ul className=" my-auto w-full">
              <li className="mb-2 flex flex-row align-middle">
                <CheckIcon className="h-6 w-6 m-2 p-1 border-2 rounded-full" />
                Up to 1000 Congregants
              </li>
              <li className="mb-2 flex flex-row align-middle">
              <CheckIcon className="h-6 w-6 m-2 p-1 border-2 rounded-full" />
                Up to 25 Groups
              </li>
              <li className="mb-2 flex flex-row align-middle">
                <CheckIcon className="h-6 w-6 m-2 p-1 border-2 rounded-full" />
                5 group limit for each Congregant
              </li>
              <li className="mb-2 flex flex-row align-middle">
                <CheckIcon className="h-6 w-6 m-2 p-1 border-2 rounded-full" />
                Up to 1000 notifications
              </li>
              <li className="mb-2 flex flex-row align-middle">
                <CheckIcon className="h-6 w-6 m-2 p-1 border-2 rounded-full" />
                Up to 1000 events
              </li>
              <li className="mb-2 flex flex-row align-middle">
                <CheckIcon className="h-6 w-6 m-2 p-1 border-2 rounded-full" />
                Text only devotions and Sermons
              </li>
            </ul>
            <p className="text-primary-500 border-primary-300 relative mx-auto my-auto w-fit border-l-2 border-r-2 px-3 text-center text-base">
              <span className="text-lg font-light">Ksh.</span>
              <span className="text-2xl font-semibold">2500</span>
              <span className="text-lg font-light text-gray-600">/month</span>
            </p>
            <button className="border-primary-400 shadow-customPricing hover:bg-primary-500 mx-auto w-fit transform cursor-pointer rounded-3xl border-2 px-5 py-2 transition-colors duration-300 ease-in-out">
              GET NOW
            </button>
          </div>
          <div className=" border-primary-400 shadow-customPricing xs:shadow-customSides xs:w-[370px] z-10 -mb-2 -mt-2 flex h-[500px] w-[350px] transform flex-col rounded-lg border-[1px] p-5 pb-7 pr-0 transition-transform duration-300 ease-in-out dark:bg-slate-900 sm:w-[382px] sm:hover:scale-105 lg:-mb-0 lg:-ml-1 lg:-mr-1 lg:-mt-5 lg:w-[350px] lg:rounded-t-lg">
            <h4 className="text-primary-500 shadow-customPricing -ml-2 mb-7 w-full border-b-[1px] border-t-[1px] py-2 text-center text-[30px] font-semibold">
              Advanced
            </h4>
            <ul className=" my-auto w-full">
              <li className="mb-2 flex flex-row align-middle">
                <CheckIcon className="h-6 w-6 m-2 p-1 border-2 rounded-full" />
                Up to 5000 Congregants
              </li>
              <li className="mb-2 flex flex-row align-middle">
                <CheckIcon className="h-6 w-6 m-2 p-1 border-2 rounded-full" />
                Up to 50 Groups
              </li>
              <li className="mb-2 flex flex-row align-middle">
                <CheckIcon className="h-6 w-6 m-2 p-1 border-2 rounded-full" />
                10 group limit for each Congregant
              </li>
              <li className="mb-2 flex flex-row align-middle">
                <CheckIcon className="h-6 w-6 m-2 p-1 border-2 rounded-full" />
                Unlimited notifications
              </li>
              <li className="mb-2 flex flex-row align-middle">
                <CheckIcon className="h-6 w-6 m-2 p-1 border-2 rounded-full" />
                Unlimited events
              </li>
              <li className="mb-2 flex flex-row align-middle">
                <CheckIcon className="h-6 w-6 m-2 p-1 border-2 rounded-full" />
                Text + audio devotions and Sermons
              </li>
            </ul>
            <p className="text-primary-500 border-primary-300 relative mx-auto my-auto w-fit border-l-2 border-r-2 px-3 text-center text-base">
              <span className="text-lg font-light">Ksh.</span>
              <span className="text-2xl font-semibold">5000</span>
              <span className="text-lg font-light text-gray-600">/month</span>
            </p>
            <button className="border-primary-400 hover:bg-primary-500 shadow-customPricing mx-auto w-fit transform cursor-pointer rounded-3xl border-2 px-5 py-2 transition-colors duration-300 ease-in-out">
              GET NOW
            </button>
          </div>
          <div className=" border-primary-400 xs:w-[340px] z-0 flex  h-[480px] w-[330px] transform flex-col rounded-lg border-[1px] p-5 pr-0 transition-transform duration-300 ease-in-out dark:bg-slate-900 sm:w-[350px] sm:hover:scale-105 lg:w-[330px] lg:rounded-b-none lg:rounded-t-lg lg:border-b-0 lg:border-l-0">
            <h4 className="text-primary-500 shadow-customPricing -ml-2 mb-7 w-full border-b-[1px] border-t-[1px] py-2 text-center text-[30px] font-semibold">
              Premium
            </h4>
            <ul className=" my-auto w-full">
              <li className="mb-2 flex flex-row align-middle">
                <CheckIcon className="h-6 w-6 m-2 p-1 border-2 rounded-full" />
                Unlimited Congregants
              </li>
              <li className="mb-2 flex flex-row align-middle">
                <CheckIcon className="h-6 w-6 m-2 p-1 border-2 rounded-full" />
                Unlimited Groups
              </li>
              <li className="mb-2 flex flex-row align-middle">
                <CheckIcon className="h-6 w-6 m-2 p-1 border-2 rounded-full" />
                Unlimited group limit for each Congregant
              </li>
              <li className="mb-2 flex flex-row align-middle">
                <CheckIcon className="h-6 w-6 m-2 p-1 border-2 rounded-full" />
                Unlimited notifications
              </li>
              <li className="mb-2 flex flex-row align-middle">
                <CheckIcon className="h-6 w-6 m-2 p-1 border-2 rounded-full" />
                Unlimited events
              </li>
              <li className="mb-2 flex flex-row align-middle">
                <CheckIcon className="h-6 w-6 m-2 p-1 border-2 rounded-full" />
                Text, audio and video devotions and Sermons
              </li>
            </ul>
            <p className="text-primary-500 border-primary-300 relative mx-auto my-auto w-fit border-l-2 border-r-2 px-3 text-center text-base">
              <span className="text-lg font-light">Ksh.</span>
              <span className="text-2xl font-semibold">7500</span>
              <span className="text-lg font-light text-gray-600">/month</span>
            </p>
            <button className="border-primary-400 shadow-customPricing hover:bg-primary-500 mx-auto w-fit transform cursor-pointer rounded-3xl border-2 px-5 py-2 transition-colors duration-300 ease-in-out">
              GET NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
