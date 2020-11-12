import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const CharacterInfo = ({ classes, character }) => (
  <Card className={classes.customHeight}>
    <CardContent>
      <Typography variant="h6" gutterBottom>
        General Information
      </Typography>
      <Typography variant="body1">
        <small>status:</small> {character.status}
      </Typography>
      <Typography variant="body1">
        <small>species:</small> {character.species}
      </Typography>
      <Typography variant="body1">
        <small>gender:</small> {character.gender}
      </Typography>
      <Typography variant="body2" component="p" className={classes.auto}>
        <br />
        <br />
        {`"${character.name} is a ${character.species} who seems ${character.status} :)"`}
      </Typography>
    </CardContent>
  </Card>
);

export default CharacterInfo;
