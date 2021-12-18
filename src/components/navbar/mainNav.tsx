import React, { useState, FC, ReactElement } from 'react';

import LeftNavProps from './leftNavProps';
import MobileNav from './mobileNav';
import RightNavProps from './rightNavProps';
import ToggleMobileNav from './toggleMobileNav';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      role="banner"
      className="sticky lg:fixed top-0 z-40 bg-transparent h-auto md:px-8 lg:px-20 w-full border-transparent"
    >
      <div className="lg:mx-auto z-40 w-auto">
        <div className="relative z-50 flex items-center justify-between h-16 md:h-18 lg:h-20 w-full">
          <ToggleMobileNav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <LeftNavProps />
          <RightNavProps />
        </div>
      </div>
      <MobileNav menuOpen={menuOpen} />
    </header>
  );
};

export default Navbar;
