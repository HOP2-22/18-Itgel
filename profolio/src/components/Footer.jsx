import { Button, Typography, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "100vh",
      }}
    >
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Link to="/PopularPost">
          <Button>PopularPost</Button>
        </Link>
        <Typography>@2023 Итгэл Бат-Эрдэнэ. All Rights Reserved.</Typography>
      </Typography>
    </Box>
  );
};
export default Footer;
