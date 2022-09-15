import React from 'react';
import InputBox from './InputBox';
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa';
import { FiPhone, FiMapPin } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';

function Contact() {
  return (
    <div className="bg-white">
      <main className="overflow-hidden">
        {/* <!-- Contact Header --> */}
        <div className="bg-amber-50">
          <div className="py-20 lg:py-28">
            <div className="relative z-10 max-w-7xl mx-auto pl-4 pr-8 sm:px-6 lg:px-8">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl font-[Inter]">
                Contact Us
              </h1>
              {/* Slogan */}
              <h2 className="block text-3xl drop-shadow-md text-sky-500 font-['Courgette'] italic p-2">
                Where we care
              </h2>
              <p className="mt-6 text-xl max-w-3xl">
                Have any questions for us? If you're interested in our program
                and or have any remarks or concerns, let us know! Our Team will
                get back to you as soon as possible.
              </p>
            </div>
          </div>
        </div>

        <section
          className="relative bg-white mt-10"
          aria-labelledby="contact-heading"
        >
          <div className="absolute w-full h-1/2" aria-hidden="true"></div>
          {/* <!-- Decorative dot pattern --> */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <svg
              className="absolute z-0 top-0 right-0 transform -translate-y-16 translate-x-1/2 sm:translate-x-1/4 md:-translate-y-24 lg:-translate-y-72"
              width="404"
              height="384"
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="404"
                height="384"
                fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
              />
            </svg>
          </div>

          {/* <!-- Contact Container --> */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative bg-white shadow-xl">
              <h2 id="contact-heading" className="sr-only">
                Contact us
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="relative overflow-hidden py-10 px-6 bg-gradient-to-b from-blue-500 to-blue-600 sm:px-10 xl:p-12">
                  {/* <!-- Decorative angle backgrounds --> */}
                  <div
                    className="absolute inset-0 pointer-events-none sm:hidden"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute inset-0 w-full h-full"
                      width="343"
                      height="388"
                      viewBox="0 0 343 388"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                        fill="url(#linear1)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear1"
                          x1="254.553"
                          y1="107.554"
                          x2="961.66"
                          y2="814.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff"></stop>
                          <stop
                            offset="1"
                            stopColor="#fff"
                            stopOpacity="0"
                          ></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div
                    className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute inset-0 w-full h-full"
                      width="359"
                      height="339"
                      viewBox="0 0 359 339"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                        fill="url(#linear2)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear2"
                          x1="192.553"
                          y1="28.553"
                          x2="899.66"
                          y2="735.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff"></stop>
                          <stop
                            offset="1"
                            stopColor="#fff"
                            stopOpacity="0"
                          ></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div
                    className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute inset-0 w-full h-full"
                      width="160"
                      height="678"
                      viewBox="0 0 160 678"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                        fill="url(#linear3)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear3"
                          x1="192.553"
                          y1="325.553"
                          x2="899.66"
                          y2="1032.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff"></stop>
                          <stop
                            offset="1"
                            stopColor="#fff"
                            stopOpacity="0"
                          ></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  {/* <!-- Contact Information --> */}
                  <h3 className="text-lg font-medium text-white">
                    Contact information
                  </h3>
                  <p className="mt-6 text-base text-teal-50 max-w-3xl">
                    Need a 1-on-1 talk directly? You can text our student
                    hotline number or send us an email.
                  </p>

                  {/* <!-- Contact Information Details--> */}
                  <dl className="mt-8 space-y-6">
                    {/* <!-- Phone Number--> */}
                    <dt>
                      <span className="sr-only">Phone number</span>
                    </dt>
                    <dd className="flex text-base text-white">
                      <FiPhone
                        size={'1.5rem'}
                        className="flex-shrink-0 text-amber-300"
                      />
                      <a className="ml-3" href="tel:805-522-1344">
                        404-944-2346
                      </a>
                    </dd>

                    {/* <!-- Email--> */}
                    <dt>
                      <span className="sr-only">Email</span>
                    </dt>
                    <dd className="flex text-base text-white">
                      <HiOutlineMail
                        size={'1.5rem'}
                        className="flex-shrink-0 text-amber-300"
                      />
                      <a className="ml-3" href="mailto:1mattresspros@gmail.com">
                        support@medcarehealthcert.com
                      </a>
                    </dd>

                    {/* <!-- Location--> */}
                    <dt>
                      <span className="sr-only">Location</span>
                    </dt>
                    <dd className="flex text-base text-white">
                      <FiMapPin
                        size={'1.5rem'}
                        className="flex-shrink-0 text-amber-300"
                      />
                      <span className="ml-3">
                        250 Langley Dr # 1312, Lawrenceville, GA 30046
                      </span>
                    </dd>
                  </dl>

                  {/* <!-- Socials--> */}
                  <ul className="mt-8 flex space-x-12">
                    <li>
                      <a
                        className="text-amber-300 hover:text-amber-100"
                        href="https://www.facebook.com/MedCares"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="sr-only">Facebook</span>
                        <FaFacebook size={'1.5rem'} />
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-amber-300 hover:text-amber-100"
                        href="https://www.instagram.com/medcares1/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="sr-only">Instagram</span>
                        <FaInstagram size={'1.5rem'} />
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-amber-300 hover:text-amber-100"
                        href="https://twitter.com/medcareinfos"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="sr-only">Twitter</span>
                        <FaTwitter size={'1.5rem'} />
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-amber-300 hover:text-amber-100"
                        href="https://www.tiktok.com/@medcarehealthcert?_d=secCgYIASAHKAESPgo8YjzpuiEzdiXkwtR4WHk1rEZmUX%2FwbR6Ga8IavRLz0Qc0s26a6GIzSmXcHA5S0EfM9RTxMxQnOY795fjUGgA%3D&_r=1&checksum=7c45a515ed653b87c284f387c46073fd7b812aaa83c24dfba7d55b59da727b95&language=en&sec_uid=MS4wLjABAAAAPC_xK2YrNZ0cRjxmdwtC5HBLT3AXRYxvY1CGimeGM4z_zGpz7J2j3291u9iC18pI&sec_user_id=MS4wLjABAAAA4k_eoBxI4CR7LkPoAa4PSsLTamC82-65BUg9bbY8ISfV9mZVCZJykVPZ6q7chhtA&share_app_id=1233&share_author_id=6810637229493601285&share_link_id=0D717981-37C7-4180-AF4F-FFF24F0AB1F0&source=h5_m&timestamp=1658421640&tt_from=copy&u_code=db0h334f0g1bc5&ug_btm=b7200%2Cb5836&user_id=6794243478852207621&utm_campaign=client_share&utm_medium=ios&utm_source=copy"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="sr-only">TikTok</span>
                        <FaTiktok size={'1.5rem'} />
                      </a>
                    </li>
                  </ul>
                </div>

                {/* <!-- Input Box--> */}
                <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
                  <h3 className="text-lg font-medium">Send us a message</h3>
                  <InputBox />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Google Map--> */}
        <div className="mt-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d911.9168126062208!2d-83.99714321683736!3d33.95613758970722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5be8c90036d15%3A0x68c57d7744061e4d!2sMedCare%20HealthCert!5e0!3m2!1sen!2sus!4v1657239802942!5m2!1sen!2sus"
            className="w-full"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="map"
          ></iframe>
        </div>
      </main>
    </div>
  );
}

export default Contact;
