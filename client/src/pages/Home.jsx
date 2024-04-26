import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import SwiperCore from "swiper/core";
import ListingCard from "../components/ListingCard";
import Footer from "../components/Footer";
import { FadeLoader } from "react-spinners";

SwiperCore.use([Navigation, Autoplay, EffectFade]);

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  const [hotelListings, setHotelListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch("/api/listing/get?offer=true&limit=4");
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.error(error);
      }
    };

    const fetchRentListings = async () => {
      try {
        const res = await fetch("/api/listing/get?type=rent&limit=4");
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.error(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch("/api/listing/get?type=sale&limit=4");
        const data = await res.json();
        setSaleListings(data);
        fetchHotelListings();
      } catch (error) {
        console.error(error);
      }
    };
    const fetchHotelListings = async () => {
      try {
        const res = await fetch("/api/listing/get?type=hotel&limit=4");
        const data = await res.json();
        setHotelListings(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchOfferListings();
  }, []);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <FadeLoader color="#f49d19" loading={loading} size={10} />
      </div>
    );
  }

  return (
    <div>
      {/* top */}
      <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto">
        <h1 className="text-egyptianblue text-3xl lg:text-6xl font-bold">
          Find your next <span className="text-neonorange">Perfect Dream</span>{" "}
          <br />
          home with ease
        </h1>
        <div className="text-gray-400 text-xs sm:text-sm">
          Experience the epitome of urban living with City Scape Homes. <br />{" "}
          Let us help you find your perfect sanctuary amidst the dynamic energy
          of the cityscape
        </div>
        <Link
          className="text-xs sm:text-sm text-egyptianblue hover:text-neonorange font-bold"
          to={"/search"}
        >
          Let's get started...
        </Link>
      </div>

      {/* slider */}

      <Swiper
        navigation
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        effect="fade" // Set fade effect
        fadeEffect={{ crossFade: true }}
      >
        {offerListings &&
          offerListings.length > 0 &&
          offerListings.map((listing) => (
            <SwiperSlide key={listing._id}>
              <div
                style={{
                  background: `url(${listing.imageUrls[0]}) center no-repeat`,
                  backgroundSize: "cover",
                }}
                className="h-[500px]"
              ></div>
            </SwiperSlide>
          ))}
      </Swiper>

      {/* listing results for offer, sale and rent */}

      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10">
        {offerListings && offerListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-2xl font-bold text-egyptianblue">
                Recent Properties on Offer
              </h2>
              <Link
                className="text-egyptianblue text-sm hover:text-neonorange"
                to={"/search?offer=true"}
              >
                Show more properties on offers
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {offerListings.map((listing) => (
                <ListingCard key={listing._id} listing={listing} />
              ))}
            </div>
          </div>
        )}
        {rentListings && rentListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-2xl font-bold text-egyptianblue">
                Recent properties for rent
              </h2>
              <Link
                className="text-egyptianblue text-sm hover:text-neonorange"
                to={"/search?type=rent"}
              >
                Show more properties for rent
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {rentListings.map((listing) => (
                <ListingCard key={listing._id} listing={listing} />
              ))}
            </div>
          </div>
        )}
        {saleListings && saleListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-2xl font-bold text-egyptianblue">
                Recent properties for sale
              </h2>
              <Link
                className="text-egyptianblue text-sm hover:text-neonorange"
                to={"/search?type=sale"}
              >
                Show more properties for sale
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {saleListings.map((listing) => (
                <ListingCard key={listing._id} listing={listing} />
              ))}
            </div>
          </div>
        )}
        {hotelListings && hotelListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-2xl font-bold text-egyptianblue">
                Recent hotel listings
              </h2>
              <Link
                className="text-egyptianblue text-sm hover:text-neonorange"
                to={"/search?type=sale"}
              >
                Show more hotels
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {hotelListings.map((listing) => (
                <ListingCard key={listing._id} listing={listing} />
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
