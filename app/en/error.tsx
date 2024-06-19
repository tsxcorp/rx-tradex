'use client' // Error components must be Client Components
 
import Link from 'next/link'
import Image from 'next/image'
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div className="lg:px-24 lg:py-32 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
      <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
          <div className="relative">
              <div className="absolute">
                  <div className="">
                      <h1 className="my-2 text-gray-800 font-bold text-2xl">
                        Looks like you&apos;ve found the doorway to the great nothing
                      </h1>
                      <p className="my-2 text-gray-800">Sorry about that! Please visit our hompage to get where you need to go.</p>
                      <Link href="/">
                        <button className="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">Back to Homepage</button>
                      </Link>
                  </div>
              </div>
              <div>
                  <Image
                    src="https://media.rx-vietnamshows.com/wp-content/uploads/2024/06/20031539/404-2.webp"
                    width={516}
                    height={190}
                    alt="404 Error"
                  />
              </div>
          </div>
      </div>
    </div>
  )
}