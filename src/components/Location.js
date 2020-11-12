import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import _ from "lodash";

const Location = ({ classes, character }) => (
  <Card className={classes.customHeight}>
    <CardContent>
      <Typography variant="h6" gutterBottom>
        Origin & Location
      </Typography>
      <Typography variant="body1">
        <small>location:</small>
        {_.get(character, "origin.name")}
      </Typography>
      <Typography variant="body1">
        <small>dimension:</small>
        {_.get(character, "locationExt.dimension")}
      </Typography>
      <Typography variant="body1">
        <small>amount of residents:</small>{" "}
        {_.get(character, "locationExt.residents")
          ? _.get(character, "locationExt.residents").length
          : 0}
      </Typography>
    </CardContent>
  </Card>
);

export default Location;
