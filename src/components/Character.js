import React from "react";
import PropTypes from "prop-types";

import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import FaceIcon from "@material-ui/icons/Face";
import ExploreIcon from "@material-ui/icons/Explore";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import Grow from "@material-ui/core/Grow";

import CharacterInfo from "./CharacterInfo";
import Location from "./Location";
import Episodes from "./Episodes";

const Character = ({ character, classes }) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  return (
    <Grow in>
      <Paper elevation={3} className={classes.paperNoPadding}>
        <Grid container item xs={12} spacing={2}>
          <Grid item xs={12} sm={4} className={classes.gridNoTopPadding}>
            <img alt="" className={classes.image} src={character.image} />
            <List className={classes.darkList}>
              {["Info", "Location", "Episodes"].map((text, index) => (
                <ListItem
                  button
                  key={text}
                  selected={selectedIndex === index}
                  onClick={(event) => handleListItemClick(event, index, text)}
                >
                  <ListItemIcon>
                    {index === 0 ? (
                      <FaceIcon />
                    ) : index === 1 ? (
                      <ExploreIcon />
                    ) : (
                      <OndemandVideoIcon />
                    )}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={12} sm={8}>
            <main className={classes.content}>
              <Typography
                gutterBottom
                variant="h4"
                className={classes.characterNameH4}
              >
                {character.name}
              </Typography>
              {selectedIndex <= 0 ? (
                <CharacterInfo
                  classes={classes}
                  character={character}
                ></CharacterInfo>
              ) : selectedIndex === 1 ? (
                <Location classes={classes} character={character}></Location>
              ) : (
                <Episodes classes={classes} character={character}></Episodes>
              )}
            </main>
          </Grid>
        </Grid>
      </Paper>
    </Grow>
  );
};

Character.propTypes = {
  character: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

export default Character;
