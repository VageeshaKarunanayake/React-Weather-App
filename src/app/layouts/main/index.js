import React from "react";
import "./../../App.css";
import { Box, Container } from "@mui/material";
import Header from "./../header/index";
import Footer from "./../footer/index";
import { Styles } from "./styles";
import BackgroundImage from "./../../assets/images/Background.png";

const Content = (props) => {
  return (
    <Box sx={[{ backgroundImage: `url(${BackgroundImage})` }, Styles.MainBox]}>
      {props.children}
    </Box>
  );
};

const Layout = (props) => {
  return (
    <>
      <Container disableGutters maxWidth={false}>
        <main>
          {props.children}
          <Footer />
        </main>
      </Container>
    </>
  );
};

const DefaultLayout = (props) => {
  return (
    <>
      <Layout>
        <Content>
          <Header />
          {props.children}
        </Content>
      </Layout>
    </>
  );
};
export default DefaultLayout;
