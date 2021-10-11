import { IoMdClose } from "react-icons/io";
import { useRouter } from "next/router";

// Auth page close button 'redirect user to landing page'
export const CloseBtn = () => {
  const router = useRouter();
  let path = router.pathname === "/auth";

  return (
    <div className={path ? "auth-close " : "auth-close xlg:fixed"}>
      <button onClick={() => router.back()} className="auth-close-btn">
        <IoMdClose className="text-3xl " />
      </button>
    </div>
  );
};

// Heading for auth page
const Header = ({ headerText }) => {
  const router = useRouter();
  const path = router.pathname !== "/auth";

  {
    path ? (headerText = "Sign Up") : (headerText = "Welcome Back");
  }
  return (
    <header className={path ? "auth-header xlg:mt-8" : "auth-header"}>
      <h1 className="font-lato  text-4xl font-bold ">{headerText}</h1>
    </header>
  );
};

//Footer for auth page
const Footer = ({ footerText }) => {
  const router = useRouter();
  const path = router.pathname === "/auth";

  return (
    <footer className="flex justify-center pb-7">
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
const AuthLayout = ({ children }) => {
  return (
    <div className="auth-layout">
      <CloseBtn />
      <Header headerText />
      {children}
      <Footer footerText />
    </div>
  );
};

export default AuthLayout;
