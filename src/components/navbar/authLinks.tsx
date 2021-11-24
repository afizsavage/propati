import React from 'react';
import { useRouter } from 'next/router';

const AuthenticateButtons = ({ href, children, custom = '' }) => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };
  return (
    <a
      href={href}
      className={`text-white py-4 flex items-center justify-center border h-9 w-24 rounded-full font-semibold ml-5 ${custom}`}
      onClick={handleClick}
    >
      {children}
    </a>
  );
};

export default AuthenticateButtons;
