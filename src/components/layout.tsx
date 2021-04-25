import { Navbar } from "./navbar";
import Footer from "./footer";
import Main from "./main";

export default function Layout(pageInfo: any) {
  return (
    <div className="flex flex-col min-h-screen h-full">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}
