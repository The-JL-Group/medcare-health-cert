import React from 'react';

// Components
import VideoFiles from './videoFiles';

function Video() {
  return (
  <div class="relative bg-white overflow-hidden">
    

    <div class="relative pt-6  sm:pb-24">
      

      <main class="mx-auto max-w-7xl px-4 sm:px-6">
        <div class="lg:grid lg:grid-cols-12 lg:gap-8">
          <div class="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1>
              <span class="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                <span class="block text-gray-900 font-[Inter]">Become Part of Our Family</span>
              </span>
            </h1>
            <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">Here at MedCare HealthCert, we are honored to assist you in your journey towards medicine. We are a flexible, accelerated, and affordable certification school for undergraduate and graduate science majors. We offer studying material, exam prep, as well as clinical training for all your medical procedures. National Certification testing is available at the location of your choice, which are all nationally recognized.</p>

            <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">With a competitive medical professional field on the rise, let’s get the ball rolling!</p>
          </div>

          <div class="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            

            {/* Video Container */}
            <div class="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">

              <VideoFiles/>
            </div>

          </div>
        </div>
      </main>
    </div>
  </div>
  )
}

export default Video;