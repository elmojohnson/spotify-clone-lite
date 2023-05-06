import { useContext } from "react";
import NavbarContext from "../../contexts/NavbarContext";
import { Link } from "react-router-dom";

import NavLinks from "./NavLinks";
import { MdMenu } from "react-icons/md";
import { SiSpotify } from "react-icons/si";

const Navbar = () => {
  const ctx = useContext(NavbarContext);

  return (
    <div className="py-3 bg-base-300 text-white shadow sticky top-0 z-50">
      <div className="flex items-center justify-between wrapper">
        <Link to="/" className="flex space-x-2 items-center">
          <SiSpotify className="text-4xl text-primary" />
          <h1 className="font-bold text-2xl">Spotify Clone</h1>
        </Link>
        <div className="md:block hidden">
          <NavLinks />
        </div>
        <button
          className="text-2xl md:hidden block hover:brightness-90"
          onClick={ctx?.handleOpen}
        >
          <MdMenu />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
