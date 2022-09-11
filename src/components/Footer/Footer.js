import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-5 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <a
            href="https://www.facebook.com/MedCares"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Facebook</span>
            <FaFacebook size={'1.3rem'} />
          </a>

          <a
            href="https://www.instagram.com/medcares1/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Instagram</span>
            <FaInstagram size={'1.3rem'} />
          </a>

          <a
            href="https://twitter.com/medcareinfos"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Twitter</span>
            <FaTwitter size={'1.3rem'} />
          </a>

          <a
            href="https://www.tiktok.com/@medcarehealthcert?_d=secCgYIASAHKAESPgo8YjzpuiEzdiXkwtR4WHk1rEZmUX%2FwbR6Ga8IavRLz0Qc0s26a6GIzSmXcHA5S0EfM9RTxMxQnOY795fjUGgA%3D&_r=1&checksum=7c45a515ed653b87c284f387c46073fd7b812aaa83c24dfba7d55b59da727b95&language=en&sec_uid=MS4wLjABAAAAPC_xK2YrNZ0cRjxmdwtC5HBLT3AXRYxvY1CGimeGM4z_zGpz7J2j3291u9iC18pI&sec_user_id=MS4wLjABAAAA4k_eoBxI4CR7LkPoAa4PSsLTamC82-65BUg9bbY8ISfV9mZVCZJykVPZ6q7chhtA&share_app_id=1233&share_author_id=6810637229493601285&share_link_id=0D717981-37C7-4180-AF4F-FFF24F0AB1F0&source=h5_m&timestamp=1658421640&tt_from=copy&u_code=db0h334f0g1bc5&ug_btm=b7200%2Cb5836&user_id=6794243478852207621&utm_campaign=client_share&utm_medium=ios&utm_source=copy"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-gray-50"
          >
            <span className="sr-only">TikTok</span>
            <FaTiktok size={'1.3rem'} />
          </a>
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-center text-base text-gray-400">
            &copy; 2022 MedCare HealthCert, LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
