import React, { useState, FC, ReactElement } from "react";

import LeftNavProps from "./leftNavProps";
import MobileNav from "./mobileNav";
import RightNavProps from "./rightNavProps";
import ToggleMobileNav from "./toggleMobileNav";

const Navbar = (params) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      role="banner"
      className="sticky top-0 z-40  md:px-8 lg:px-16  w-auto border-white border-transparent border-b shadow"
    >
      <div className="lg:mx-auto  z-40 w-auto">
        <div className="relative z-50 bg-white flex items-center w-full justify-between h-14 md:h-18 lg:h-20 w-full">
          <ToggleMobileNav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <LeftNavProps />
          <RightNavProps />
        </div>
      </div>
      <MobileNav menuOpen={menuOpen} />
    </nav>
  );
};

export default Navbar;
