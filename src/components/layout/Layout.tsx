import { FC, useContext } from "react";
import NavbarContext from "../../contexts/NavbarContext";

import Navbar from "./Navbar";
import Drawer from "./Drawer";

import { AnimatePresence } from "framer-motion";

type LayoutType = {
  children: any;
};

const Layout: FC<LayoutType> = ({ children }) => {
  const ctx = useContext(NavbarContext);

  return (
    <div>
      <Navbar />
      <AnimatePresence>{ctx?.isOpen && <Drawer />}</AnimatePresence>
      <main className="wrapper">{children}</main>
    </div>
  );
};

export default Layout;
