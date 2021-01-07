import React, { ReactNode } from "react";
import Navbar from "./navBar";
import Footer from "./footer";

interface IProps {
  children?: ReactNode;
  pageInfo?: any;
}

export default function Layout({ children }: IProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />{" "}
      <main className="flex-grow flex justify-center content-center">
        {children}
      </main>{" "}
      <Footer />
    </div>
  );
}
