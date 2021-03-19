const SignUp = (params) => {
  return (
    <div className="w-screen h-screen">
      <div className="w-full flex">
        <div className="shadow-2xl  rounded mx-auto to w-full md:w-1/3 border-solid border-t-4 border-teal-500 p-0 my-2">
          <form id="signupForm" className="">
            <div className="p-8">
              <div className="w-full input-container">
                <input
                  type="email"
                  className="border-solid border w-full rounded px-3 py-2"
                  placeholder="Email"
                />
              </div>
              <div className="w-full input-container ">
                <input
                  type="email"
                  className="border-solid border w-full rounded px-3 py-2"
                  placeholder="Email"
                />
              </div>
              <div className="w-full input-container ">
                <input
                  type="email"
                  className="border-solid border w-full rounded px-3 py-2"
                  placeholder="Email"
                />
              </div>
              <div className="w-full input-container ">
                <input
                  type="email"
                  className="border-solid border w-full rounded px-3 py-2"
                  placeholder="Email"
                />
              </div>
            </div>

            <button className="bg-teal-500 text-white px-3 py-2 rounded w-full mt-4">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
