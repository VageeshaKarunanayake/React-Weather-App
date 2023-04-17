import React from "react";
import "./../../App.css";
import { Grid, Typography } from "@mui/material";
import LogoImage from "./../../assets/images/Logo.png";

const Header = () => {
  return (
    <Grid container spacing={2} sx={{ alignItems: "center", padding: "20px" }}>
      <Grid item xs={5.5} sx={{ textAlign: "end" }}>
        <img src={LogoImage} alt="Logo" height="46px" width="56px" />
      </Grid>
      <Grid item xs={6.5} sx={{ textAlign: "left" }}>
        <Typography variant="h5" color={"white"}>
          Weather App
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Header;
