import React from "react";
import { useRouter } from "next/router";

const AuthenticateButtons = ({ href, children }) => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };
  return (
    <a
      href={href}
      className="p-2 sm:py-2 sm:px-3 navLinks font-medium"
      onClick={handleClick}
    >
      {children}
    </a>
  );
};

export default AuthenticateButtons;
