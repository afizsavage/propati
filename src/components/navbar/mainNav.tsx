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
      className="sticky top-0 z-50 bg-white md:px-8 lg:px-16  w-full border-white border-transparent border-b shadow"
    >
      <div className="mx-auto w-full">
        <div className="relative flex items-center justify-between h-14 md:h-18 lg:h-20 w-full">
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
