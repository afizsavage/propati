import React from "react";
import { ImFacebook, ImInstagram, ImTwitter } from "react-icons/im";
import Link from "next/link";

import { FCProps } from "../../interfaces";
import { SocialIcons } from "../utils/";

const FooterColumns = (props: FCProps) => {
  return (
    <div>
      <h3 className="font-bold text-gray-900 text-sm mb-3">{props.heading}</h3>
      <ul className="font-normal text-sm text-gray-700">
        {props.listitems.map((item) => {
          return (
            <li className="mt-2">
              <Link href={item.link}>
                <a>{item.text}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const Footer = (params) => {
  return (
    <footer className="w-full bg-gray-100 mt-2 flex flex-col px-8 md:px-10 lg:px-16 border-gray-300 border-t md:border-none ">
      <div className="flex flex-col md:flex-row py-8 md:py-14 md:justify-between w-full text-left">
        <div className="footerCols w-2/6"></div>
        <div className="footerCols w-2/6 ">
          <div className="flex flex-col">
            <div className="flex flex-row w-full">
              <div className="w-1/2">
                <FooterColumns
                  heading="Company"
                  listitems={[
                    { link: "#", text: "About Us" },
                    { link: "#", text: "FAQ" },
                  ]}
                />
              </div>
              <div className="w-1/2">
                {" "}
                <FooterColumns
                  heading="Work With Us"
                  listitems={[
                    { link: "#", text: "For Partners" },
                    { link: "#", text: "Be An Agent" },
                  ]}
                />
              </div>
            </div>
            <div className="flex flex-row w-full mt-9">
              <div className="w-1/2">
                {" "}
                <FooterColumns
                  heading="For Tenants"
                  listitems={[
                    { link: "#", text: "Apply Online" },
                    { link: "#", text: "Schedule Tour" },
                  ]}
                />
              </div>
              <div className="w-1/2">
                {" "}
                <FooterColumns
                  heading="For Landlords"
                  listitems={[
                    { link: "#", text: "List A Property" },
                    { link: "#", text: "Arrange Online Tour" },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-2/6 "></div>
      </div>
      <div className="flex w-full flex-col-reverse lg:flex-row col-span-full py-6 text-gray-900 border-gray-300 border-t text-sm font-light justify-center lg:justify-between">
        <div className="flex flex-col lg:flex-row md:pt-4 lg:pt-0">
          <span className="block sm:inline self-center">
            © {new Date().getFullYear()} Prɔpati, Inc. All Right Reserved.
          </span>{" "}
          <div className="self-center sm:inline">
            <span>
              <a className="px-5 hover:underline" href="#">
                Privacy
              </a>
            </span>
            <span>
              <a className=" hover:underline" href="#">
                Terms
              </a>
            </span>
          </div>
        </div>
        <div className="md:flex hidden justify-center">
          <SocialIcons
            link="#"
            icon={
              <ImFacebook
                className="cursor-pointer hover:text-gray-600"
                size={18}
              />
            }
          />
          <SocialIcons
            link="#"
            icon={
              <ImTwitter
                className="cursor-pointer hover:text-gray-600"
                size={18}
              />
            }
          />
          <SocialIcons
            link="#"
            icon={
              <ImInstagram
                className="cursor-pointer hover:text-gray-600"
                size={18}
              />
            }
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
