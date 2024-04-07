import emailjs from "emailjs-com";
import { useState } from "react";
import { FaInstagram, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdCall, MdEmail, MdLocationOn } from "react-icons/md";
import Footer from "../components/Footer";

export default function ContactUs() {
  const [inputValue, setInputValue] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    message: "",
    subject: "General Inquiry",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    try {
      emailjs
        .sendForm(
          "service_btuikdi",
          "template_78x6zxj",
          e.target,
          "vTR9Gpvhreea8FUAm"
        )
        .then(
          (result) => {
            setSuccessMessage("Message sent successfully!");
            setErrorMessage("");
            console.log(result.text);
            e.target.reset();
          },
          (error) => {
            setErrorMessage("Failed to send message. Please try again later.");
            setSuccessMessage("");
            console.log(error.text);
          }
        );
    } catch (error) {
      // Handle the error
      console.error("An error occurred:", error);
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleRadioChange = (e) => {
    setInputValue({
      ...inputValue,
      subject: e.target.value,
    });
  };

  return (
    <section>
      <div className="max-w-6xl mx-auto bg-white my-6 text-[#0e2f4f]">
        <div className="text-center px-6">
          <h2 className="text-3xl font-extrabold">Reach Us</h2>
          <p className="text-sm text-gray-500 mt-3">
            Want to comment, condemn or even share brilliant ideas with us?
          </p>
        </div>
        <div className="grid lg:grid-cols-3 items-center gap-4 p-2 rounded-lg mt-8 shadow-xl">
          <div className="bg-[#0e2f4f] rounded-lg p-6 max-lg:text-center">
            <h2 className="text-xl font-bold text-white">
              Contact Information
            </h2>
            <p className="text-sm text-gray-300 mt-3">
              Want to comment, condemn or even share brilliant ideas with us?
            </p>
            <ul className="mt-16 space-y-10">
              <li className="flex items-center max-lg:justify-center">
                <div className="flex items-center">
                  <MdEmail className="text-white  hover:text-neonorange text-lg" />
                  <a
                    href="mailto:contact@cityscapehomes.co.ke"
                    className="text-white text-sm ml-3"
                  >
                    <strong>contact@cityscapehomes.co.ke</strong>
                  </a>
                </div>
              </li>
              <li className="flex items-center max-lg:justify-center">
                <div className="flex items-center">
                  <MdCall className="text-white  hover:text-neonorange text-lg" />
                  <a
                    href="tel:+254 781 020 984"
                    className="text-white text-sm ml-3"
                  >
                    <strong>+254 781 020 984</strong>
                  </a>
                </div>
              </li>
              <li className="flex items-center max-lg:justify-center">
                <div className="flex items-center">
                  <MdLocationOn className="text-white hover:text-neonorange text-lg" />
                  <a
                    href="https://maps.app.goo.gl/N9ZSm1rJvu1fapwz7"
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
                    className="text-gray-400 hover:text-egyptianblue dark:hover:text-white ms-5"
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
            {successMessage && (
              <div className="text-green-600">{successMessage}</div>
            )}
            {errorMessage && <div className="text-red-600">{errorMessage}</div>}
            <form onSubmit={sendEmail}>
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="relative flex items-center">
                  <input
                    type="text"
                    name="firstName"
                    value={inputValue.firstName}
                    required
                    placeholder="First Name"
                    className="px-2 py-3 bg-white w-full text-sm border-b-2 focus:border-[#0e2f4f] outline-none"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="relative flex items-center">
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={inputValue.lastName}
                    placeholder="Last Name"
                    className="px-2 py-3 bg-white w-full text-sm border-b-2 focus:border-[#0e2f4f] outline-none"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="relative flex items-center">
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={inputValue.phoneNumber}
                    placeholder="Phone No."
                    className="px-2 py-3 bg-white w-full text-sm border-b-2 focus:border-[#0e2f4f] outline-none"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="relative flex items-center">
                  <input
                    type="email"
                    name="email"
                    value={inputValue.email}
                    required
                    placeholder="Email"
                    className="px-2 py-3 bg-white text-egyptianblue w-full text-sm border-b-2 focus:border-[#0e2f4f] outline-none"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="relative flex items-center sm:col-span-2">
                  <textarea
                    name="message"
                    value={inputValue.message}
                    placeholder="Write Message"
                    required
                    className="px-2 pt-3 bg-white text-egyptianblue w-full text-sm border-b-2 focus:border-[#0e2f4f] outline-none"
                    onChange={handleInputChange}
                  ></textarea>
                </div>
                <div className="col-span-full">
                  <h6 className="text-sm text-gray-400">Select Subject</h6>
                  <div className="flex max-lg:flex-col lg:space-x-6 max-lg:space-y-6">
                    <div className="flex items-center mt-3">
                      <input
                        id="radio1"
                        type="radio"
                        name="subject"
                        value="General Inquiry"
                        className="hidden peer"
                        checked={inputValue.subject === "General Inquiry"}
                        onChange={handleRadioChange}
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
                        name="subject"
                        value="Technical Support"
                        className="hidden peer"
                        checked={inputValue.subject === "Technical Support"}
                        onChange={handleRadioChange}
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
                        name="subject"
                        value="Website Feedback"
                        className="hidden peer"
                        checked={inputValue.subject === "Website Feedback"}
                        onChange={handleRadioChange}
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
                type="submit"
                className="mt-12 flex items-center justify-center text-sm lg:ml-auto max-lg:w-full rounded-lg px-4 py-2.5 font-semibold bg-[#0e2f4f] text-white hover:bg-[#0e2f4ff3]"
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
      <Footer />
    </section>
  );
}
