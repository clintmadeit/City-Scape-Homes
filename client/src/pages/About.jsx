import Footer from "../components/Footer";
import OurTeam from "../components/OurTeam";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      {/* Intro section */}
      <div
        className="relative bg-center bg-cover"
        style={{
          backgroundImage: "url('../images/about-intro.jpg')",
          backgroundAttachment: "fixed",
          height: "400px",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center p-10">
              <motion.h2
                className="text-4xl sm:text-5xl lg:text-6xl text-white font-bold mb-4"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                About Us
              </motion.h2>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 space-x-4 sm:smace-x-8"></div>
            </div>
          </div>
        </div>
      </div>

      <section className="flex flex-col gap-6 p-22 my-8 px-3 max-w-6xl mx-auto">
        {/* Hero section */}
        <div className="">
          <h2 className="text-4xl font-bold text-center text-egyptianblue mb-4">
            Cityscape Homes
          </h2>
          <div className="flex justify-center items-center">
            <div className="w-1/2">
              <img
                src="../images/about-us.jpg"
                alt="properties for sale"
                className="w-full h-auto max-h-[300px] object-cover"
              />
            </div>
            <div className="w-1/2 p-8 text-sm">
              <p className="text-gray-700 mb-2">
                At Cityscape Homes, we specialize in crafting dreams into
                reality. With a passion for exceptional properties and a
                dedication to unparalleled service, we're here to guide you
                through every step of your real estate journey.
              </p>
              <p className=" text-gray-700 mb-2">
                Discover a world of possibilities as we showcase a curated
                selection of exquisite homes tailored to your lifestyle. Whether
                you're seeking a chic urban loft, a serene suburban retreat, or
                a luxurious waterfront estate, our diverse portfolio offers
                something for every discerning taste.
              </p>
              <p className="text-gray-700 mb-2">
                Our team of seasoned professionals combines local expertise with
                global vision to provide you with personalized attention and
                expert guidance. From the initial consultation to the final
                closing, we're committed to delivering an experience that
                exceeds your expectations.
              </p>
              <p className=" text-gray-700 mb-2">
                Experience the difference with Cityscape Homes and unlock the
                door to your next chapter. Let's embark on this journey together
                and turn your dreams of home ownership into reality.
                <br /> Welcome home to Cityscape Homes – where your vision meets
                our expertise.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-1/2 text-sm">
              <p className=" text-gray-700 mb-2">
                We pride ourselves on offering premier rental properties
                tailored to meet the diverse needs of our clients. As a leading
                real estate company, we specialize in providing top-notch
                residential spaces that redefine urban living.
              </p>
              <p className=" text-gray-700 mb-2">
                Our commitment to excellence extends beyond just providing
                properties; it's about curating lifestyles. With a keen eye for
                detail and a deep understanding of the market, we meticulously
                select each property to ensure it meets our high standards of
                quality, comfort, and convenience.
              </p>
              <p className=" text-gray-700 mb-2">
                Whether you're seeking a chic downtown apartment, a cozy
                suburban townhouse, or a spacious family home, we have the
                perfect rental property to suit your lifestyle. Our dedicated
                team of real estate professionals works tirelessly to match you
                with the ideal home that aligns with your preferences and
                budget.
              </p>
              <p className="t text-gray-700 mb-4">
                At Cityscape Homes, we prioritize customer satisfaction above
                all else. We strive to foster long-lasting relationships built
                on trust, transparency, and integrity. From the moment you
                express interest in one of our properties to the day you move in
                and beyond, our team is here to support you every step of the
                way.
                <br /> Experience the difference with Cityscape Homes - where
                exceptional properties meet unparalleled service. Welcome home.
              </p>
            </div>
            <div className="w-1/2 p-8">
              <img
                src="../images/about.jpg"
                alt="properties for rent"
                className="w-full h-auto max-h-[300px] object-cover"
              />
            </div>
          </div>
        </div>
        <div className="border-t-2 border-gray-200 my-4"></div>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-egyptianblue font-semibold mb-6 text-center">
            Our Core Values
          </h2>

          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="rounded-lg shadow-md p-4">
                <div className="mb-4 flex justify-center text-center">
                  <img
                    src="../images/integrity.svg"
                    alt="value"
                    className="w-20"
                  />
                </div>
                <h3 className="text-2xl text-center text-egyptianblue font-semibold mb-4">
                  Integrity
                </h3>
                <p className="text-gray-700 text-center">
                  Conducting business with honesty, transparency, and fairness
                  in all dealings, ensuring trust and confidence among clients
                  and partners.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
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
                  delivery to create exceptional living spaces and experiences
                  for homeowners.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="rounded-lg shadow-md p-4">
                <div className="mb-4 flex justify-center text-center">
                  <img
                    src="../images/customer.svg"
                    alt="value"
                    className="w-20"
                  />
                </div>
                <h3 className="text-2xl text-center text-egyptianblue font-semibold mb-4">
                  Customer Centricity
                </h3>
                <p className="text-gray-700 text-center">
                  Putting clients' needs first, delivering exceptional service,
                  and prioritizing customer satisfaction in every transaction.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
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
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
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
                  Taking responsibility for our actions, decisions, and
                  outcomes, and continuously striving for improvement and
                  excellence.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
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
                  Promoting environmentally sustainable practices, minimizing
                  our ecological footprint, and integrating green initiatives
                  into our projects whenever possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="border-t-2 border-gray-200 my-8"></div>
      <div
        className="relative bg-center bg-cover"
        style={{
          backgroundImage: "url('../images/scroll.jpg')",
          backgroundAttachment: "fixed",
          height: "500px",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center p-10">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl text-white font-bold mb-4">
                Building Dreams, Creating Communities
              </h2>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 space-x-4 sm:smace-x-8">
                <div className="border border-white p-4 flex-1 shadow-lg">
                  <h3 className="text-2xl sm:text-3xl text-white font-bold">
                    Mission Statement
                  </h3>
                  <p className="text-white">
                    At Cityscape Homes, our mission is to sculpt dreams into
                    reality, one dwelling at a time. With an unwavering
                    commitment to quality craftsmanship and personalized
                    service, we craft homes that reflect the unique essence of
                    each community we serve. Elevating lifestyles, fostering
                    communities, and building legacies – that's the Cityscape
                    promise.
                  </p>
                </div>
                <div className="border border-white p-4 flex-1 shadow-lg">
                  <h3 className="text-2xl text-white font-bold">Our Vision</h3>
                  <p className="text-white">
                    At Cityscape Homes, we envision a future where every home
                    embodies timeless elegance and modern convenience. We strive
                    to be pioneers of innovation, setting new standards in
                    sustainable development and architectural excellence. Our
                    vision is to inspire homeownership aspirations and redefine
                    the essence of urban living.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-4 py-10">
        <OurTeam />
      </div>
      <Footer />
    </div>
  );
};

export default About;
