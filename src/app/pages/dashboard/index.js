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
import LocationImage from "./../../assets/images/Location.png";
import DashboardCardBackgroundImage from "./../../assets/images/DashboardCardBackground.png";
import DefaultLayout from "./../../layouts/main";
import Search from "./../../layouts/search";
import {
  TimeConverter,
  DateTimeConverter,
  RoundInteger,
} from "./../../common/global/functions/index";
import { AppContext } from "./../../common/context/index";
import { Styles } from "./styles";

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
                  event.stopPropagation();
                  dispatchUserEvent("REMOVE_CITY_WEATHER", {
                    cityId: item.cityId,
                  });
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
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      color={"white"}
                      align="center"
                      sx={Styles.DashboardFirstTypography}
                    >
                      {item.cityName}, {item.country}
                    </Typography>
                    <Typography variant="body2" color={"white"} align="center">
                      {DateTimeConverter(item.dt)}
                    </Typography>
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
                          color={"white"}
                          paddingTop={"15px"}
                        >
                          {item.description}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Divider
                    orientation="vertical"
                    flexItem
                    color={"white"}
                  ></Divider>
                  <Grid item xs={5} sx={Styles.DashboardSixthGridItem}>
                    <Typography
                      variant="h4"
                      color={"white"}
                      marginLeft={"20px"}
                    >
                      {RoundInteger(item.temp)}ºc
                    </Typography>
                    <Typography
                      variant="body2"
                      color={"white"}
                      paddingTop="10px"
                    >
                      Temp Min: {RoundInteger(item.minTemp)}ºc
                    </Typography>
                    <Typography variant="body2" color={"white"}>
                      Temp Max: {RoundInteger(item.maxTemp)}ºc
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
              <CardContent sx={Styles.DashboardSecondCardContent}>
                <Grid container sx={Styles.DashboardThirdGridContainer}>
                  <Grid item xs={4} sx={Styles.DashboardSeventhGridItem}>
                    <Typography variant="body2" color={"white"}>
                      Pressure: {item.pressure}Pa
                    </Typography>
                    <Typography variant="body2" color={"white"}>
                      Humidity: {item.humidity}%
                    </Typography>
                    <Typography variant="body2" color={"white"}>
                      Visibility: {item.visibility}km
                    </Typography>
                  </Grid>
                  <Divider
                    orientation="vertical"
                    flexItem
                    color={"white"}
                  ></Divider>
                  <Grid item xs={4} sx={Styles.DashboardEighthGridItem}>
                    <img
                      src={LocationImage}
                      alt="Location"
                      height="15px"
                      width="15px"
                    />
                    <Typography variant="body2" color={"white"}>
                      {item.windSpeed}m/s {item.windDegree} Degree
                    </Typography>
                  </Grid>
                  <Divider
                    orientation="vertical"
                    flexItem
                    color={"white"}
                  ></Divider>
                  <Grid item xs={3} sx={Styles.DashboardNinethGridItem}>
                    <Typography variant="body2" color={"white"}>
                      Sunrise: {TimeConverter(item.sunrise)}
                    </Typography>
                    <Typography variant="body2" color={"white"}>
                      Sunset: {TimeConverter(item.sunset)}
                    </Typography>
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
