import React from "react";
import "./../../App.css";
import { Grid, Typography } from "@mui/material";
import { Styles } from "./styles";
import LocationImage from "./../../assets/images/Location.png";

export const CardFooterLeftText = (props) => {
  return (
    <>
      <Grid item xs={12}>
        <Typography
          variant={props.typographyVarient}
          color={"white"}
          sx={Styles.WeatherCardDetailsFirstTypography}
        >
          Pressure:
        </Typography>
        <Typography
          variant={props.typographyVarient}
          color={"white"}
          sx={Styles.WeatherCardDetailsSecondTypography}
        >
          {props.pressure}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography
          variant={props.typographyVarient}
          color={"white"}
          sx={Styles.WeatherCardDetailsFirstTypography}
        >
          Humidity:
        </Typography>
        <Typography
          variant={props.typographyVarient}
          color={"white"}
          sx={Styles.WeatherCardDetailsSecondTypography}
        >
          {props.humidity}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography
          variant={props.typographyVarient}
          color={"white"}
          sx={Styles.WeatherCardDetailsFirstTypography}
        >
          Visibility:
        </Typography>
        <Typography
          variant={props.typographyVarient}
          color={"white"}
          sx={Styles.WeatherCardDetailsSecondTypography}
        >
          {props.visibility}
        </Typography>
      </Grid>
    </>
  );
};

export const CardFooterCenter = (props) => {
  return (
    <>
      <img
        src={LocationImage}
        alt="Location"
        height={props.imageHeight}
        width={props.imageWidth}
      />
      <Typography variant={props.typographyVarient} color={"white"}>
        {props.windDetails}
      </Typography>
    </>
  );
};

export const CardFooterRightText = (props) => {
  return (
    <>
      <Grid item xs={12}>
        <Typography
          variant={props.typographyVarient}
          color={"white"}
          sx={Styles.WeatherCardDetailsFirstTypography}
        >
          Sunrise:
        </Typography>
        <Typography
          variant={props.typographyVarient}
          color={"white"}
          sx={Styles.WeatherCardDetailsSecondTypography}
        >
          {props.sunrise}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography
          variant={props.typographyVarient}
          color={"white"}
          sx={Styles.WeatherCardDetailsFirstTypography}
        >
          Sunset:
        </Typography>
        <Typography
          variant={props.typographyVarient}
          color={"white"}
          sx={Styles.WeatherCardDetailsSecondTypography}
        >
          {props.sunset}
        </Typography>
      </Grid>
    </>
  );
};

export const CardContentLeftUpper = (props) => {
  return (
    <>
      <Typography
        gutterBottom
        variant={props.firstVarient}
        component="div"
        color={"white"}
        align="center"
        sx={Styles.WeatherCardDetailsThridTypography}
      >
        {props.cityNameAndCountry}
      </Typography>
      <Typography variant={props.secondVarient} color={"white"} align="center">
        {props.dt}
      </Typography>
    </>
  );
};

export const CardContentRight = (props) => {
  return (
    <>
      <Typography variant={props.firstVarient} color={"white"}>
        {props.temp}
      </Typography>
      <Typography
        variant={props.secondVarient}
        color={"white"}
        paddingTop="10px"
      >
        {props.minTemp}
      </Typography>
      <Typography
        variant={props.secondVarient}
        color={"white"}
        paddingTop="10px"
      >
        {props.maxTemp}
      </Typography>
    </>
  );
};
