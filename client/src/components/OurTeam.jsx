import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const TeamMemberCard = ({ name, role, image, social }) => {
  TeamMemberCard.propTypes = {
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    social: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
      })
    ).isRequired,
  };
  return (
    <div className="flex flex-col items-center justify-center py-4 bg-gray-100 border border-bg shadow-md rounded-lg transition duration-500 transform hover:-translate-y-2">
      <img
        src={image}
        alt={name}
        className="rounded-full h-32 w-32 mb-4 border-2 border-neonorange border-primary-500 object-cover"
      />
      <h3 className="text-xl font-bold text-egyptianblue mb-2 text-primary-700">
        {name}
      </h3>
      <p className="text-egyptianblue font-semibold mb-2">{role}</p>
      <div className="flex mt-4 space-x-4">
        {social.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300 ease-in-out flex gap-2 items-center justify-center p-1 rounded-full bg-white hover:bg-egyptianblue"
          >
            {
              {
                "fa-linkedin": (
                  <FaLinkedinIn
                    size={20}
                    className="text-neonorange hover:text-white"
                  />
                ),
                "fa-twitter": (
                  <FaTwitter
                    size={20}
                    className="text-neonorange hover:text-white"
                  />
                ),
                "fa-facebook": (
                  <FaFacebookF
                    size={20}
                    className="text-neonorange hover:text-white"
                  />
                ),
              }[link.icon]
            }
          </a>
        ))}
      </div>
    </div>
  );
};

const OurTeam = () => {
  const teamMembers = [
    {
      name: "Johnclinton Luseno",
      role: "Founder & Director",
      image: "../images/founder1.jpeg",
      social: [
        {
          url: "https://www.linkedin.com/in/johnclinton-luseno",
          icon: "fa-linkedin",
        },
        { url: "https://twitter.com/clintmadeit", icon: "fa-twitter" },
        { url: "https://www.facebook.com/clint-dev", icon: "fa-facebook" },
      ],
    },
    {
      name: "Abraham Namiti",
      role: "Co-Founder & Director",

      image: "../images/founder2.jpg",
      social: [
        { url: "https://www.linkedin.com/", icon: "fa-linkedin" },
        { url: "https://twitter.com/", icon: "fa-twitter" },
        { url: "https://www.facebook.com/abraham.abou.5", icon: "fa-facebook" },
      ],
    },
    {
      name: "Rohi Wanjala",
      role: "Head of Media & Marketing",
      image: "../images/rohi.jpg",
      social: [
        { url: "https://www.linkedin.com/", icon: "fa-linkedin" },
        { url: "https://twitter.com/", icon: "fa-twitter" },
        { url: "https://www.facebook.com/roy.ronyx", icon: "fa-facebook" },
      ],
    },
    // Add more team members here
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-egyptianblue mb-6 text-center">
          Meet Our Team
        </h2>
        <Slider {...sliderSettings}>
          {teamMembers.map((member, index) => (
            <div key={index}>
              <TeamMemberCard {...member} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default OurTeam;
