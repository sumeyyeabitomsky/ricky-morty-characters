import React from "react";
import Logo from "../logo.png";
import Banner from "../banner.jpg";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const Header = ({ classes }) => {
  return (
    <Grid item xs={12}>
      <Paper className={classes.paper}>
        <h2 className={classes.bannerH2}>
          <img alt="Logo" src={Logo} />
        </h2>
        <img alt="Banner" src={Banner} className={classes.banner} />
      </Paper>
    </Grid>
  );
};

export default Header;
