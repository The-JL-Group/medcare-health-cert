import React from 'react';

// Icons
import {
  AiOutlineSmile,
  AiOutlineExpand,
  AiOutlineRocket,
} from 'react-icons/ai';

// Images
import aboutImg from '../../../assets/images/about/about.png';

function About() {
  return (
    <div className="bg-white">
      <div className="relative pb-32 bg-gray-800">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src={aboutImg}
            alt=""
          ></img>
          <div
            className="absolute inset-0 bg-gray-800 mix-blend-multiply"
            aria-hidden="true"
          ></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl lg:text-5xl font-[Inter]">
            About Us
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-300">
            Welcome to MedCare HealthCert! At our school, we pride ourselves in
            gapping bridges for our students to become future MDs, PAs, and
            Nurses. Our school is open to all college students and graduates
            majoring in any of the sciences. Also, if you are mandated to obtain
            direct patient care hours for medical school, you came to the
            perfect institute.
          </p>
          <p className="mt-6 max-w-3xl text-xl text-gray-300">
            We offer clinical training and certifications in Phlebotomy, Medical
            Assistant (CCMA), Patient Care Technician (PCT), EKG Technician,
            Medical Insurance, Billing and Coding (MIBC), Certified Medical
            Administrative Assistant (CMAA), and Certified Electronic Health
            Record Specialist (CEHRS).
          </p>
        </div>
      </div>

      <section
        className="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <h2 className="sr-only" id="contact-heading">
          Contact us
        </h2>
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
          <div className="flex flex-col bg-white rounded-2xl shadow-xl">
            <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
              {/* Flexibility Card */}
              <div className="absolute top-0 p-5 inline-block bg-sky-500 rounded-xl shadow-lg transform -translate-y-1/2">
                <AiOutlineExpand className="scale-150 text-white" />
              </div>
              <h3 className="text-xl font-medium text-gray-900">Flexibility</h3>
              <p className="mt-4 text-base text-gray-500">
                We know you have a lot on your plate. Luckily, we're flexible
                with our assistance and our hours.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
              <a
                href="/services"
                className="text-base font-medium text-galleryButton hover:text-blue-400"
              >
                See Our Services<span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col bg-white rounded-2xl shadow-xl">
            <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
              {/* Dedication Card */}
              <div className="absolute top-0 p-5 inline-block bg-sky-500 rounded-xl shadow-lg transform -translate-y-1/2">
                <AiOutlineRocket className="scale-150 text-white" />
              </div>
              <h3 className="text-xl font-medium text-gray-900">Dedication</h3>
              <p className="mt-4 text-base text-gray-500">
                At MedCare HealthCert, we are dedicated to helping you learn,
                grow, and achieve your goals in the medical field.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
              <a
                href="/contact"
                className="text-base font-medium text-galleryButton hover:text-blue-400"
              >
                Contact Us<span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col bg-white rounded-2xl shadow-xl">
            <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
              {/* Fun Card */}
              <div className="absolute top-0 p-5 inline-block bg-sky-500 rounded-xl shadow-lg transform -translate-y-1/2">
                <AiOutlineSmile className="scale-150 text-white" />
              </div>
              <h3 className="text-xl font-medium text-gray-900">Fun</h3>
              <p className="mt-4 text-base text-gray-500">
                Most importantly, we have a lot of fun while learning!{' '}
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
              <a
                href="/gallery"
                className="text-base font-medium text-galleryButton hover:text-blue-400"
              >
                View Our Gallery<span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
