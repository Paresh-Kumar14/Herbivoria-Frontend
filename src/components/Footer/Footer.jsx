
import React from "react";
import { FaPhone } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
const Footer = () => {
  return (
    <>
      <div className="text-white mt-20">
        <div
          data-aos="fade-down"
          className="container bg-gradient-to-b from-primary to-primaryDark rounded-t-3xl"
        >
          <h1 className="py-10 text-3xl font-bold text-yellow text-center">
            Contact Us
          </h1>
          <div
            className="grid grid-cols-1 sm:grid-cols-2
      md:grid-cols-3 gap-14 border-b-2 border-white pb-6"
          >
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <IoLocationSharp className="text-5xl" />
              </div>
              <p>
                #92,3rd Main,vrigo Nagar ,Post <br />
                Bengaluru,karnataka
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <MdEmail className="text-5xl" />
              </div>
              <p>info@xyz.com</p>
              <p>hr@xyz.com</p>
            </div>
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <FaPhone className="text-5xl" />
              </div>
              <p>+91 151654486 - Sales And Services</p>
              <p>+91 482565755 - Hiring Queries</p>
              <p>+91 587212595 - WhatsApp</p>
            </div>
          </div>
          <div className="flex justify-between p-4 items-center">
            <p> &copy;2024 Paresh Kumar Behera. All rights reserved</p>
            <div className="flex items-center gap-6">
              <a href="#">Privacy Policy</a>
              <a href="#">terms & conditions</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
