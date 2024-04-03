import React from "react";
import Footer from "../components/Footer";

const TermsOfUse = () => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-6xl mx-auto bg-white my-6 text-[#0e2f4f] p-10">
        <h1 className="text-3xl font-bold mb-4 text-center">
          Terms and conditions of using this website
        </h1>
        <h2 className="text-lg font-bold mb-4">
          Effective Date: 5th, April, 2024
        </h2>

        <p className="mb-4">
          Welcome to Cityscape Homes! These Terms of Use ("Terms") govern your
          access to and use of the Cityscape Homes website and services. By
          accessing or using our website or services, you agree to comply with
          these Terms. If you do not agree with any aspect of these Terms,
          please do not use our website or services.
        </p>

        <h2 className="text-2xl font-bold mb-2">Scope of services</h2>

        <p className="mb-4">
          Cityscape Homes provides a platform for real estate listings, property
          information, and related services. Our website may include features
          such as property search, listings, virtual tours, and communication
          tools to connect buyers, sellers, landlords, and tenants.
        </p>

        <h2 className="text-2xl font-bold mb-2">User Accounts</h2>

        <p className="mb-4">
          Some features of our website may require you to create a user account.
          When creating an account, you agree to provide accurate and complete
          information and to keep your login credentials secure. You are
          responsible for all activities that occur under your account.
        </p>

        <h2 className="text-2xl font-bold mb-2">User Conduct</h2>

        <p className="mb-4">
          You agree to use our website and services in compliance with
          applicable laws, regulations, and these Terms. You further agree not
          to:
        </p>

        <ul className="list-disc list-inside mb-4">
          <li>
            Use our website or services for any unlawful or fraudulent purpose
          </li>
          <li>
            Upload, post, transmit, or distribute any content that is unlawful,
            defamatory, obscene, or harmful
          </li>
          <li>
            Engage in any activity that disrupts or interferes with the
            operation of our website or services
          </li>
          <li>
            Attempt to gain unauthorized access to any portion of our website or
            services
          </li>
        </ul>

        <h2 className="text-2xl font-bold mb-2">Intellectual Property</h2>

        <p className="mb-4">
          All content, trademarks, logos, and other intellectual property on our
          website are owned or licensed by Cityscape Homes. You may not use,
          reproduce, distribute, or modify any content from our website without
          prior written consent.
        </p>

        <h2 className="text-2xl font-bold mb-2">Third party links</h2>

        <p className="mb-4">
          Our website may contain links to third-party websites or services that
          are not owned or controlled by Cityscape Homes. We are not responsible
          for the content or privacy practices of these third-party sites. Your
          use of third-party websites is at your own risk.
        </p>
        <h2 className="text-2xl font-bold mb-2">Disclaimer of Warranties</h2>

        <p className="mb-4">
          Our website and services are provided on an "as is" and "as available"
          basis, without any warranties of any kind, either express or implied.
          We do not guarantee the accuracy, completeness, or reliability of any
          information on our website.
        </p>
        <h2 className="text-2xl font-bold mb-2">Limitation of Liability</h2>

        <p className="mb-4">
          To the fullest extent permitted by law, Cityscape Homes shall not be
          liable for any direct, indirect, incidental, special, or consequential
          damages arising out of or in any way related to your use of our
          website or services.
        </p>

        <h2 className="text-2xl font-bold mb-2">Indemnification</h2>

        <p className="mb-4">
          You agree to indemnify and hold harmless Cityscape Homes, its
          affiliates, officers, directors, employees, and agents from any
          claims, liabilities, damages, losses, or expenses arising out of your
          use of our website or services or violation of these Terms.
        </p>

        <h2 className="text-2xl font-bold mb-2">Modification of Terms</h2>

        <p className="mb-4">
          Cityscape Homes reserves the right to modify or update these Terms at
          any time without prior notice. Any changes will be effective
          immediately upon posting to our website. It is your responsibility to
          review these Terms periodically for any updates.
        </p>

        <h2 className="text-2xl font-bold mb-2">Governing Law</h2>

        <p className="mb-4">
          These Terms shall be governed by and construed in accordance with the
          laws of Kenya, without regard to its conflict of law principles.
        </p>
        <h2 className="text-2xl font-bold mb-2">Contact Us</h2>

        <p className="mb-4">
          If you have any questions or concerns about this Privacy Policy or our
          data practices, please contact us at:
        </p>

        <address className="mb-4">
          Cityscape Homes <br />
          Westend Towers, Waiyaki Way, Nairobi <br />
          00200 <br />
          Email Address: contact@cityscape.co.ke <br />
          Phone Number: +254 781 020 984
        </address>
        <p>
          By using our website or services, you agree to the terms of these
          Terms of Use. If you do not agree with any aspect of these Terms,
          please do not use our website or services.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfUse;
