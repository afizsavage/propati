interface Sub_btn {
  page: string;
  loading: boolean;

  btnText?:string;
}

const SubmitBtn = (props: Sub_btn) => {
  var tempProps = JSON.parse(JSON.stringify(props));

  {
    props.page === "/auth" ? (tempProps.btnText = "Log in") : (tempProps.btnText = "Sign up");
  }
  return (
    <button type="submit" className="authSubmitBtn" >
      <svg
        className={
          props.loading ? "animate-spin my-auto h-6 w-6 text-white" : "hidden"
        }
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
      <span className={props.loading ? "hidden" : "my-auto static"}>{tempProps.btnText}</span>
    </button>
  );
};

export default SubmitBtn;
