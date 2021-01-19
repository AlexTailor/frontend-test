import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { useStyles } from "../StyledComponents";

export default function PaletteCard(props) {
  const classes = useStyles();
  const date = props.palette.dateCreated.slice(10, 16);

  return (
    <Grid container direction="row" spacing={2}>
      <Grid item className={classes.aligntext} sm>
        <Typography variant="h5" component="h2">
          {props.palette.title}
        </Typography>
        <Typography variant="h5" component="h1">
          by {props.palette.userName}
        </Typography>
        <Typography variant="h5" component="h1">
          {date}
        </Typography>
        <Typography variant="h5" component="h1">
          {props.palette.numVotes}
        </Typography>
      </Grid>
      <Grid item>
        <img
          className={classes.palette}
          src={props.palette.imageUrl}
          alt="Colour Palette"
        />
      </Grid>
    </Grid>
  );
}
