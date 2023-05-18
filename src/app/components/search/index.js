import React from "react";
import "./../../App.css";
import { Grid, TextField, Button } from "@mui/material";
import { Styles } from "./styles";

const Search = () => {
  return (
    <>
      <Grid container justifyContent={"center"}>
        <Grid item xs={6} md={3}>
          <TextField
            hiddenLabel
            placeholder="Enter a city"
            variant="filled"
            size="small"
            fullWidth={true}
            sx={Styles.SearchGridItem}
          />
        </Grid>
        <Grid item xs={12} md={"auto"} textAlign={"center"}>
          <Button
            variant="contained"
            onClick={() => {
              alert("This functionality is still under development");
            }}
            sx={Styles.SearchButton}
          >
            Add city
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Search;
