import React from 'react';

// Icons
import {
  AiOutlineSmile,
  AiOutlineExpand,
  AiOutlineRocket,
} from 'react-icons/ai';

// Images
import aboutImg from '../../../assets/images/about/about.jpg';

function About() {
  return (
    <div class="bg-white">
      <div class="relative pb-32 bg-gray-800">
        <div class="absolute inset-0">
          <img class="w-full h-full object-cover" src={aboutImg} alt=""></img>
          <div
            class="absolute inset-0 bg-gray-800 mix-blend-multiply"
            aria-hidden="true"
          ></div>
        </div>
        <div class="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 class="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl font-[Inter]">
            About US
          </h1>
          <p class="mt-6 max-w-3xl text-xl text-gray-300">
            Welcome to MedCare HealthCert! At our school, we pride ourselves in
            gapping bridges for our students to become future MDs, PAs, and
            Nurses. Our school is open to all college students and graduates
            majoring in any of the sciences. Also, if you are mandated to obtain
            direct patient care hours for medical school, you came to the
            perfect institute.
          </p>
          <p class="mt-6 max-w-3xl text-xl text-gray-300">
            We offer clinical training and certifications in Phlebotomy, Medical
            Assistant (CCMA), Patient Care Technician (PCT), EKG Technician,
            Medical Insurance, Billing and Coding (MIBC), Certified Medical
            Administrative Assistant (CMAA), and Certified Electronic Health
            Record Specialist (CEHRS).
          </p>
        </div>
      </div>

      <section
        class="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <h2 class="sr-only" id="contact-heading">
          Contact us
        </h2>
        <div class="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
          <div class="flex flex-col bg-white rounded-2xl shadow-xl">
            <div class="flex-1 relative pt-16 px-6 pb-8 md:px-8">

              {/* Flexibility Card */}
              <div class="absolute top-0 p-5 inline-block bg-sky-500 rounded-xl shadow-lg transform -translate-y-1/2">
                <AiOutlineExpand className="scale-150 text-white" />
              </div>
              <h3 class="text-xl font-medium text-gray-900">Flexibility</h3>
              <p class="mt-4 text-base text-gray-500">
                We know you have a lot on your plate. Luckily, we're flexible
                with our assistance, and our hours.
              </p>
            </div>
            <div class="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
              <a
                href="/contact"
                class="text-base font-medium text-galleryButton hover:text-blue-400"
              >
                Contact us<span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
          </div>

          <div class="flex flex-col bg-white rounded-2xl shadow-xl">
            <div class="flex-1 relative pt-16 px-6 pb-8 md:px-8">

              {/* Dedication Card */}
              <div class="absolute top-0 p-5 inline-block bg-sky-500 rounded-xl shadow-lg transform -translate-y-1/2">
                <AiOutlineRocket className="scale-150 text-white" />
              </div>
              <h3 class="text-xl font-medium text-gray-900">Dedication</h3>
              <p class="mt-4 text-base text-gray-500">
                At MedCare Health Cert, we are dedicated to helping you learn,
                grow, and achieve your dreams in the medical field.
              </p>
            </div>
            <div class="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
              <a
                href="/contact"
                class="text-base font-medium text-galleryButton hover:text-blue-400"
              >
                Contact us<span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
          </div>

          <div class="flex flex-col bg-white rounded-2xl shadow-xl">
            <div class="flex-1 relative pt-16 px-6 pb-8 md:px-8">
              
              {/* Fun Card */}
              <div class="absolute top-0 p-5 inline-block bg-sky-500 rounded-xl shadow-lg transform -translate-y-1/2">
                <AiOutlineSmile className="scale-150 text-white" />
              </div>
              <h3 class="text-xl font-medium text-gray-900">Fun</h3>
              <p class="mt-4 text-base text-gray-500">
                Most importantly, we have a lot of fun while learning.{' '}
              </p>
            </div>
            <div class="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
              <a
                href="/contact"
                class="text-base font-medium text-galleryButton hover:text-blue-400"
              >
                Contact us<span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
