import { FcGoogle } from "react-icons/fc";

const SocialAuth = ({ btnText }) => {
  return (
    <div className="">
      <button className="social-auth-btn">
        <FcGoogle className="relative -left-12 text-4xl inline-block" />{" "}
        <span className="font-bold text-xl">{btnText}</span>
      </button>
    </div>
  );
};

export default SocialAuth;
