import { useContext } from "react";
import NavbarContext from "../../contexts/NavbarContext";

import NavLinks from "./NavLinks";
import { MdMenu } from "react-icons/md";

const Navbar = () => {
  const ctx = useContext(NavbarContext);

  return (
    <div className="py-3 bg-primary text-white shadow sticky top-0 z-50">
      <div className="flex items-center justify-between wrapper">
        <h1 className="font-bold text-2xl">Spotify</h1>
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
