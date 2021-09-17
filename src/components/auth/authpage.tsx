import { IoMdClose } from "react-icons/io";
import { useRouter } from "next/router";

// Auth page close button 'redirect user to landing page'
export const CloseBtn = (params) => {
  const router = useRouter();

  return (
    <div className="w-full flex justify-end h-12 px-2">
      <button onClick={() => router.push("/")} className="auth-close-btn">
      <IoMdClose className="text-3xl " />
      </button>
    </div>
    
  );
};

// Heading for auth page
const Header = ({ headerText }) => {
  const router = useRouter();

  {
    router.pathname !== "/auth"
      ? (headerText = "Sign Up")
      : (headerText = "Welcome Back");
  }
  return (
    <header className="hidden lg:flex w-full text-gray-800 justify-center py-5 my-1">
      <h1 className="font-lato  text-5xl font-bold ">{headerText}</h1>
    </header>
  );
};

//Footer for auth page
const Footer = ({ footerText }) => {
  const router = useRouter();
  const path = router.pathname === "/auth";

  return (
    <footer className="flex justify-center pb-8">
      <div className="self-center sm:inline text-sm text-gray-400">
        <span className="transition duration-300 ease-in">
          {/* Render footer text according to the page route */}
          {path ? (
            (footerText = (
              <span>
                <a className="auth-links mr-1">Security and Privacy</a>
                {"  "}|{"  "}
                <a className="auth-links ml-1" href="#">
                  Terms of Use
                </a>
              </span>
            ))
          ) : (
            <span>
              By signing up you agree to Prɔpati's
              <a className="auth-links ml-1" href="#">
                Terms of Use
              </a>{" "}
              and{" "}
              <a className="auth-links ml-1" href="#">
                Privacy Policy
              </a>
            </span>
          )}
        </span>
      </div>
    </footer>
  );
};

// Auth page layout
const AuthLayout = ({ Children }) => {
  return (
    <div className="auth-layout">
      <CloseBtn />
      <Header headerText />
      {Children}
      <Footer footerText />
    </div>
  );
};

export default AuthLayout;
