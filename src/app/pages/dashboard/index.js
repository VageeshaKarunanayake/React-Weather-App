import React, { useContext } from "react";
import "./../../App.css";
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Divider,
  CardActionArea,
  TextField,
  Button,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import LocationImage from "./../../assets/images/Location.png";
import DashboardCardBackgroundImage from "./../../assets/images/DashboardCardBackground.png";
import DefaultLayout from "./../../layouts/main";
import { timeConverter, dateTimeConverter } from "./../../common/global/index";
import { AppContext } from "./../../common/context/index";

const WeatherInfoCard = () => {
  const navigate = useNavigate();
  const { cityWeatherDetails, dispatchUserEvent } = useContext(AppContext);
  return (
    <Grid container rowSpacing={4} columnSpacing={{ xs: 1 }} marginTop={"30px"}>
      {cityWeatherDetails.map((item, index) => (
        <Grid item key={index} xs={6} sx={{ textAlign: "end" }}>
          <Card
            key={item.cityId}
            sx={{
              maxWidth: "510px",
              margin: "auto",
              borderRadius: "10px",
              backgroundColor: `${item.colour}`,
            }}
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
                <CloseIcon
                  sx={{
                    color: "white",
                  }}
                />
              </IconButton>
              <CardContent
                sx={{
                  minHeight: "120px",
                  backgroundColor: `${item.colour}`,
                  backgroundImage: `url(${DashboardCardBackgroundImage})`,
                  backgroundRepeat: "no-repeat",
                }}
              >
                <Grid
                  container
                  sx={{ alignItems: "center", paddingTop: "6px" }}
                >
                  <Grid
                    item
                    xs={6}
                    sx={{ textAlign: "center", paddingRight: "30px" }}
                  >
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      color={"white"}
                      align="center"
                      sx={{ fontWeight: "bold" }}
                    >
                      {item.cityName}, {item.country}
                    </Typography>
                    <Typography variant="body2" color={"white"} align="center">
                      {dateTimeConverter(item.dt)}
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
                  <Grid
                    item
                    xs={5}
                    sx={{ textAlign: "start", paddingLeft: "60px" }}
                  >
                    <Typography
                      variant="h4"
                      color={"white"}
                      marginLeft={"20px"}
                    >
                      {Math.round(item.temp)}ºc
                    </Typography>
                    <Typography
                      variant="body2"
                      color={"white"}
                      paddingTop="10px"
                    >
                      Temp Min: {Math.round(item.minTemp)}ºc
                    </Typography>
                    <Typography variant="body2" color={"white"}>
                      Temp Max: {Math.round(item.maxTemp)}ºc
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
              <CardContent
                sx={{
                  minHeight: "80px",
                  backgroundColor: "#30333d",
                }}
              >
                <Grid
                  container
                  sx={{ alignItems: "center", paddingTop: "7px" }}
                >
                  <Grid
                    item
                    xs={4}
                    sx={{ textAlign: "left", paddingLeft: "20px" }}
                  >
                    <Typography variant="body2" color={"white"}>
                      Pressure: {item.pressure}Pa
                    </Typography>
                    <Typography variant="body2" color={"white"}>
                      Humidity: {item.humidity}%
                    </Typography>
                    <Typography variant="body2" color={"white"}>
                      Visibility: {item.visibility / 1000}km
                    </Typography>
                  </Grid>
                  <Divider
                    orientation="vertical"
                    flexItem
                    color={"white"}
                  ></Divider>
                  <Grid item xs={4} sx={{ textAlign: "center" }}>
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
                  <Grid
                    item
                    xs={3}
                    sx={{ textAlign: "left", paddingLeft: "6px" }}
                  >
                    <Typography variant="body2" color={"white"}>
                      Sunrise: {timeConverter(item.sunrise)}
                    </Typography>
                    <Typography variant="body2" color={"white"}>
                      Sunset: {timeConverter(item.sunset)}
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

const Search = () => {
  return (
    <>
      <Grid container textAlign={"center"}>
        <Grid item xs={12}>
          <TextField
            hiddenLabel
            placeholder="Enter a city"
            variant="filled"
            size="small"
            sx={{
              width: 350,
              backgroundColor: "#30333d",
              input: { color: "white" },
              borderRadius: "4px",
            }}
          />
          <Button
            variant="contained"
            onClick={() => {
              alert("This functionality is still under development");
            }}
            sx={{ height: "40px", backgroundColor: "#6249cc" }}
          >
            Add city
          </Button>
        </Grid>
      </Grid>
    </>
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
