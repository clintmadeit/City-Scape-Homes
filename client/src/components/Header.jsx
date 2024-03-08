import { FaSearch } from "react-icons/fa";
import "../index.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-2">
        <Link to={"/"}>
          <img src="../images/logo.png" alt="Logo" className="logo-img" />
        </Link>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-48 md:w-96 lg:w-96 xl:w-96"
          />
          <FaSearch className="text-neonorange" />
        </form>
        <ul className="flex gap-4 cursor-pointer">
          <Link to={"/"}>
            <li className="hidden sm:inline nav-menu menu-underline">Home</li>
          </Link>
          <Link to={"/about"}>
            <li className="hidden sm:inline nav-menu menu-underline">About</li>
          </Link>
          <Link to={"/sign-in"}>
            <li className="nav-menu menu-underline">Sign In</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
