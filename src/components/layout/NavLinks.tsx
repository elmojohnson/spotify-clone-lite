import React from "react";
import { Link } from "react-router-dom";

const NavLinks = () => {
  const links = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/albums",
      label: "Albums",
    },
    {
      href: "/artists",
      label: "Artists",
    },
    {
      href: "/playlists",
      label: "Playlists",
    },
    {
      href: "/account/me",
      label: "Account",
    },
  ];

  return (
    <nav className="flex md:flex-row flex-col md:items-center items-start md:space-x-4 space-x-0 md:space-y-0 space-y-2 font-semibold md:text-sm text-md">
      {links.map((link, i) => {
        return (
          <Link key={i} to={link.href}>
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavLinks;
