// React
import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';

// Logo
import logo from '../assets/images/logo/logo1.png'

// Icons
import { GiHealthNormal, GiArchiveRegister } from 'react-icons/gi';
import { RiHomeSmileFill, RiSmartphoneFill } from 'react-icons/ri';
import { AiFillSnippets } from 'react-icons/ai';
import {
  FaImages,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaTiktok,
} from 'react-icons/fa';

// Components
// Components
import Services from '../components/Services/Services';
import Footer from '../components/Footer/Footer';

const topNavigation = [
  { 
    name: 'Homepage', 
    href: '/', 
    icon: RiHomeSmileFill, 
    current: false 
  },
  { name: 'Services', 
    href: '/services', 
    icon: AiFillSnippets, 
    current: false 
  },
  { 
    name: 'Gallery', 
    href: '/gallery', 
    icon: FaImages, 
    current: false 
  },
  { 
    name: 'Contact', 
    href: '/contact', 
    icon: RiSmartphoneFill, 
    current: false 
  },
  { 
    name: 'Register', 
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSeN5gkyLOgwY10k-v8oOXCGx2rJiw_BosrU5DJtsmaeWI25EQ/viewform', 
    icon: GiArchiveRegister, 
    current: false,
    style: 'top-10 relative',
  },
];

const bottomNavigation = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/MedCares',
    icon: FaFacebook,
    current: false,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/medcares1/',
    icon: FaInstagram,
    current: false,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/medcareinfos',
    icon: FaTwitter,
    current: false,
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@medcarehealthcert?_d=secCgYIASAHKAESPgo8YjzpuiEzdiXkwtR4WHk1rEZmUX%2FwbR6Ga8IavRLz0Qc0s26a6GIzSmXcHA5S0EfM9RTxMxQnOY795fjUGgA%3D&_r=1&checksum=7c45a515ed653b87c284f387c46073fd7b812aaa83c24dfba7d55b59da727b95&language=en&sec_uid=MS4wLjABAAAAPC_xK2YrNZ0cRjxmdwtC5HBLT3AXRYxvY1CGimeGM4z_zGpz7J2j3291u9iC18pI&sec_user_id=MS4wLjABAAAA4k_eoBxI4CR7LkPoAa4PSsLTamC82-65BUg9bbY8ISfV9mZVCZJykVPZ6q7chhtA&share_app_id=1233&share_author_id=6810637229493601285&share_link_id=0D717981-37C7-4180-AF4F-FFF24F0AB1F0&source=h5_m&timestamp=1658421640&tt_from=copy&u_code=db0h334f0g1bc5&ug_btm=b7200%2Cb5836&user_id=6794243478852207621&utm_campaign=client_share&utm_medium=ios&utm_source=copy',
    icon: FaTiktok,
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function ServicesPage() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
    <Transition.Root show={sidebarOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 flex z-40 md:hidden"
        onClose={setSidebarOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="transition ease-in-out duration-300 transform"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
        >
          <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="absolute top-0 right-0 -mr-12 pt-2">
                <button
                  type="button"
                  className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  onClick={() => setSidebarOpen(false)}
                >
                  <span className="sr-only">Close sidebar</span>
                  <GiHealthNormal
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </Transition.Child>
            <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
              <div className="flex-shrink-0 flex items-center px-4">

                {/* Tablet/Mobile Logo */}
                <a href="/">
                  <img
                    className="h-8 w-auto scale-150 ml-5"
                    src={logo}
                    alt="Workflow"
                  />
                </a>
              </div>

              {/* Tablet/Mobile Bottom Nav */}
              <nav className="mt-5 px-2 space-y-1 top-3 relative">
                {topNavigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-sky-500 text-gray-900'
                        : 'text-gray-600 hover:bg-sky-500 hover:text-white',
                      `group flex items-center px-2 py-2 text-base font-medium rounded-md ${item.style}`
                    )}
                  >
                    <item.icon
                      className={classNames(
                        item.current
                          ? 'text-gray-500'
                          : 'text-gray-400 group-hover:text-white',
                        'mr-4 flex-shrink-0 h-6 w-6'
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                ))}
              </nav>

              {/* Tablet/Mobile Bottom Nav */}
              <nav className="mt-5 px-2 space-y-1 top-16 relative">
                {bottomNavigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-sky-500 text-gray-900'
                        : 'text-gray-600 hover:bg-sky-500 hover:text-white',
                      'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                    )}
                  >
                    <item.icon
                      className={classNames(
                        item.current
                          ? 'text-gray-500'
                          : 'text-gray-400 group-hover:text-white',
                        'mr-4 flex-shrink-0 h-6 w-6'
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                ))}
              </nav>

              
            </div>
            <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
              <a href="tel:404-944-2346" className="flex-shrink-0 group block">
                <div className="flex items-center">
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                      404-944-2346
                    </p>
                    <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">
                      Call us
                  </p>
                </div>
                </div>
              </a>
            </div>
          </div>
        </Transition.Child>
        <div className="flex-shrink-0 w-14">
         
        </div>
      </Dialog>
    </Transition.Root>



    {/* DESKTOP */}
    <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
      
      <div className="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white">
        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-4">

            {/* Desktop Logo */}
            <a href="/">
              <img
                className="h-8 w-auto scale-150 ml-5"
                src={logo}
                alt="Workflow"
              />
              </a>
          </div>

          {/* Desktop Nav */}

          {/* Desktop Top Nav */}
          <nav className="mt-5 flex-1 px-2 bg-white space-y-1 top-3 relative">
            {topNavigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-600 hover:bg-sky-500 hover:text-white',
                  `group flex items-center px-2 py-2 text-sm font-medium rounded-md ${item.style}`
                )}
              >
                <item.icon
                  className={classNames(
                    item.current
                      ? 'text-gray-500'
                      : 'text-gray-400 group-hover:text-white',
                    'mr-3 flex-shrink-0 h-6 w-6'
                  )}
                  aria-hidden="true"
                />
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop Bottom Nav */}
          <nav className="mt-1 flex-1 px-2 bg-white space-y-1 top-12 relative">
            {bottomNavigation.map((item) => (
              <a
                target="_blank"
                rel="noreferrer"
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-600 hover:bg-sky-500 hover:text-white',
                  'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                )}
              >
                <item.icon
                  className={classNames(
                    item.current
                      ? 'text-gray-500'
                      : 'text-gray-400 group-hover:text-white',
                    'mr-3 flex-shrink-0 h-6 w-6'
                  )}
                  aria-hidden="true"
                />
                {item.name}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
          <a href="tel:404-944-2346" className="flex-shrink-0 w-full group block">
            <div className="flex items-center">
        
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                  404-944-2346
                </p>
                <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">
                  Call us
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div className="md:pl-64 flex flex-col flex-1 z-50">
      <div className="sticky top-0 z-40 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-gray-100">
        <button
          type="button"
          className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          onClick={() => setSidebarOpen(true)}
        >
          <span className="sr-only">Open sidebar</span>
          <GiHealthNormal className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <main className="flex-1 z-1">
        <Services />
        <Footer />
      </main>
    </div>
  </div>
  );
}

export default ServicesPage;