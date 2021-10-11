import { OAuthP } from "../../interfaces/";

const SocialAuth = ({ btnText, btnIcon, page, subText }: OAuthP) => {
  {
    page === "/auth" ? (btnText = "Log in with") : (btnText = "Sign up with");
  }

  return (
    <div className="mb-3">
      <span className="cursor-pointer social-auth-btn">
        <span className="ml-2 text-4xl">{btnIcon}</span>
        <span className="font-bold text-gray-800 my-auto text-xl w-full text-center">{`${btnText} ${subText}`}</span>
      </span>
    </div>
  );
};

export default SocialAuth;
