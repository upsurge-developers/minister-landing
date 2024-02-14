import { useAddDataToCollection } from '@minister/firebase'
import React, { useState } from 'react'

const Contact: React.FC<{}> = () => {
  const [email, setEmail] = useState('')
  const { setData } = useAddDataToCollection<{
    email: string
  }>('invites')

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (email !== '') {
      setData({ email })
    }
  }

  return (
    <section className="flex flex-1 items-center bg-gray-100 py-8 dark:bg-slate-900">
      <div className="flex w-full flex-col lg:mt-10 xl:mt-5">
        <h1 className="text-center text-5xl font-extrabold lg:text-7xl 2xl:text-8xl">
          <span className="bg-gradient-to-br from-teal-500 via-indigo-500 to-sky-500 bg-clip-text text-transparent dark:from-teal-200 dark:via-indigo-300 dark:to-sky-500">
            Coming{' '}
          </span>

          <span className="from-primary-500 bg-gradient-to-tr via-pink-500 to-red-500 bg-clip-text text-transparent dark:from-sky-300 dark:via-pink-300 dark:to-red-500">
            Soon
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-center text-lg text-slate-800 dark:text-white sm:px-3 md:px-0 md:text-xl">
          We are still working on the platform, making it better and easier for
          you to manage your church.
        </p>

        <div className="mt-8 flex flex-col space-y-3 sm:-mx-2 sm:flex-row sm:justify-center sm:space-y-0">
          <input
            id="email"
            type="email"
            className="focus:border-primary-400 focus:ring-primary-300 dark:focus:border-primary-300 mx-3 transform rounded-md border bg-white px-6 py-3 text-slate-800 transition-all duration-200 ease-in-out focus:outline-none focus:ring focus:ring-opacity-40 dark:border-gray-600 dark:bg-slate-800 dark:text-slate-200 sm:mx-2"
            placeholder="Email Address"
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            className="bg-primary-500 hover:bg-primary-600  focus:bg-primary-600 mx-3 transform rounded-md px-8 py-3 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 focus:outline-none sm:mx-2"
            onClick={handleClick}
          >
            Notify Me
          </button>
        </div>

        <p className="text-md mt-8 text-center text-gray-700 dark:text-white md:text-xl">
          Notify me when App is launched :)
        </p>
      </div>
    </section>
  )
}

export default Contact
