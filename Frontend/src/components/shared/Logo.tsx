import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div
      style={{
        display: "flex",
        marginRight: "auto",
        alignItems: "center",
        gap: "8px",
      }}>
      <Link to={"/"}>
        <img
          src="openai.png"
          alt="openai image"
          width={"30px"}
          height={"30px"}
          className="image-inverted"
        />
        <Typography
          sx={{
            display: { md: "block", sm: "none", xs: "none" },
            mr: "auto",
            fontWeight: "800",
            textShadow: "2px 2px 20px #000",
          }}>
          <span style={{ fontSize: "20px" }}>MERN</span>-gpt
        </Typography>
      </Link>
    </div>
  );
};

export default Logo;
