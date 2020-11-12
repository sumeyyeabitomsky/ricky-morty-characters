import React from "react";
import Grid from "@material-ui/core/Grid";
import { Pagination } from "@material-ui/lab";

const Footer = ({ handleChangePage, characters, classes }) => {
  return (
    <Grid item xs={12}>
      <Pagination
        variant="outlined"
        color="primary"
        count={characters.count}
        defaultPage={1}
        page={characters.defaultPage}
        boundaryCount={2}
        className={classes.inlinePagination}
        onChange={handleChangePage}
      />
    </Grid>
  );
};

export default Footer;
