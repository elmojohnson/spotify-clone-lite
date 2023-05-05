import React from "react";
import NavLinks from "./NavLinks";
import { MdMenu } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="py-3 bg-primary text-white shadow">
      <div className="flex items-center justify-between wrapper">
        <h1 className="font-bold text-2xl">Spotify</h1>
        <div className="md:block hidden">
          <NavLinks />
        </div>
        <button className="text-2xl md:hidden block hover:brightness-90">
          <MdMenu />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
