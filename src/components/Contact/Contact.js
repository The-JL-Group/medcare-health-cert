import React from 'react';
import InputBox from './InputBox';

function Contact() {
  return (
    <div class="bg-white">
      <main class="overflow-hidden">
        {/* <!-- Contact Header --> */}
        <div class="bg-warm-gray-50">
          <div class="py-20 lg:py-28">
            <div class="relative z-10 max-w-7xl mx-auto pl-4 pr-8 sm:px-6 lg:px-8">
              <h1 class="text-4xl font-extrabold tracking-tight text-warm-gray-900 sm:text-5xl lg:text-6xl">
                Contact Us
              </h1>
              <p class="mt-6 text-xl text-warm-gray-500 max-w-3xl">
                Have any questions for us? If you're interested in our program
                and or have any remarks or concerns, let us know! Our Team will
                get back to you as soon as possible.
              </p>
            </div>
          </div>
        </div>

        <section
          class="relative bg-white mt-10"
          aria-labelledby="contact-heading"
        >
          <div class="absolute w-full h-1/2" aria-hidden="true"></div>
          {/* <!-- Decorative dot pattern --> */}
          <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <svg
              class="absolute z-0 top-0 right-0 transform -translate-y-16 translate-x-1/2 sm:translate-x-1/4 md:-translate-y-24 lg:-translate-y-72"
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
                    class="text-gray-200"
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
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="relative bg-white shadow-xl">
              <h2 id="contact-heading" class="sr-only">
                Contact us
              </h2>

              <div class="grid grid-cols-1 lg:grid-cols-3">
                <div class="relative overflow-hidden py-10 px-6 bg-gradient-to-b from-blue-500 to-blue-600 sm:px-10 xl:p-12">
                  {/* <!-- Decorative angle backgrounds --> */}
                  <div
                    class="absolute inset-0 pointer-events-none sm:hidden"
                    aria-hidden="true"
                  >
                    <svg
                      class="absolute inset-0 w-full h-full"
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
                        fill-opacity=".1"
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
                          <stop stop-color="#fff"></stop>
                          <stop
                            offset="1"
                            stop-color="#fff"
                            stop-opacity="0"
                          ></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div
                    class="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden"
                    aria-hidden="true"
                  >
                    <svg
                      class="absolute inset-0 w-full h-full"
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
                        fill-opacity=".1"
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
                          <stop stop-color="#fff"></stop>
                          <stop
                            offset="1"
                            stop-color="#fff"
                            stop-opacity="0"
                          ></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div
                    class="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block"
                    aria-hidden="true"
                  >
                    <svg
                      class="absolute inset-0 w-full h-full"
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
                        fill-opacity=".1"
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
                          <stop stop-color="#fff"></stop>
                          <stop
                            offset="1"
                            stop-color="#fff"
                            stop-opacity="0"
                          ></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  {/* <!-- Contact Information --> */}
                  <h3 class="text-lg font-medium text-white">
                    Contact information
                  </h3>
                  <p class="mt-6 text-base text-teal-50 max-w-3xl">
                    Need a 1-on-1 talk directly? You can text our student
                    hotline number or send us an email.
                  </p>
                  <dl class="mt-8 space-y-6">
                    <dt>
                      <span class="sr-only">Phone number</span>
                    </dt>
                    <dd class="flex text-base text-teal-50">
                      <svg
                        class="flex-shrink-0 w-6 h-6 text-teal-200"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <a class="ml-3" href="tel:805-522-1344">
                        404-944-2346
                      </a>
                    </dd>
                    <dt>
                      <span class="sr-only">Email</span>
                    </dt>
                    <dd class="flex text-base text-teal-50">
                      <svg
                        class="flex-shrink-0 w-6 h-6 text-teal-200"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <a class="ml-3" href="mailto:1mattresspros@gmail.com">
                        support@medcarehealthcert.com
                      </a>
                    </dd>
                    <dt>
                      <span class="sr-only">Location</span>
                    </dt>
                    <dd class="flex text-base text-teal-50">
                      <svg
                        class="flex-shrink-0 w-6 h-6 text-teal-200"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          stroke-width="2"
                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          stroke-width="2"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                      </svg>

                      <span class="ml-3">
                        250 Langley Dr # 1312, Lawrenceville, GA 30046
                      </span>
                    </dd>
                  </dl>
                  <ul class="mt-8 flex space-x-12">
                    <li>
                      <a
                        class="text-teal-200 hover:text-teal-100"
                        href="https://www.facebook.com/MedCares"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span class="sr-only">Facebook</span>
                        <svg
                          class="w-7 h-7"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        class="text-teal-200 hover:text-teal-100"
                        href="https://www.instagram.com/medcares1/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span class="sr-only">Instagram</span>
                        <svg
                          class="h-7 w-7"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        class="text-teal-200 hover:text-teal-100"
                        href="https://twitter.com/medcareinfos"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span class="sr-only">Twitter</span>
                        <svg
                          class="w-7 h-7"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        class="text-teal-200 hover:text-teal-100"
                        href="https://www.tiktok.com/@medcarehealthcert?_d=secCgYIASAHKAESPgo8YjzpuiEzdiXkwtR4WHk1rEZmUX%2FwbR6Ga8IavRLz0Qc0s26a6GIzSmXcHA5S0EfM9RTxMxQnOY795fjUGgA%3D&_r=1&checksum=7c45a515ed653b87c284f387c46073fd7b812aaa83c24dfba7d55b59da727b95&language=en&sec_uid=MS4wLjABAAAAPC_xK2YrNZ0cRjxmdwtC5HBLT3AXRYxvY1CGimeGM4z_zGpz7J2j3291u9iC18pI&sec_user_id=MS4wLjABAAAA4k_eoBxI4CR7LkPoAa4PSsLTamC82-65BUg9bbY8ISfV9mZVCZJykVPZ6q7chhtA&share_app_id=1233&share_author_id=6810637229493601285&share_link_id=0D717981-37C7-4180-AF4F-FFF24F0AB1F0&source=h5_m&timestamp=1658421640&tt_from=copy&u_code=db0h334f0g1bc5&ug_btm=b7200%2Cb5836&user_id=6794243478852207621&utm_campaign=client_share&utm_medium=ios&utm_source=copy"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span class="sr-only">TikTok</span>
                        <svg
                          class="w-7 h-7"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fab"
                          data-icon="tiktok"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.104,4,24,4z M22.689,13.474 c-0.13,0.012-0.261,0.02-0.393,0.02c-1.495,0-2.809-0.768-3.574-1.931c0,3.049,0,6.519,0,6.577c0,2.685-2.177,4.861-4.861,4.861 C11.177,23,9,20.823,9,18.139c0-2.685,2.177-4.861,4.861-4.861c0.102,0,0.201,0.009,0.3,0.015v2.396c-0.1-0.012-0.197-0.03-0.3-0.03 c-1.37,0-2.481,1.111-2.481,2.481s1.11,2.481,2.481,2.481c1.371,0,2.581-1.08,2.581-2.45c0-0.055,0.024-11.17,0.024-11.17h2.289 c0.215,2.047,1.868,3.663,3.934,3.811V13.474z"
                          ></path>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
                  <h3 class="text-lg font-medium text-warm-gray-900">
                    Send us a message
                  </h3>
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
