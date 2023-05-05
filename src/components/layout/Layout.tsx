import React, { FC } from "react";
import Navbar from "./Navbar";
import Drawer from "./Drawer";

type LayoutType = {
  children: any;
};

const Layout: FC<LayoutType> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Drawer />
      <main className="wrapper">{children}</main>
    </div>
  );
};

export default Layout;
