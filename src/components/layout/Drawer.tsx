import React from "react";
import NavLinks from "./NavLinks";

const Drawer = () => {
  return (
    <div className="bg-white shadow md:hidden block p-4">
      <h1 className="text-primary font-bold text-2xl mb-4">Spotify</h1>
      <NavLinks />
    </div>
  );
};

export default Drawer;
