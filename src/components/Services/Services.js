import React from 'react';
import servicesBanner from '../../assets/images/services/servicesBanner.png';
import {
  FaRegHospital,
  FaHeartbeat,
  FaUserNurse,
  FaHandHoldingMedical,
} from 'react-icons/fa';
import { GiTripleNeedle } from 'react-icons/gi';
import { GrPersonalComputer } from 'react-icons/gr';

function Services() {
  return (
    <section>
      <div className="bg-white">
        {/* <!-- Hero card --> */}
        <div className="relative">
          <div>
            <div className="relative shadow-xl sm:overflow-hidden">
              {/* Services Header */}
              <div className="absolute inset-0">
                <img
                  className="h-full w-full object-cover"
                  src={servicesBanner}
                  alt="services Banner"
                />
                <div className="absolute inset-0 bg-blue-300 mix-blend-multiply"></div>
              </div>
              {/* Services Header Content */}
              <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="block text-white">Our Services</span>
                  <span className="block text-3xl drop-shadow-md text-amber-400 font-['Courgette'] italic p-2">
                    Where We Care
                  </span>
                </h1>
                <p className="mt-3 max-w-lg mx-auto text-center text-xl text-white sm:max-w-3xl">
                  All the titles offered at MedCare HealthCert include: study
                  materials for the title of your choice, unlimited hands-on
                  clinicals, exam review and preparation. Once one obtains their
                  nationally state-wide certification, we assist you in becoming
                  familiar with performing medical procedures. Our titles are
                  very flexible. We understand the hassle of balancing a full
                  schedule, whether it is a hectic class schedule or full time
                  employment. We are here to help you achieve your goals without
                  having to sacrifice your time and finances.
                </p>
                <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                  <div>
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSeN5gkyLOgwY10k-v8oOXCGx2rJiw_BosrU5DJtsmaeWI25EQ/viewform"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-sky-500 bg-white hover:bg-indigo-50 sm:px-8"
                    >
                      {' '}
                      Orientation RSVP{' '}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <dl className="mt-16 mb-16 max-w-2xl mx-auto grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 px-10">
          {/* CCMA */}
          <div className="border-t border-gray-200 pt-4">
            <div className="flex justify-center">
              <FaRegHospital
                size={'4rem'}
                className="bg-sky-200 mb-4 p-2 drop-shadow-md rounded-lg"
              />
            </div>
            <dt className="font-bold text-2xl text-gray-900 text-center">
              CCMA
            </dt>
            <dd className="mt-2 text-md text-gray-500">
              As a <span className="font-bold">clinical medical assistant</span>
              , your first task is to greet and instruct patients, making them
              feel at ease. You will be working alongside doctors, nurses, and
              other medical professionals. CCMAs are responsible for
              administrative tasks, performing phlebotomy, EKG, and other minor
              hands-on medical procedures. This is why multitasking is vital in
              the medical assistant field. Our program is designed to help you
              learn all the aspects of being a CCMA so that your patients will
              obtain the best care.
            </dd>
          </div>

          {/* EKG TECHNICIAN */}
          <div className="border-t border-gray-200 pt-4">
            <div className="flex justify-center">
              <FaHeartbeat
                size={'4rem'}
                className="bg-amber-300 mb-4 p-2 drop-shadow-md rounded-lg"
              />
            </div>
            <dt className="font-bold text-2xl text-gray-900 text-center">
              EKG TECHNICIAN
            </dt>
            <dd className="mt-2 text-md text-gray-500">
              If a more technical healthcare job interests you, an
              <span className="font-bold"> EKG Technician </span>
              might be your answer. Our EKG program trains you to recognize
              erratic waves and how to place the 12-lead on the patient. Proper
              placement of the 12-lead is imperative to see how the heart is
              firing. EKG Technicians have job opportunities within most cardiac
              divisions of the hospital, as well as doctor offices.
            </dd>
          </div>

          {/* PHLEBOTOMY */}
          <div className="border-t border-gray-200 pt-4">
            <div className="flex justify-center">
              <GiTripleNeedle
                size={'4rem'}
                className="bg-sky-200 mb-4 p-2 drop-shadow-md rounded-lg"
              />
            </div>
            <dt className="font-bold text-2xl text-gray-900 text-center">
              PHLEBOTOMY
            </dt>
            <dd className="mt-2 text-md text-gray-500">
              If you love the clinical/lab aspect of healthcare training, then
              Phlebotomy is for you. In our Phlebotomy program, you are taught
              how to obtain specimens using a variety of techniques. You also
              receive an introduction for specific labs that might be drawn and
              the different tubes you will use for each. The specimens are
              obtained for treatment, prevention of diseases, and testing for a
              diagnosis.
            </dd>
          </div>

          {/* PERSONAL CARE TECHNICIAN */}
          <div className="border-t border-gray-200 pt-4">
            <div className="flex justify-center">
              <FaUserNurse
                size={'4rem'}
                className="bg-amber-300 mb-4 p-2 drop-shadow-md rounded-lg"
              />
            </div>
            <dt className="font-bold text-2xl text-gray-900 text-center">
              PERSONAL CARE TECHNICIAN
            </dt>
            <dd className="mt-2 text-md text-gray-500">
              As a Personal Care Technician, you will be taking care of
              homebound patients of all ages. PCT will assist in activities of
              daily living (ADL), communication, and basic caregiving skills
              needed to provide the best quality care for patients. In addition,
              you will be taught your role as a PCA, your responsibilities, as
              well as how to relate to other family members.
            </dd>
          </div>

          {/* BILLING & CODING */}
          <div className="border-t border-gray-200 pt-4">
            <div className="flex justify-center">
              <GrPersonalComputer
                size={'4rem'}
                className="bg-sky-200 mb-4 p-2 drop-shadow-md rounded-lg"
              />
            </div>
            <dt className="font-bold text-2xl text-gray-900 text-center">
              BILLING & CODING
            </dt>
            <dd className="mt-2 text-md text-gray-500">
              If you are interested in medical insurance billing and coding and
              have the skills to work in bookkeeping, payroll, accounting
              clerks, or medical administrative assistant, then this is the
              title for you. You will need excellent computer and communication
              skills in order to assist with all the administrative tasks of
              your future place of employment. It can range from insurance
              claims to keeping medical records in accordance to the rules.{' '}
            </dd>
          </div>

          {/* BILLING & CODING */}
          <div className="border-t border-gray-200 pt-4">
            <div className="flex justify-center">
              <FaHandHoldingMedical
                size={'4rem'}
                className="bg-amber-300 mb-4 p-2 drop-shadow-md rounded-lg"
              />
            </div>
            <dt className="font-bold text-2xl text-gray-900 text-center">
              & MUCH MORE
            </dt>
            <dd className="mt-2 text-md text-gray-500">
              Come see other ways MedCare HealthCert can help you!
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

export default Services;
