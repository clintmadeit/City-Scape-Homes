// Footer.jsx
import { FaTiktok, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdLocationOn, MdContactMail } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-egyptianblue">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to={"/"} className="flex items-center">
              <img
                src="../images/city_scape_logo2.png"
                className="h-8 me-3 hover: filter hover:brightness-110 w-auto"
                alt="City Scape Homes"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Cityscape
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Navigate
              </h2>
              <ul className="text-gray-400 dark:text-gray-300 font-medium">
                <li className="mb-4">
                  <Link
                    to={"/about"}
                    className="hover:text-neonorange hover:underline"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/search"}
                    className="hover:text-neonorange hover:underline"
                  >
                    Listings
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-egyptianblue uppercase dark:text-white">
                Reach out
              </h2>
              <ul className="text-gray-400 dark:text-gray-300 font-medium">
                <li className="mb-4">
                  <a
                    href="https://maps.app.goo.gl/N9ZSm1rJvu1fapwz7"
                    target="_blank"
                    className="hover:text-neonorange"
                  >
                    <div className="flex items-center gap-1">
                      <MdLocationOn className="text-lg" />
                      <p className="text-gray-400 dark:text-gray-300 font-medium">
                        Westend Towers, Waiyaki Way, Nairobi
                      </p>
                    </div>
                  </a>
                </li>
                <li>
                  <Link to={"/contact-us"} className="hover:text-neonorange">
                    <div className="flex items-center gap-1">
                      <MdContactMail className="text-lg" />
                      <p className="text-gray-400 dark:text-gray-300 font-medium">
                        Contact Us
                      </p>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-egyptianblue uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-400 dark:text-gray-300 font-medium">
                <li className="mb-4">
                  <Link
                    to={"/privacy-policy"}
                    className="hover:text-neonorange hover:underline"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/terms-of-use"}
                    className="hover:text-neonorange hover:underline"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-400 sm:text-center dark:text-gray-300">
            © {new Date().getFullYear()}{" "}
            <Link to={"/"} className="hover:text-neonorange">
              Cityscape Homes
            </Link>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a
              href="https://www.tiktok.com/@cityscape254?lang=en"
              target="_blank"
              className="text-gray-400 hover:text-egyptianblue dark:hover:text-white ms-5"
            >
              <FaTiktok className="w-4 h-4" />
              <span className="sr-only">TikTok</span>
            </a>
            <a
              href="https://twitter.com/cityscape254"
              target="_blank"
              className="text-gray-400 hover:text-egyptianblue dark:hover:text-white ms-5"
            >
              <FaTwitter className="w-4 h-4" />
              <span className="sr-only">Twitter</span>
            </a>
            <a
              href="https://instagram.com/cityscape254/"
              target="_blank"
              className="text-gray-400 hover:text-egyptianblue dark:hover:text-white ms-5"
            >
              <FaInstagram className="w-4 h-4" />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="https://www.youtube.com/channel/UCHfVyrNFWyMzpYf-f8Cv5aQ"
              target="_blank"
              className="text-gray-400 hover:text-egyptianblue dark:hover:text-white ms-5"
            >
              <FaYoutube className="w-4 h-4" />
              <span className="sr-only">YouTube</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
