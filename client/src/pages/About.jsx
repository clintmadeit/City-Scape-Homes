import React from "react";
import Footer from "../components/Footer";

const About = () => {
  return (
    <section className="">
      <section className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="relative h-screen">
          <img
            src="../images/about-us.jpg"
            alt="About Us"
            className="absolute h-full w-full object-cover"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="text-5xl font-bold text-white mb-4">About Us</h1>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4 items-center my-8">
          <div>
            <h1 className="text-3xl font-bold mb-4">About Cityscape Homes</h1>
            <p>{/* Your introduction here */}</p>
            <div className="mt-8">
              <p>
                Cityscape Homes is a premier real estate company committed to
                redefining the real estate experience for our clients. With a
                steadfast dedication to integrity, innovation, and excellence,
                we empower individuals and families to make informed decisions
                about their real estate investments. Our experienced team of
                professionals combines extensive market knowledge with
                personalized service, ensuring that each client receives
                tailored solutions to meet their unique needs. Whether you're
                searching for your dream home, looking to sell your property, or
                seeking investment opportunities, Cityscape Homes is your
                trusted partner every step of the way. Driven by a passion for
                exceeding expectations, we strive to create seamless and
                rewarding experiences for our clients, fostering long-lasting
                relationships built on trust and reliability. At Cityscape
                Homes, we're not just in the business of real estate; we're in
                the business of fulfilling dreams and shaping futures. Welcome
                to a new era of real estate excellence with Cityscape Homes.
              </p>
            </div>
          </div>
          <img
            src="../images/about-us.jpg"
            alt="About Us Image"
            className="object-cover rounded-lg shadow-lg w-full h-64 sm:h-96 md:h-full md:w-full lg:w-full lg:h-full"
          />
        </div>

        {/* Our Story Section */}
        <div className="my-8">
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p>{/* Your story here */}</p>
        </div>

        {/* Our Team Section */}
        <div className="my-8">
          <h2 className="text-3xl font-bold mb-4">Our Team</h2>
          <p>{/* Information about your team here */}</p>
        </div>

        {/* Our Values Section */}
        <div className="my-8">
          <h2 className="text-3xl font-bold mb-4">Our Values</h2>
          <p>{/* Your values here */}</p>
        </div>
      </section>
      <Footer />
    </section>
  );
};

export default About;
