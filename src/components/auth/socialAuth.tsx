import { OAuthP } from "../../interfaces/";

const SocialAuth = ({ btnText, btnIcon, page, subText }: OAuthP) => {
  // let tempProps = JSON.parse(JSON.stringify(props));

  {
    page === "/auth" ? (btnText = "Log in with") : (btnText = "Sign up with");
  }


  return (
    <div className="">
      <button className="social-auth-btn">
        <span className=" text-4xl">{btnIcon}</span>
        <span className="font-bold my-auto text-xl">{`${btnText} ${subText}`}</span>
      </button>
    </div>
  );
};

export default SocialAuth;
