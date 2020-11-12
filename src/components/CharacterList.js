import React from "react";
import Grid from "@material-ui/core/Grid";
import Character from "./Character";

const CharacterList = ({ classes, characters }) => {
  return (
    <Grid container direction={"row"} spacing={4} className={classes.noMargin}>
      {characters
        ? characters.data.map((character) => (
            <Grid
              className={classes.marginBottom}
              item
              xl={3}
              md={4}
              sm={12}
              xs={12}
              key={character.id}
            >
              <Character character={character} classes={classes}></Character>
            </Grid>
          ))
        : null}
    </Grid>
  );
};

export default CharacterList;
