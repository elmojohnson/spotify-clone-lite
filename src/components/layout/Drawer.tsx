import { useContext } from "react";
import NavbarContext from "../../contexts/NavbarContext";

import NavLinks from "./NavLinks";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";

const Drawer = () => {
  const ctx = useContext(NavbarContext);

  return (
    <motion.div
      initial={{ x: 1000 }}
      animate={{ x: 0 }}
      exit={{ x: 1000 }}
      transition={{ delay: 0.2, type: "keyframes" }}
      className="bg-white shadow md:hidden block fixed top-0 right-0 h-screen w-screen z-50 px-8 py-4"
    >
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-primary font-bold text-2xl">Spotify</h1>
        <button className="text-xl" onClick={ctx?.handleOpen}>
          <MdClose />
        </button>
      </div>
      <NavLinks />
    </motion.div>
  );
};

export default Drawer;
