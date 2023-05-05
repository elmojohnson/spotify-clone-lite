import React, { FC } from "react";
import Navbar from "./Navbar";

type LayoutType = {
  children: any;
};

const Layout: FC<LayoutType> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
