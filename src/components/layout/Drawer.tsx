import React, { useContext } from "react";
import NavLinks from "./NavLinks";
import { MdClose } from "react-icons/md";
import NavbarContext from "../../contexts/NavbarContext";

const Drawer = () => {
  const ctx = useContext(NavbarContext);

  return (
    <div className="bg-white shadow md:hidden block fixed top-0 right-0 h-screen w-screen">
      <div className="wrapper">
        <div className="flex items-start justify-between py-3">
          <h1 className="text-primary font-bold text-2xl mb-2">Spotify</h1>
          <button className="text-lg" onClick={ctx?.handleOpen}>
            <MdClose />
          </button>
        </div>
        <NavLinks />
      </div>
    </div>
  );
};

export default Drawer;
