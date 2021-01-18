const Footer = (params) => {
  return (
    <footer className="bg-gray-100 flex px-20">
      <div className="w-full py-6 text-gray-900 text-sm font-light">
        <span className="">
          © {new Date().getFullYear()} Propati, Inc. All Right Reserved.
        </span>
        <span>
          <a className="px-5" href="#">
            Privacy.
          </a>
        </span>
        <span>
          <a className="" href="#">
            Terms.
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
