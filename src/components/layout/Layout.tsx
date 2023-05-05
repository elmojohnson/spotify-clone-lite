import { FC, useContext } from "react";
import NavbarContext from "../../contexts/NavbarContext";

import Navbar from "./Navbar";
import Drawer from "./Drawer";

type LayoutType = {
  children: any;
};

const Layout: FC<LayoutType> = ({ children }) => {
  const ctx = useContext(NavbarContext);

  return (
    <div>
      <Navbar />
      {ctx?.isOpen && <Drawer />}
      <main className="wrapper">{children}</main>
    </div>
  );
};

export default Layout;
