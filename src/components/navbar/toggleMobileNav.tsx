import React from "react";

// button to close and open mobile menu
const ToggleMobileNav = ({ menuOpen, setMenuOpen }) => {
  // toggle open and close state
  const toggleMenu = () => {
    menuOpen === false ? setMenuOpen(true) : setMenuOpen(false);
    let body = document.body;
    body.classList.toggle("overflow-hidden");
  };

  return (
    <div className="tMBWrapper ">
      <button
        id="menuBtn"
        onClick={toggleMenu}
        className="z-50 text-gray-400 focus:outline-none w-10 h-10 relative"
        aria-expanded="false"
      >
        <span className="sr-only">Open and close main menu</span>
        <div className="tMBtnInWrapper">
          <span
            aria-hidden="true"
            className={
              !menuOpen ? "tMBtnIn1 -translate-y-1.5" : "tMBtnIn1 rotate-45"
            }
          ></span>
          <span
            aria-hidden="true"
            className={!menuOpen ? "tMBtnIn1" : "z-50 opacity-0"}
          ></span>
          <span
            aria-hidden="true"
            className={
              !menuOpen ? "tMBtnIn1 translate-y-1.5 " : "tMBtnIn1 -rotate-45"
            }
          ></span>
        </div>
      </button>
    </div>
  );
};

export default ToggleMobileNav;
