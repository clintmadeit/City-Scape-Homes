import { FaSearch } from "react-icons/fa";
import "../index.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  return (
    <header className="bg-slate-200 shadow-md p-3">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <Link to={"/"}>
          <img
            src="../images/city_scape_logo.png"
            alt="Logo"
            className="logo-img hover:filter hover:brightness-110 text-xs sm:text-base"
          />
        </Link>
        <form
          onSubmit={handleSubmit}
          className="bg-slate-100 p-3 rounded-lg flex items-center"
        >
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-48 md:w-96 lg:w-96 xl:w-96"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
            <FaSearch className="text-neonorange" />
          </button>
        </form>
        <ul className="flex gap-4 cursor-pointer font-semibold text-xs sm:text-base">
          <Link to={"/"}>
            <li className="hidden sm:inline nav-menu menu-underline">Home</li>
          </Link>
          <Link to={"/about"}>
            <li className="hidden sm:inline nav-menu menu-underline">About</li>
          </Link>
          <Link to={"/profile"}>
            {currentUser ? (
              <img
                className="rounded-full h-7 w-7 object-cover"
                src={currentUser.photo}
                alt="Profile"
              />
            ) : (
              <li className="nav-menu menu-underline">Sign In</li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}
