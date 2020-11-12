import React from "react";
import Logo from "../logo.png";
import Banner from "../banner.jpg";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Pagination } from "@material-ui/lab";

const Header = ({ classes, characters, handleChangePage }) => {
  return (
    <Grid item xs={12}>
      <Paper className={classes.paper}>
        <h2 className={classes.bannerH2}>
          <img alt="Logo" src={Logo} />
        </h2>
        <img alt="Banner" src={Banner} className={classes.banner} />
      </Paper>
      <Grid item xs={12}>
        <Pagination
          variant="outlined"
          color="secondary"
          siblingCount={0}
          boundaryCount={0}
          count={characters.count}
          defaultPage={1}
          page={characters.defaultPage}
          boundaryCount={2}
          className={classes.inlinePagination}
          onChange={handleChangePage}
        />
      </Grid>
    </Grid>
  );
};

export default Header;
