import React, { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";
import Main from "./main";

interface IProps {
  children?: ReactNode;
  pageInfo?: any;
}

export default function Layout({ children }: IProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header /> <Main />
      <Footer />
    </div>
  );
}
