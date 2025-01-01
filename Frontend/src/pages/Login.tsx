import { Box, Typography } from "@mui/material";
import React from "react";
import CustomisedInput from "../components/shared/CustomisedInput";
import height from "../../node_modules/dom-helpers/esm/height";

const Login = () => {
  return (
    <>
      <Box width={"100%"} height={"100%"} display="flex" flex="1">
        {/* 自适应大小 ，网页和移动端 */}
        {/* image机器人 */}
        <Box
          padding={8}
          mt={8}
          display={{ md: "flex", sm: "none", xs: "none" }}>
          <img src="airobot.png" alt="Robot" style={{ width: "400px" }} />
        </Box>

        {/*  */}
        <Box
          display={"flex"}
          flex={{ xs: 1, md: 0.5 }}
          justifyContent={"center"}
          alignContent={"center"}
          padding={2}
          ml="auto"
          mt={10}>
          {/* 表单 */}
          <form
            action=""
            style={{
              margin: "auto",
              padding: "30px",
              boxShadow: "10px 10px 20px #000",
              borderRadius: "10px",
              border: "none ",
            }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: "300px",
              }}>
              {/* 文字 */}
              <Typography
                variant="h3"
                textAlign={"center"}
                padding="2"
                fontWeight={"800"}>
                Login
              </Typography>
              <CustomisedInput type="email" name="email" label="Email" />
              <CustomisedInput
                type="password"
                name="password"
                label="Password"
              />
            </Box>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default Login;
