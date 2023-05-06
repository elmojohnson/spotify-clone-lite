import React from "react";
import { Outlet } from "react-router-dom";

const AlbumParentLayout = () => {
  return (
    <div>
      <h1>Album</h1>
      <Outlet />
    </div>
  );
};

export default AlbumParentLayout;
