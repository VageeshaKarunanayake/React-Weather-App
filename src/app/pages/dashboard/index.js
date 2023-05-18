import React, { useContext } from "react";
import "./../../App.css";
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Divider,
  CardActionArea,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import DashboardCardBackgroundImage from "./../../assets/images/DashboardCardBackground.png";
import DefaultLayout from "./../../layouts/main";
import Search from "../../components/search";
import { AppContext } from "./../../common/context";
import {
  CardFooterLeftText,
  CardFooterCenter,
  CardFooterRightText,
  CardContentLeftUpper,
  CardContentRight,
} from "../../components/weather-card-details";
import { Styles } from "./styles";
import { DashboardRemoveCity } from "./../../common/global/functions";

const WeatherInfoCard = () => {
  const navigate = useNavigate();
  const { cityWeatherDetails, dispatchUserEvent } = useContext(AppContext);
  return (
    <Grid container rowSpacing={4} columnSpacing={{ xs: 1 }} marginTop={"30px"}>
      {cityWeatherDetails.map((item, index) => (
        <Grid
          item
          key={index}
          xs={12}
          md={6}
          sx={Styles.DashboardFirstGridItem}
        >
          <Card
            key={item.cityId}
            sx={[{ backgroundColor: `${item.colour}` }, Styles.DashboardCard]}
          >
            <CardActionArea
              component="span"
              onClick={() => {
                navigate("/view-weather", { state: { index: index } });
              }}
            >
              <IconButton
                aria-label="arrowBack"
                size="small"
                onClick={(event) => {
                  DashboardRemoveCity(event, dispatchUserEvent, item.cityId);
                }}
              >
                <CloseIcon sx={Styles.DashboardCardCloseIcon} />
              </IconButton>
              <CardContent
                sx={[
                  {
                    backgroundColor: `${item.colour}`,
                    backgroundImage: `url(${DashboardCardBackgroundImage})`,
                  },
                  Styles.DashboardFirstCardContent,
                ]}
              >
                <Grid container sx={Styles.DashboardSecondGridContainer}>
                  <Grid item xs={6} sx={Styles.DashboardThirdGridItem}>
                    <CardContentLeftUpper
                      cityNameAndCountry={item.cityNameAndCountry}
                      dt={item.dt}
                      firstVarient="h6"
                      secondVarient="body2"
                    />
                    <Grid container spacing={1} paddingTop={"20px"}>
                      <Grid item xs={4.5} textAlign={"end"}>
                        <img
                          src={`https://openweathermap.org/img/wn/${item.icon}@2x.png`}
                          alt={item.description}
                          height="46px"
                          width="46px"
                        />
                      </Grid>
                      <Grid
                        item
                        xs={7}
                        textAlign={"left"}
                        justifyContent={"center"}
                      >
                        <Typography
                          variant="body2"
                          paddingTop={"15px"}
                          sx={Styles.ColourWhite}
                        >
                          {item.description}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Divider
                    orientation="vertical"
                    flexItem
                    sx={Styles.BackgroundColourWhite}
                  ></Divider>
                  <Grid item xs={5} sx={Styles.DashboardSixthGridItem}>
                    <CardContentRight
                      firstVarient="h4"
                      secondVarient="body2"
                      temp={item.temp}
                      minTemp={item.minTemp}
                      maxTemp={item.maxTemp}
                    />
                  </Grid>
                </Grid>
              </CardContent>
              <CardContent sx={Styles.DashboardSecondCardContent}>
                <Grid container sx={Styles.DashboardThirdGridContainer}>
                  <Grid item xs={4} sx={Styles.DashboardSeventhGridItem}>
                    <CardFooterLeftText
                      pressure={item.pressure}
                      humidity={item.humidity}
                      visibility={item.visibility}
                      typographyVarient="body2"
                    />
                  </Grid>
                  <Divider
                    orientation="vertical"
                    flexItem
                    sx={Styles.BackgroundColourWhite}
                  ></Divider>
                  <Grid item xs={4} sx={Styles.DashboardEighthGridItem}>
                    <CardFooterCenter
                      windDetails={item.windDetails}
                      imageHeight="15px"
                      imageWidth="15px"
                      typographyVarient="body2"
                    />
                  </Grid>
                  <Divider
                    orientation="vertical"
                    flexItem
                    sx={Styles.BackgroundColourWhite}
                  ></Divider>
                  <Grid item xs={3.5} sx={Styles.DashboardNinethGridItem}>
                    <CardFooterRightText
                      sunrise={item.sunrise}
                      sunset={item.sunset}
                      typographyVarient="body2"
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

const Dashboard = () => {
  return (
    <>
      <DefaultLayout>
        <Search />
        <WeatherInfoCard />
      </DefaultLayout>
    </>
  );
};
export default Dashboard;
