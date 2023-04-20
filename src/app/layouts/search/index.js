import React from "react";
import "./../../App.css";
import { Grid, TextField, Button } from "@mui/material";
import { Styles } from "./styles";

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
            sx={Styles.SearchGridItem}
          />
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
