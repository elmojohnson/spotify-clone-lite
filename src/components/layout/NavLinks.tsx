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
    <nav className="flex items-center space-x-4 font-semibold text-sm">
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
