import { IoMdClose } from "react-icons/io";
import { useRouter } from "next/router";

// auth page close button 'redirect user to landing page'
export const CloseBtn = (params) => {
  const router = useRouter();

  return (
    <button onClick={() => router.push("/")} className="auth-close-btn">
      <IoMdClose className="text-3xl " />
    </button>
  );
}; // layout header

const Header = (params) => {
  const router = useRouter();

  if (router.pathname === "/auth") {
    return (
      <header className="hidden lg:flex w-full text-gray-800 justify-center py-5 my-1">
        <h1 className="font-lato  text-5xl font-bold ">Sign In</h1>
      </header>
    );
  } else {
    return (
      <header className="hidden lg:flex w-full text-gray-800 justify-center py-5 my-1">
        <h1 className="font-lato  text-5xl font-bold ">Sign Up</h1>
      </header>
    );
  }
};

// layout footer
const Footer = (params) => {
  const router = useRouter();

  if (router.pathname === "/auth/sign-up") {
    return (
      <footer className="flex justify-center pb-8">
        <div className="self-center sm:inline text-sm text-gray-400">
          <span className="transition duration-300 ease-in">
            By signing up you agree to Prɔpati's{" "}
            <a className="auth-links" href="#">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a className="auth-links" href="#">
              Terms of Use
            </a>
          </span>
        </div>
      </footer>
    );
  } else {
    return (
      <footer className="flex justify-center pb-8">
        <div className="self-center sm:inline text-sm text-gray-400">
          <span className="transition duration-300 ease-in">
            <a className="auth-links mr-1" href="#">
              Security and Privacy
            </a>
            {"  "}|{"  "}
            <a className="auth-links ml-1" href="#">
              Terms of Use
            </a>
          </span>
        </div>
      </footer>
    );
  }
};

// Auth page layout
const AuthLayout = ({ Children }) => {
  return (
    <div className="auth-layout">
      <CloseBtn />
      <Header />
      {Children}
      <Footer />
    </div>
  );
};

export default AuthLayout;
