import React from "react";
import { Link } from "react-router-dom";
type Props = {
  to: string;
  bg: string;
  text: string;
  textColor: string;
  onClick?: () => Promise<void>;
};
const NavigationLink = (Props: Props) => {
  return (
    <Link
      to={Props.to}
      style={{ background: Props.bg, color: Props.textColor }}>
     
      {Props.text}
    </Link>
  );
};

export default NavigationLink;
