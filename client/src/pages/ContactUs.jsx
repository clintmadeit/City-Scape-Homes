import React from "react";
import { FaInstagram, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdCall, MdEmail, MdLocationOn } from "react-icons/md";

export default function ContactUs() {
  return (
    <div className="max-w-6xl mx-auto bg-white my-6 font-[sans-serif] text-[#0e2f4f]">
      <div className="text-center px-6">
        <h2 className="text-3xl font-extrabold">Reach Us</h2>
        <p className="text-sm text-gray-500 mt-3">
          Want to comment, condemn or even share brilliant ideas with us?
        </p>
      </div>
      <div className="grid lg:grid-cols-3 items-center gap-4 p-2 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-lg mt-8">
        <div className="bg-[#0e2f4f] rounded-lg p-6 max-lg:text-center">
          <h2 className="text-xl font-bold text-white">Contact Information</h2>
          <p className="text-sm text-gray-300 mt-3">
            Want to comment, condemn or even share brilliant ideas with us?
          </p>
          <ul className="mt-16 space-y-10">
            <li className="flex items-center max-lg:justify-center">
              <div className="flex items-center">
                <MdEmail className="text-white text-lg" />
                <a
                  href="javascript:void(0)"
                  className="text-white text-sm ml-3"
                >
                  <strong>contact@cityscapehomes.co.ke</strong>
                </a>
              </div>
            </li>
            <li className="flex items-center max-lg:justify-center">
              <div className="flex items-center">
                <MdCall className="text-white text-lg" />
                <a
                  href="javascript:void(0)"
                  className="text-white text-sm ml-3"
                >
                  <strong>+254 781 020 984</strong>
                </a>
              </div>
            </li>
            <li className="flex items-center max-lg:justify-center">
              <div className="flex items-center">
                <MdLocationOn className="text-white text-lg" />
                <a
                  href="javascript:void(0)"
                  className="text-white text-sm ml-3"
                >
                  <strong>Westend Towers, Waiyaki way, Nairobi, Kenya</strong>
                </a>
              </div>
            </li>
          </ul>
          <div className="item">
            <h2 className="text-xl font-bold text-white mt-8">Follow Us</h2>
            <ul className="flex justify-center mt-4 space-x-8">
              <div className="flex mt-4 justify-center sm:mt-0">
                <a
                  href="https://www.tiktok.com/@cityscape254?lang=en"
                  target="_blank"
                  className="text-gray-400 hover:text-egyptianblue dark:hover:text-white"
                >
                  <FaTiktok className="w-6 h-6 mx-auto" />
                  <span className="sr-only">TikTok</span>
                </a>
                <a
                  href="https://twitter.com/cityscape254"
                  target="_blank"
                  className="text-gray-400 hover:text-egyptianblue dark:hover:text-white ms-5"
                >
                  <FaTwitter className="w-6 h-6 mx-auto" />
                  <span className="sr-only">Twitter</span>
                </a>
                <a
                  href="https://instagram.com/cityscape254/"
                  target="_blank"
                  className="text-gray-400 hover:text-egyptianblue dark:hover:text-white ms-5"
                >
                  <FaInstagram className="w-6 h-6 mx-auto" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a
                  href="https://www.youtube.com/channel/UCHfVyrNFWyMzpYf-f8Cv5aQ"
                  target="_blank"
                  className="text-gray-400 hover:text-egyptianblue dark:hover:text-white ms-5"
                >
                  <FaYoutube className="w-6 h-6 mx-auto" />
                  <span className="sr-only">YouTube</span>
                </a>
              </div>
            </ul>
          </div>
        </div>
        <div className="p-6 rounded-xl lg:col-span-2">
          <form>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="relative flex items-center">
                <input
                  type="text"
                  placeholder="First Name"
                  className="px-2 py-3 bg-white w-full text-sm border-b-2 focus:border-[#0e2f4f] outline-none"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#bbb"
                  stroke="#bbb"
                  className="w-[18px] h-[18px] absolute right-2"
                  viewBox="0 0 24 24"
                >
                  <circle cx="10" cy="7" r="6" data-original="#0e2f4f"></circle>
                  <path
                    d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                    data-original="#0e2f4f"
                  ></path>
                </svg>
              </div>
              <div className="relative flex items-center">
                <input
                  type="text"
                  placeholder="Last Name"
                  className="px-2 py-3 bg-white w-full text-sm border-b-2 focus:border-[#0e2f4f] outline-none"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#bbb"
                  stroke="#bbb"
                  className="w-[18px] h-[18px] absolute right-2"
                  viewBox="0 0 24 24"
                >
                  <circle cx="10" cy="7" r="6" data-original="#0e2f4f"></circle>
                  <path
                    d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                    data-original="#0e2f4f"
                  ></path>
                </svg>
              </div>
              <div className="relative flex items-center">
                <input
                  type="number"
                  placeholder="Phone No."
                  className="px-2 py-3 bg-white text-egyptianblue w-full text-sm border-b-2 focus:border-[#0e2f4f] outline-none"
                />
                <svg
                  fill="#bbb"
                  className="w-[18px] h-[18px] absolute right-2"
                  viewBox="0 0 64 64"
                >
                  <path
                    d="m52.148 42.678-6.479-4.527a5 5 0 0 0-6.963 1.238l-1.504 2.156c-2.52-1.69-5.333-4.05-8.014-6.732-2.68-2.68-5.04-5.493-6.73-8.013l2.154-1.504a4.96 4.96 0 0 0 2.064-3.225 4.98 4.98 0 0 0-.826-3.739l-4.525-6.478C20.378 10.5 18.85 9.69 17.24 9.69a4.69 4.69 0 0 0-1.628.291 8.97 8.97 0 0 0-1.685.828l-.895.63a6.782 6.782 0 0 0-.63.563c-1.092 1.09-1.866 2.472-2.303 4.104-1.865 6.99 2.754 17.561 11.495 26.301 7.34 7.34 16.157 11.9 23.011 11.9 1.175 0 2.281-.136 3.29-.406 1.633-.436 3.014-1.21 4.105-2.302.199-.199.388-.407.591-.67l.63-.899a9.007 9.007 0 0 0 .798-1.64c.763-2.06-.007-4.41-1.871-5.713z"
                    data-original="#0e2f4f"
                  ></path>
                </svg>
              </div>
              <div className="relative flex items-center">
                <input
                  type="email"
                  placeholder="Email"
                  className="px-2 py-3 bg-white text-egyptianblue w-full text-sm border-b-2 focus:border-[#0e2f4f] outline-none"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#bbb"
                  stroke="#bbb"
                  className="w-[18px] h-[18px] absolute right-2"
                  viewBox="0 0 682.667 682.667"
                >
                  <defs>
                    <clipPath id="a" clipPathUnits="userSpaceOnUse">
                      <path d="M0 512h512V0H0Z" data-original="#0e2f4f"></path>
                    </clipPath>
                  </defs>
                  <g
                    clipPath="url(#a)"
                    transform="matrix(1.33 0 0 -1.33 0 682.667)"
                  >
                    <path
                      fill="none"
                      strokeMiterlimit="10"
                      strokeWidth="40"
                      d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                      data-original="#0e2f4f"
                    ></path>
                    <path
                      d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                      data-original="#0e2f4f"
                    ></path>
                  </g>
                </svg>
              </div>
              <div className="relative flex items-center sm:col-span-2">
                <textarea
                  placeholder="Write Message"
                  className="px-2 pt-3 bg-white text-egyptianblue w-full text-sm border-b-2 focus:border-[#0e2f4f] outline-none"
                ></textarea>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#bbb"
                  stroke="#bbb"
                  className="w-[18px] h-[18px] absolute right-2"
                  viewBox="0 0 682.667 682.667"
                >
                  <defs>
                    <clipPath id="a" clipPathUnits="userSpaceOnUse">
                      <path d="M0 512h512V0H0Z" data-original="#0e2f4f"></path>
                    </clipPath>
                  </defs>
                  <g
                    clipPath="url(#a)"
                    transform="matrix(1.33 0 0 -1.33 0 682.667)"
                  >
                    <path
                      fill="none"
                      strokeMiterlimit="10"
                      strokeWidth="40"
                      d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                      data-original="#0e2f4f"
                    ></path>
                    <path
                      d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                      data-original="#0e2f4f"
                    ></path>
                  </g>
                </svg>
              </div>
              <div className="col-span-full">
                <h6 className="text-sm text-gray-400">Select Subject</h6>
                <div className="flex max-lg:flex-col lg:space-x-6 max-lg:space-y-6">
                  <div className="flex items-center mt-3">
                    <input
                      id="radio1"
                      type="radio"
                      name="value1"
                      className="hidden peer"
                      checked
                    />
                    <label
                      htmlFor="radio1"
                      className="relative p-0.5 flex items-center justify-center shrink-0 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer border-2 border-[#0e2f4f] rounded-full overflow-hidden"
                    >
                      <span className="border-[4px] border-[#0e2f4f] rounded-full w-full h-full"></span>
                    </label>
                    <p className="text-sm ml-3">General Inquiry</p>
                  </div>
                  <div className="flex items-center mt-3">
                    <input
                      id="radio2"
                      type="radio"
                      name="value1"
                      className="hidden peer"
                    />
                    <label
                      htmlFor="radio2"
                      className="relative p-0.5 flex items-center justify-center shrink-0 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer border-2 border-[#0e2f4f] rounded-full overflow-hidden"
                    >
                      <span className="border-[4px] border-[#0e2f4f] rounded-full w-full h-full"></span>
                    </label>
                    <p className="text-sm ml-3">Technical Support</p>
                  </div>
                  <div className="flex items-center mt-3">
                    <input
                      id="radio3"
                      type="radio"
                      name="value1"
                      className="hidden peer"
                    />
                    <label
                      htmlFor="radio3"
                      className="relative p-0.5 flex items-center justify-center shrink-0 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer border-2 border-[#0e2f4f] rounded-full overflow-hidden"
                    >
                      <span className="border-[4px] border-[#0e2f4f] rounded-full w-full h-full"></span>
                    </label>
                    <p className="text-sm ml-3">Website Feedback</p>
                  </div>
                </div>
              </div>
            </div>
            <button
              type="button"
              className="mt-12 flex items-center justify-center text-sm lg:ml-auto max-lg:w-full rounded px-4 py-2.5 font-semibold bg-[#0e2f4f] text-white hover:bg-[#0e2f4ff3]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                fill="#fff"
                className="mr-2"
                viewBox="0 0 548.244 548.244"
              >
                <path
                  fillRule="evenodd"
                  d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                  clipRule="evenodd"
                  data-original="#0e2f4f"
                />
              </svg>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
