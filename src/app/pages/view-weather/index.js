import React, { useContext } from "react";
import "./../../App.css";
import { Card, CardContent, Grid, Typography, Divider } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import DefaultLayout from "./../../layouts/main";
import {
  CardFooterLeftText,
  CardFooterCenter,
  CardFooterRightText,
  CardContentLeftUpper,
  CardContentRight,
} from "./../../layouts/weather-card-details";
import { AppContext } from "./../../common/context";
import { Styles } from "./styles";

const WeatherDetailCard = (props) => {
  const navigate = useNavigate();
  const { cityWeatherDetails } = useContext(AppContext);

  return (
    <Card
      sx={[
        { backgroundColor: `${cityWeatherDetails[props.id].colour}` },
        Styles.ViewWeatherCard,
      ]}
    >
      <IconButton
        aria-label="arrowBack"
        size="large"
        onClick={() => {
          navigate("/");
        }}
      >
        <ArrowBackIcon sx={Styles.ViewWeatherArrowBackIcon} />
      </IconButton>
      <CardContent
        sx={[
          { backgroundColor: `${cityWeatherDetails[props.id].colour}` },
          Styles.ViewWeatherFirstCardContent,
        ]}
      >
        <CardContentLeftUpper
          cityNameAndCountry={cityWeatherDetails[props.id].cityNameAndCountry}
          dt={cityWeatherDetails[props.id].dt}
          firstVarient="h5"
          secondVarient="body1"
        />
        <Grid container sx={Styles.ViewWeatherFirstGridContainer}>
          <Grid item xs={6}>
            <Grid container sx={Styles.ViewWeatherSecondGridContainer}>
              <Grid item xs={7} sx={Styles.ViewWeatherFirstGridItem}>
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
            </Grid>
          </Grid>
          <Divider orientation="vertical" flexItem color={"white"}></Divider>
          <Grid item xs={5} sx={Styles.ViewWeatherThirdGridItem}>
            <CardContentRight
              firstVarient="h3"
              secondVarient="body1"
              temp={cityWeatherDetails[props.id].temp}
              minTemp={cityWeatherDetails[props.id].minTemp}
              maxTemp={cityWeatherDetails[props.id].maxTemp}
            />
          </Grid>
        </Grid>
      </CardContent>
      <CardContent sx={Styles.ViewWeatherSecondCardContent}>
        <Grid container sx={Styles.ViewWeatherThirdGridContainer}>
          <Grid item xs={4} sx={Styles.ViewWeatherFourthGridItem}>
            <CardFooterLeftText
              pressure={cityWeatherDetails[props.id].pressure}
              humidity={cityWeatherDetails[props.id].humidity}
              visibility={cityWeatherDetails[props.id].visibility}
              typographyVarient="body1"
            />
          </Grid>
          <Divider orientation="vertical" flexItem color={"white"}></Divider>
          <Grid item xs={4} sx={Styles.ViewWeatherFifthGridItem}>
            <CardFooterCenter
              windDetails={cityWeatherDetails[props.id].windDetails}
              imageHeight="26px"
              imageWidth="26px"
              typographyVarient="body1"
            />
          </Grid>
          <Divider orientation="vertical" flexItem color={"white"}></Divider>
          <Grid item xs={3} sx={Styles.ViewWeatherFourthGridItem}>
            <CardFooterRightText
              sunrise={cityWeatherDetails[props.id].sunrise}
              sunset={cityWeatherDetails[props.id].sunset}
              typographyVarient="body1"
            />
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
