import React from "react";
import Link from "next/link";
import { SocialIconsP } from "../../interfaces";

const SocialIcons = (props: SocialIconsP) => {
  return (
    <span className="px-6">
      <Link href={props.link}>{props.icon}</Link>
    </span>
  );
};

export default SocialIcons;
