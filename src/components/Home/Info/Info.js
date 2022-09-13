import React from 'react';

// Component
import medcareAward1 from '../../../assets/images/info/medcare_award.png';
import medcareAward2 from '../../../assets/images/info/new-award.png';

function Info() {
  return (
    <div className="bg-yellow-300">
      <section aria-labelledby="features-heading" className="relative">
        {/* Info Image Container */}
        <div className="aspect-w-3 aspect-h-2 overflow-hidden sm:aspect-w-5 lg:aspect-none lg:absolute lg:w-1/2 lg:h-full lg:pr-4 xl:pr-16">
          {/* Info Image */}
          <img
            src={medcareAward1}
            alt="Black leather journal with silver steel disc binding resting on wooden shelf with machined steel pen."
            className="h-full w-full object-center object-contain lg:h-full lg:w-full p-4"
          ></img>
        </div>

        <div className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:pb-32 sm:px-6 lg:max-w-7xl lg:pt-32 lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
          <div className="lg:col-start-2">
            <p className="mt-4 text-4xl sm:text-5xl xl:text-6xl font-extrabold text-gray-900 tracking-tight font-[Inter]">
              We Have Top-of-The-Line College & Specialized Training
            </p>
            <p className="mt-4 text-gray-700">
              Nothing is more important than your future. At MedCare Health
              Cert, that high-quality education matters.
            </p>

            <dl className="mt-10 grid grid-cols-1 gap-y-10 gap-x-8 text-sm sm:grid-cols-2">
              <div>
                <dt className="font-medium text-gray-900">
                  We're Gapping The Bridge To Your Medical Career
                </dt>
                <dd className="mt-2 text-gray-700">
                  Come check us out on <span>Guide to Gwinnett</span>. We have a
                  list of the best colleges and specialized training for your
                  medical aspirations!
                </dd>

                <dt className="font-medium text-gray-900 mt-10">Our Goal</dt>
                <dd className="mt-2 text-gray-700">
                  Our goal is to help you achieve your goals. Enhancing your
                  medical skills is our top priority.
                </dd>
              </div>

              <div>
                <img
                  src={medcareAward2}
                  className="w-3/12 sm:w-7/12 md:w-8/12"
                  alt="MedCare Award"
                ></img>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Info;
