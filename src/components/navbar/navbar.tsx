import { NavLink } from "react-router-dom";
import { FaRegBell } from "react-icons/fa6";
import SearchBar from "../serachbar/SearchBar";
import { useState } from "react";

interface NavActive {
  isActive: boolean;
}

const navbarLinks = [
  {
    name: "Dashbaord",
    link: "/",
  },
  {
    name: "Settings",
    link: "settings",
  },
  {
    name: "All Logs",
    link: "logs",
  },
  {
    name: "All Hotels",
    link: "hotels",
  },
  {
    name: "Log Out",
    link: "logout",
  },
];

const pageActiveHandler = ({ isActive }: NavActive) =>
  isActive
    ? "bg-[#323a4a] text-white px-4 py-3 rounded-3xl text-[14px]"
    : " px-4 py-3 text-textDark text-[14px]";

const Navbar = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  return (
    <nav className="bg-primary">
      <div className="flex justify-between items-center py-6 mx-auto max-w-[1440px]">
        <NavLink to="/" className="text-[24px] font-semibold text-white">
          Crimatrix
        </NavLink>

        {/* Navbar Items */}
        <ul className="flex gap-5">
          {navbarLinks.map((item) => {
            return (
              <li className="text-[16px]" key={item.name}>
                <NavLink className={pageActiveHandler} to={item.link}>
                  {item.name}
                </NavLink>
              </li>
            );
          })}
        </ul>

        {/* Search Bar Container */}
        <article className="flex gap-4 items-center">
          <SearchBar value={searchValue} onChange={handleSearchChange} />
          <div className="p-2 bg-[#2c3444] rounded-3xl cursor-pointer">
            <FaRegBell className="text-white" size={22} />
          </div>
          <div className="p-2 bg-[#2c3444] w-[44px] rounded-full cursor-pointer">
            <img
              className=" rounded-3xl"
              src="/public/Images/user.jpg"
              alt=""
            />
          </div>
        </article>
      </div>
    </nav>
  );
};

export default Navbar;
