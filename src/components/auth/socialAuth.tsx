import { OAuthP } from "../../interfaces/";

const SocialAuth = ({ btnText, btnIcon }: OAuthP) => {
  return (
    <div className="">
      <button className="social-auth-btn">
        <span className=" text-4xl">{btnIcon}</span>
        <span className="font-bold my-auto text-xl">{btnText}</span>
      </button>
    </div>
  );
};

export default SocialAuth;
