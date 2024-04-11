import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import OurTeam from "../components/OurTeam";
import { motion } from "framer-motion";
import "../coreValues.css";
import { FaBullseye, FaEye } from "react-icons/fa";

const About = () => {
  const [bgImages, setBgImages] = useState([
    "../images/about-intro.jpg",
    "../images/about-us.jpg",
    "../images/about.jpg",
  ]);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [bgImages]);
  return (
    <div>
      <div className="flex flex-col gap-8 my-10">
        {/* Intro section */}
        <div className="relative bg-center bg-cover h-[500px]">
          <motion.div
            key={bgImages[currentBgIndex]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${bgImages[currentBgIndex]})`,
              backgroundAttachment: "fixed",
              height: "100%",
              width: "100%",
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center p-10 sm:p-20">
                <motion.h2
                  className="text-4xl sm:text-5xl lg:text-6xl text-white font-bold mb-4"
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  About Us
                </motion.h2>
                <motion.p className="text-white text-sm sm:text-l lg:text-xl leading-relaxed sm:leading-normal mb-8">
                  <span className="hidden sm:inline">
                    Welcome to Cityscape Homes, where we redefine the concept of
                    urban living. As a premier real estate company, we
                    specialize in curating exceptional residential experiences
                    tailored to the diverse needs and desires of our clientele.
                    With an unwavering commitment to quality, innovation, and
                    customer satisfaction, we strive to create spaces that
                    inspire, elevate, and exceed expectations. Whether you're
                    seeking a luxurious penthouse in the heart of the city or a
                    tranquil suburban retreat, our dedicated team is here to
                    guide you every step of the way. Welcome to a world of
                    unparalleled sophistication and style with Cityscape Homes.
                  </span>
                  <span className="sm:hidden">
                    Welcome to Cityscape Homes, where we redefine the concept of
                    urban living. As a premier real estate company, we
                    specialize in curating exceptional residential experiences
                    tailored to the diverse needs and desires of our clientele.
                  </span>
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="flex flex-col gap-6 p-4 sm:p-8 my-8 max-w-6xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl sm:text-5xl text-egyptianblue font-semibold mb-6">
            What We Do
          </h2>
        </div>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="w-full md:w-1/2">
            <img
              src="../images/about.jpg"
              alt="what we do"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-gray-700 text-left mb-4">
              At Cityscape Homes, we specialize in crafting dreams into reality.
              With a passion for exceptional properties and a dedication to
              unparalleled service, we're here to guide you through every step
              of your real estate journey.
            </p>
            <p className="text-gray-700 text-left mb-4">
              Discover a world of possibilities as we showcase a curated
              selection of exquisite homes tailored to your lifestyle. Whether
              you're seeking a chic urban loft, a serene suburban retreat, or a
              luxurious waterfront estate, our diverse portfolio offers
              something for every discerning taste.
            </p>
            <p className="text-gray-700 text-left mb-4">
              Our team of seasoned professionals combines local expertise with
              global vision to provide you with personalized attention and
              expert guidance. From the initial consultation to the final
              closing, we're committed to delivering an experience that exceeds
              your expectations.
            </p>
            <p className="text-gray-700 text-left mb-4">
              Experience the difference with Cityscape Homes and unlock the door
              to your next chapter. Let's embark on this journey together and
              turn your dreams of home ownership into reality. Welcome home to
              Cityscape Homes – where your vision meets our expertise.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="w-full md:hidden">
            <img
              src="../images/about-us.jpg"
              alt="what we do"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-gray-700 text-left mb-4">
              We pride ourselves on offering premier rental properties tailored
              to meet the diverse needs of our clients. As a leading real estate
              company, we specialize in providing top-notch residential spaces
              that redefine urban living.
            </p>
            <p className="text-gray-700 text-left mb-4">
              Our commitment to excellence extends beyond just providing
              properties; it's about curating lifestyles. With a keen eye for
              detail and a deep understanding of the market, we meticulously
              select each property to ensure it meets our high standards of
              quality, comfort, and convenience.
            </p>
            <p className="text-gray-700 text-left mb-4">
              Whether you're seeking a chic downtown apartment, a cozy suburban
              townhouse, or a spacious family home, we have the perfect rental
              property to suit your lifestyle. Our dedicated team of real estate
              professionals works tirelessly to match you with the ideal home
              that aligns with your preferences and budget.
            </p>
            <p className="text-gray-700 text-left mb-4">
              Experience the difference with Cityscape Homes - where exceptional
              properties meet unparalleled service. Welcome home.
            </p>
          </div>
          <div className="w-full lg:w-1/2 hidden lg:block">
            <img
              src="../images/about-us.jpg"
              alt="what we do"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        <div className="border-t-2 border-gray-200 my-4"></div>
        <div className="text-center p-10 relative">
          <h2 className="text-3xl sm:text-5xl text-egyptianblue font-semibold mb-6">
            Our Core Values
          </h2>
          <div className="h-1 absolute inset-x-0 bottom-0">
            <div className="h-full w-full absolute top-0 left-0 animate-rays"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="rounded-lg shadow-md p-4">
            <div className="mb-4 flex justify-center text-center">
              <img src="../images/integrity.svg" alt="value" className="w-20" />
            </div>
            <h3 className="text-2xl text-center text-egyptianblue font-semibold mb-4">
              Integrity
            </h3>
            <p className="text-gray-700 text-center">
              Conducting business with honesty, transparency, and fairness in
              all dealings, ensuring trust and confidence among clients and
              partners.
            </p>
          </div>
          <div className="rounded-lg shadow-md p-4">
            <div className="mb-4 flex justify-center text-center">
              <img
                src="../images/excellence.svg"
                alt="value"
                className="w-20"
              />
            </div>
            <h3 className="text-2xl text-center text-egyptianblue font-semibold mb-4">
              Excellence
            </h3>
            <p className="text-gray-700 text-center">
              Striving for excellence in craftsmanship, design, and service
              delivery to create exceptional living spaces and experiences for
              homeowners.
            </p>
          </div>
          <div className="rounded-lg shadow-md p-4">
            <div className="mb-4 flex justify-center text-center">
              <img src="../images/customer.svg" alt="value" className="w-20" />
            </div>
            <h3 className="text-2xl text-center text-egyptianblue font-semibold mb-4">
              Customer Centricity
            </h3>
            <p className="text-gray-700 text-center">
              Putting clients' needs first, delivering exceptional service, and
              prioritizing customer satisfaction in every transaction.
            </p>
          </div>
          <div className="rounded-lg shadow-md p-4">
            <div className="mb-4 flex justify-center text-center">
              <img
                src="../images/innovation.svg"
                alt="value"
                className="w-20"
              />
            </div>
            <h3 className="text-2xl text-center text-egyptianblue font-semibold mb-4">
              Innovation
            </h3>
            <p className="text-gray-700 text-center">
              Embracing innovation and continuously seeking out new ideas,
              technologies, and approaches to enhance efficiency,
              sustainability, and customer satisfaction.
            </p>
          </div>
          <div className="rounded-lg shadow-md p-4">
            <div className="mb-4 flex justify-center text-center">
              <img
                src="../images/accountability.svg"
                alt="value"
                className="w-20"
              />
            </div>
            <h3 className="text-2xl text-center text-egyptianblue font-semibold mb-4">
              Accountability
            </h3>
            <p className="text-gray-700 text-center">
              Taking responsibility for our actions, decisions, and outcomes,
              and continuously striving for improvement and excellence.
            </p>
          </div>
          <div className="rounded-lg shadow-md p-4">
            <div className="mb-4 flex justify-center text-center">
              <img
                src="../images/sustainability.svg"
                alt="value"
                className="w-20"
              />
            </div>
            <h3 className="text-2xl text-center text-egyptianblue font-semibold mb-4">
              Environmental Responsibility
            </h3>
            <p className="text-gray-700 text-center">
              Promoting environmentally sustainable practices, minimizing our
              ecological footprint, and integrating green initiatives into our
              projects whenever possible.
            </p>
          </div>
        </div>
      </section>

      <div className="border-t-2 border-gray-200 my-8"></div>
      {/* Above small screen render */}
      <div className="hidden sm:block text-center p-10 relative">
        <div className="flex flex-col gap-8 my-10">
          <div
            className="relative bg-center bg-cover"
            style={{
              backgroundImage: "url('../images/scroll.jpg')",
              backgroundAttachment: "fixed",
              height: "500px",
            }}
          >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-center p-10">
                  <h2 className="text-2xl sm:text-3xl lg:text-5xl text-white font-bold mb-4">
                    Building Dreams, Creating Communities
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-8">
                    <div className="border border-white p-4 flex-1 shadow-lg">
                      <h3 className="text-xl sm:text-2xl lg:text-3xl text-white font-bold">
                        Mission Statement
                      </h3>
                      <p className="text-white">
                        Our mission is to sculpt dreams into reality, one
                        dwelling at a time. With an unwavering commitment to
                        quality craftsmanship and personalized service, we craft
                        homes that reflect the unique essence of each community
                        we serve. Elevating lifestyles, fostering communities,
                        and building legacies – that's the Cityscape promise.
                      </p>
                    </div>
                    <div className="border border-white p-4 flex-1 shadow-lg">
                      <h3 className="text-xl sm:text-2xl lg:text-3xl text-white font-bold">
                        Our Vision
                      </h3>
                      <p className="text-white">
                        We envision a future where every home embodies timeless
                        elegance and modern convenience. We strive to be
                        pioneers of innovation, setting new standards in
                        sustainable development and architectural excellence.
                        Our vision is to inspire homeownership aspirations and
                        redefine the essence of urban living.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Below small screen render */}
      <div className="sm:hidden text-center p-4 relative mb-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-center text-egyptianblue font-semibold mb-6">
            Building Dreams, Creating Communities
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="bg-white rounded-lg shadow-md p-4 flex items-center justify-center flex-col">
              <div className="bg-neonorange rounded-full p-3 mb-4">
                <FaBullseye size={32} color="#fff" />
              </div>
              <h3 className="text-lg text-egyptianblue font-semibold mb-2">
                Mission Statement
              </h3>
              <p className="text-gray-700 text-center">
                Our mission is to sculpt dreams into reality, one dwelling at a
                time. With an unwavering commitment to quality craftsmanship and
                personalized service, we craft homes that reflect the unique
                essence of each community we serve. Elevating lifestyles,
                fostering communities, and building legacies – that's the
                Cityscape promise.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 flex items-center justify-center flex-col">
              <div className="bg-neonorange rounded-full p-3 mb-4">
                <FaEye size={32} color="#fff" />
              </div>
              <h3 className="text-lg text-egyptianblue font-semibold mb-2">
                Our Vision
              </h3>
              <p className="text-gray-700 text-center">
                We envision a future where every home embodies timeless elegance
                and modern convenience. We strive to be pioneers of innovation,
                setting new standards in sustainable development and
                architectural excellence. Our vision is to inspire homeownership
                aspirations and redefine the essence of urban living.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-x-hidden">
        <h2 className="text-3xl text-egyptianblue font-semibold mb-2 text-center">
          Meet Our Team
        </h2>
        <div className="justify-center items-center">
          <OurTeam />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
