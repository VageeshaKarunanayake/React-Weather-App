import React, { useContext } from "react";
import "./../../App.css";
import { Card, CardContent, Grid, Typography, Divider } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import LocationImage from "./../../assets/images/Location.png";
import { useLocation } from "react-router-dom";
import DefaultLayout from "./../../layouts/main";
import { dateTimeConverter, timeConverter } from "./../../common/global/index";
import { AppContext } from "./../../common/context/index";

const WeatherDetailCard = (props) => {
  const navigate = useNavigate();
  const { cityWeatherDetails } = useContext(AppContext);
  return (
    <Card
      onClick={() => {
        navigate("/");
      }}
      sx={{
        maxWidth: "md",
        margin: "auto",
        borderRadius: "10px",
        backgroundColor: `${cityWeatherDetails[props.id].colour}`,
      }}
    >
      <IconButton aria-label="arrowBack" size="large">
        <ArrowBackIcon
          sx={{
            color: "white",
          }}
        />
      </IconButton>
      <CardContent
        sx={{
          minHeight: "260px",
          backgroundColor: `${cityWeatherDetails[props.id].colour}`,
        }}
      >
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          color={"white"}
          align="center"
          sx={{ fontWeight: "bold" }}
        >
          {cityWeatherDetails[props.id].cityName},{" "}
          {cityWeatherDetails[props.id].country}
        </Typography>
        <Typography variant="body1" color={"white"} align="center">
          {dateTimeConverter(cityWeatherDetails[props.id].dt)}
        </Typography>
        <Grid container sx={{ alignItems: "center", paddingTop: "40px" }}>
          <Grid item xs={6} sx={{ textAlign: "center", paddingLeft: "180px" }}>
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
          <Grid item xs={5} sx={{ textAlign: "start", paddingLeft: "60px" }}>
            <Typography variant="h3" color={"white"}>
              {Math.round(cityWeatherDetails[props.id].temp)}ºc
            </Typography>
            <Typography variant="body1" color={"white"} paddingTop="10px">
              Temp Min: {Math.round(cityWeatherDetails[props.id].minTemp)}ºc
            </Typography>
            <Typography variant="body1" color={"white"} paddingTop="10px">
              Temp Max: {Math.round(cityWeatherDetails[props.id].maxTemp)}ºc
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardContent
        sx={{
          minHeight: "100px",
          backgroundColor: "#30333d",
        }}
      >
        <Grid container sx={{ alignItems: "center", paddingTop: "10px" }}>
          <Grid item xs={4} sx={{ textAlign: "left", paddingLeft: "60px" }}>
            <Typography variant="body1" color={"white"}>
              Pressure: {cityWeatherDetails[props.id].pressure}Pa
            </Typography>
            <Typography variant="body1" color={"white"}>
              Humidity: {cityWeatherDetails[props.id].humidity}%
            </Typography>
            <Typography variant="body1" color={"white"}>
              Visibility: {cityWeatherDetails[props.id].visibility / 1000}km
            </Typography>
          </Grid>
          <Divider orientation="vertical" flexItem color={"white"}></Divider>
          <Grid item xs={4} sx={{ textAlign: "center" }}>
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
          <Grid item xs={3} sx={{ textAlign: "center", paddingLeft: "60px" }}>
            <Typography variant="body1" color={"white"}>
              Sunrise: {timeConverter(cityWeatherDetails[props.id].sunrise)}
            </Typography>
            <Typography variant="body1" color={"white"}>
              Sunset: {timeConverter(cityWeatherDetails[props.id].sunset)}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

const ViewWeather = ({ route, navigate }) => {
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
