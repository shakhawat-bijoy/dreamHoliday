import React from 'react'
import Image from './Image'
import { Link } from 'react-router'

const Error = () => {
    return (
        <div className=''>
            <div class="h-screen w-screen  flex items-center bg-gray-900">
                <div class="container flex flex-col md:flex-row items-center justify-between px-5 text-gray-700">
                    <div class="w-full lg:w-1/2 mx-8">
                        <div class="text-7xl text-white font-dark font-extrabold mb-8"> 404</div>
                        <p class="text-2xl md:text-3xl font-light leading-normal mb-8 text-white">
                            Sorry we couldn't find the page you're looking for
                        </p>

                        <h1 class="text-2xl md:text-3xl font-light leading-normal mb-8 text-white">Lost in the Digital Wilderness</h1>

                        <Link to="/" class="px-5 inline py-3 text-sm font-semibold font-montserrat leading-5 text-black rounded-lg bg-white uppercase">back to home</Link>
                    </div>
                    <div class="w-full lg:flex lg:justify-end lg:w-1/2 mx-5 my-12">
                        <Image src="https://user-images.githubusercontent.com/43953425/166269493-acd08ccb-4df3-4474-95c7-ad1034d3c070.svg" class="" alt="Page not found" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Error