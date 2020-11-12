import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const Episodes = ({ classes, character }) => (
  <Card className={classes.custom}>
    <CardContent>
      <Typography variant="h6" gutterBottom>
        Episodes
      </Typography>

      <List className={classes.customHeight}>
        {character.episodesExt.map((episode) => (
          <ListItem
            alignItems="flex-start"
            key={`${episode.id}Episode`}
            component="div"
            className={classes.episodeListItem}
          >
            <ListItemAvatar>
              <Avatar alt={`${episode.id}. Episode`}>{episode.id}</Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={episode.name}
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    color="textPrimary"
                  >
                    {episode.air_date}
                  </Typography>
                </React.Fragment>
              }
            />
            <Divider variant="inset" component="div" />
          </ListItem>
        ))}
      </List>
    </CardContent>
  </Card>
);

export default Episodes;
