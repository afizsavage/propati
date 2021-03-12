import React, { ReactNode } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import Main from "./main";

interface IProps {
  children?: ReactNode;
  pageInfo?: any;
}

export default function Layout({ children }: IProps) {
  return (
    <div className="flex flex-col min-h-screen h-full">
      <Navbar /> <Main />
      <Footer />
    </div>
  );
}
