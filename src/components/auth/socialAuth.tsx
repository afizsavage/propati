import { OAuthP } from "../../interfaces/";

const SocialAuth = ({ btnText, btnIcon, page, subText }: OAuthP) => {
  // let tempProps = JSON.parse(JSON.stringify(props));

  {
    page === "/auth" ? (btnText = "Log in with") : (btnText = "Sign up with");
  }


  return (
    <div className="mb-3">
      <button className="social-auth-btn">
        <span className="ml-2 text-4xl">{btnIcon}</span>
        <span className="font-bold text-gray-800 my-auto text-xl w-full text-center">{`${btnText} ${subText}`}</span>
      </button>
    </div>
  );
};

export default SocialAuth;
