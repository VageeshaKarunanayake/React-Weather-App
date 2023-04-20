import React, { useContext } from "react";
import "./../../App.css";
import { Card, CardContent, Grid, Typography, Divider } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import LocationImage from "./../../assets/images/Location.png";
import { useLocation } from "react-router-dom";
import DefaultLayout from "./../../layouts/main";
import {
  DateTimeConverter,
  TimeConverter,
  RoundInteger,
} from "./../../common/global/functions/index";
import { AppContext } from "./../../common/context/index";
import { Styles } from "./styles";

const WeatherDetailCard = (props) => {
  const navigate = useNavigate();
  const { cityWeatherDetails } = useContext(AppContext);
  return (
    <Card
      onClick={() => {
        navigate("/");
      }}
      sx={[
        { backgroundColor: `${cityWeatherDetails[props.id].colour}` },
        Styles.ViewWeatherCard,
      ]}
    >
      <IconButton aria-label="arrowBack" size="large">
        <ArrowBackIcon sx={Styles.ViewWeatherArrowBackIcon} />
      </IconButton>
      <CardContent
        sx={[
          { backgroundColor: `${cityWeatherDetails[props.id].colour}` },
          Styles.ViewWeatherFirstCardContent,
        ]}
      >
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          color={"white"}
          align="center"
          sx={Styles.ViewWeatherFirstTypography}
        >
          {cityWeatherDetails[props.id].cityName},{" "}
          {cityWeatherDetails[props.id].country}
        </Typography>
        <Typography variant="body1" color={"white"} align="center">
          {DateTimeConverter(cityWeatherDetails[props.id].dt)}
        </Typography>
        <Grid container sx={Styles.ViewWeatherFirstGridContainer}>
          <Grid item xs={6} sx={Styles.ViewWeatherFirstGridItem}>
            <Grid item>
              <img
                src={`https://openweathermap.org/img/wn/${
                  cityWeatherDetails[props.id].icon
                }@2x.png`}
                alt={cityWeatherDetails[props.id].description}
                height="80px"
                width="80px"
              />
            </Grid>
            <Typography variant="body1" color={"white"}>
              {cityWeatherDetails[props.id].description}
            </Typography>
          </Grid>
          <Divider orientation="vertical" flexItem color={"white"}></Divider>
          <Grid item xs={5} sx={Styles.ViewWeatherThirdGridItem}>
            <Typography variant="h3" color={"white"}>
              {RoundInteger(cityWeatherDetails[props.id].temp)}ºc
            </Typography>
            <Typography variant="body1" color={"white"} paddingTop="10px">
              Temp Min: {RoundInteger(cityWeatherDetails[props.id].minTemp)}ºc
            </Typography>
            <Typography variant="body1" color={"white"} paddingTop="10px">
              Temp Max: {RoundInteger(cityWeatherDetails[props.id].maxTemp)}ºc
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardContent sx={Styles.ViewWeatherSecondCardContent}>
        <Grid container sx={Styles.ViewWeatherSecondGridContainer}>
          <Grid item xs={4} sx={Styles.ViewWeatherFourthGridItem}>
            <Typography variant="body1" color={"white"}>
              Pressure: {cityWeatherDetails[props.id].pressure}Pa
            </Typography>
            <Typography variant="body1" color={"white"}>
              Humidity: {cityWeatherDetails[props.id].humidity}%
            </Typography>
            <Typography variant="body1" color={"white"}>
              Visibility: {cityWeatherDetails[props.id].visibility}km
            </Typography>
          </Grid>
          <Divider orientation="vertical" flexItem color={"white"}></Divider>
          <Grid item xs={4} sx={Styles.ViewWeatherFifthGridItem}>
            <img
              src={LocationImage}
              alt="Location"
              height="26px"
              width="26px"
            />
            <Typography variant="body1" color={"white"}>
              {cityWeatherDetails[props.id].windSpeed}m/s{" "}
              {cityWeatherDetails[props.id].windDegree} Degree
            </Typography>
          </Grid>
          <Divider orientation="vertical" flexItem color={"white"}></Divider>
          <Grid item xs={3} sx={Styles.ViewWeatherFourthGridItem}>
            <Typography variant="body1" color={"white"}>
              Sunrise: {TimeConverter(cityWeatherDetails[props.id].sunrise)}
            </Typography>
            <Typography variant="body1" color={"white"}>
              Sunset: {TimeConverter(cityWeatherDetails[props.id].sunset)}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

const ViewWeather = () => {
  const location = useLocation();
  return (
    <>
      <DefaultLayout>
        <WeatherDetailCard id={location.state.index} />
      </DefaultLayout>
    </>
  );
};
export default ViewWeather;
