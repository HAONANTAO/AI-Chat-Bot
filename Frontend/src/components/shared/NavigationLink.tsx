import React from "react";
import "./Nav.css";
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
      className="navlink"
      to={Props.to}
      style={{ background: Props.bg, color: Props.textColor }}>
      {Props.text}
    </Link>
  );
};

export default NavigationLink;
