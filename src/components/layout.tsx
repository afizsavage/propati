import { Navbar } from "./navbar";
import { Footer } from "./utils";

interface Layout {
  pageInfo: any;
  children: JSX.Element[] | JSX.Element;

}

const Layout = ({children}: Layout) => {
  return (
    <div className="flex flex-col min-h-screen h-full">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout