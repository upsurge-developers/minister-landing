import { Form } from '@remix-run/react'
import React from 'react'
import { Input } from '~/components/ui/input'
import { Button } from '~/components/ui/button'

const Hero: React.FC<object> = () => {

  return (
    <div className="bg-black text-white flex align-middle items-center min-h-screen">
        <section className="w-full">
          <div className="relative overflow-hidden">
            <img
              alt="Hero"
              className="mx-auto aspect-video rounded-b-3xl object-cover object-center"
              src="/background.png"
            />
            <div className="absolute inset-0 z-10 backdrop-blur flex flex-col justify-center gap-4">
              <div className="container flex flex-col items-center px-4 space-y-4 md:px-6 lg:space-y-8">
                <div className="space-y-2 text-center">
                  <h1 className="font-bold tracking-tighter text-7xl xl:text-9xl/none">
                    Minister
                  </h1>
                  <p className="text-2xl tracking-wide leading-loose text-gray-500 md:text-base/relaxed lg:text-2xl/relaxed xl:text-3xl/relaxed dark:text-gray-400">
                    The digital lamp on the hill
                  </p>
                </div>
                <div className="w-full max-w-sm space-y-2">
                  <Form
                    id="invite-form"
                    method="post"
                    className="flex space-x-2"
                  >
                    <Input
                      className="max-w-lg flex-1"
                      placeholder="Enter your email"
                      type="email"
                      name="email"
                    />
                    <Button variant="success" type="submit">{"I'm Interested"}</Button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
  )
}

export default Hero
