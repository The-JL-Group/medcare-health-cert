import React from 'react';
import servicesBanner from '../../assets/images/1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Services() {
  return (
    <section>
      <div class="bg-white">
        <div aria-hidden="true" class="relative">
          <img
            src={servicesBanner}
            alt="Services Banner"
            class="w-full h-96 object-center object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-white"></div>
        </div>

        <div class="relative -mt-12 max-w-7xl mx-auto pb-16 px-4 sm:pb-24 sm:px-6 lg:px-8">
          <div class="max-w-2xl mx-auto text-center lg:max-w-4xl">
            <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Our Services
            </h2>
            <h3 class="text-xl font-extrabold tracking-tight text-gray-900 sm:text-2xl">
              Where We Care
            </h3>
            <p class="mt-4 text-gray-500">
              All the titles offered at MedCare HealthCert include: study
              materials for the title of your choice, unlimited hands-on
              clinicals, exam review and preparation. Once one obtains their
              nationally state-wide certification, we assist you in becoming
              familiar with performing medical procedures. Our titles are very
              flexible. We understand the hassle of balancing a full schedule,
              whether it is a hectic class schedule or a full time employment.
              We are here to help you achieve your goals without having to
              sacrifice your time and finances.
            </p>
          </div>

          <dl class="mt-16 max-w-2xl mx-auto grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
            <div class="border-t border-gray-200 pt-4">
              <FontAwesomeIcon icon="fa-thin fa-suitcase-medical" size="lg" />
              <dt class="font-medium text-gray-900">CCMA</dt>
              <dd class="mt-2 text-sm text-gray-500">
                As a clinical medical assistant, your first task is to greet and
                instruct patients, making them feel at ease. You will be working
                alongside doctors, nurses, and other medical professionals.
                CCMAs are responsible for administrative tasks, performing
                phlebotomy, EKG, and other minor hands-on medical procedures.
                This is why multitasking is vital in the medical assistant
                field. Our program is designed to help you learn all the aspects
                of being a CCMA so that your patients will obtain the best care.
              </dd>
            </div>

            <div class="border-t border-gray-200 pt-4">
              <dt class="font-medium text-gray-900">EKG TECHNICIAN</dt>
              <dd class="mt-2 text-sm text-gray-500">
                If a more technical healthcare job interests you, EKG Technician
                might be your answer. Our EKG program trains you to recognize
                erratic waves and how to place the 12-lead on the patient
                without artifact. Proper placement of the 12-lead is imperative
                to see how the heart is firing. EKG Technicians have job
                opportunities within most cardiac divisions of the hospital as
                well as doctor offices.
              </dd>
            </div>

            <div class="border-t border-gray-200 pt-4">
              <dt class="font-medium text-gray-900">PHLEBOTOMY</dt>
              <dd class="mt-2 text-sm text-gray-500">
                If you love the clinical/lab aspect of healthcare training, then
                Phlebotomy is for you. In our Phlebotomy program, you are taught
                how to obtain specimens using a variety of techniques. You also
                recieve an introduction for specific labs that might be drawn
                and the different tubes you will use for each. The specimens are
                obtained for treatment, prevention of diseases, and testing for
                a diagnosis.
              </dd>
            </div>

            <div class="border-t border-gray-200 pt-4">
              <dt class="font-medium text-gray-900">
                PERSONAL CARE TECHNICIAN
              </dt>
              <dd class="mt-2 text-sm text-gray-500">
                As a Personal Care Technician, you will be taking care of
                homebound patients of all ages. PCT will assist in activities of
                daily living (ADL), communication, and basic caregiving skills
                needed to provide the best quality care for patients. In
                addition, you will be taught your role as a PCA, your
                responsibilities, as well as how to relate to other family
                members.
              </dd>
            </div>

            <div class="border-t border-gray-200 pt-4">
              <dt class="font-medium text-gray-900">BILLING & CODING</dt>
              <dd class="mt-2 text-sm text-gray-500">
                If you are interested in medical insurance billing and coding
                and have the skills to work in bookkeeping, payroll, accounting
                clerks, or medical administrative assistant, then this is the
                title for you. You will need excellent computer and
                communication skills in order to assist with all the
                administrative tasks of your future place of employment. It can
                range from insurance claims to keeping medical records in
                accordance to the rules.{' '}
              </dd>
            </div>

            <div class="border-t border-gray-200 pt-4">
              <dt class="font-medium text-gray-900">& MUCH MORE</dt>
              <dd class="mt-2 text-sm text-gray-500">
                Come see other ways MedCare HealthCert can help you!
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

export default Services;
