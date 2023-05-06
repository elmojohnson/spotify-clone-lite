import { useContext } from "react";
import NavbarContext from "../../contexts/NavbarContext";
import { Link } from "react-router-dom";

import NavLinks from "./NavLinks";
import { MdClose } from "react-icons/md";
import { SiSpotify } from "react-icons/si";
import { motion } from "framer-motion";

const Drawer = () => {
  const ctx = useContext(NavbarContext);

  return (
    <motion.div
      initial={{ x: 1000 }}
      animate={{ x: 0 }}
      exit={{ x: 1000 }}
      transition={{ delay: 0.2, type: "keyframes" }}
      className="bg-base-300 text-white shadow md:hidden block fixed top-0 right-0 h-screen w-screen z-50 px-8 py-4"
    >
      <div className="flex items-center justify-between mb-4">
        <Link to="/" className="flex space-x-2 items-center">
          <SiSpotify className="text-4xl text-primary" />
          <h1 className="font-bold text-2xl">Spotify Clone</h1>
        </Link>
        <button className="text-xl" onClick={ctx?.handleOpen}>
          <MdClose />
        </button>
      </div>
      <NavLinks />
    </motion.div>
  );
};

export default Drawer;
